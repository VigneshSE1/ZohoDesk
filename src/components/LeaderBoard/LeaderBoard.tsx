import React, { FC, createRef, useEffect, useState } from "react";
import Rank from "./Rank/Rank";
import {
	getLeaderBoardByUserId,
	getSasToken,
} from "../../api/LeaderBoardService";
import { ILeaderBoard, UserRank } from "../../models/LeaderBoard";
import LeaderBoardStyles from "./LeaderBoard.styles";
import GlobalStyles from "../../common/styles/global.styles";
import { DomainEvent } from "../../utils/eventDispatcher";
import { DomainEvents } from "../../enums/DomainEvents";
import useEvent from "../../utils/useEvents";

interface LeaderBoardProps {
	userId: string;
	applicationId: string;
	profileImageUrl?: string;
}

const LeaderBoard: FC<LeaderBoardProps> = (props) => {
	const selectedUserRef: any = createRef();

	const scroll = () => {
		if (selectedUserRef.current) {
			selectedUserRef.current.scrollIntoView({
				behavior: "smooth",
				block: "center",
			});
		}
	};
	const [visible, setVisible] = useState(false);
	const [leaderBoardUsers, setLeaderBoardData] = useState<ILeaderBoard | null>(
		null
	);
	const userCreatedEvent: DomainEvent | undefined = useEvent(
		DomainEvents.GETUSERINFO
	);
	const [sasToken, setSasToken] = useState<string>("");
	useEffect(() => {
		getLeaderBoardByUserId(props.userId, props.applicationId)
			.then((responseData: ILeaderBoard) => {
				setLeaderBoardData(responseData);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
		getSasToken()
			.then((sasToken: string) => {
				setSasToken(sasToken);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, [userCreatedEvent]);

	const onScroll = (e:any) => {
		setVisible(e.target.scrollTop > 95);
	};
	return (
		<GlobalStyles.Scroll>
			<LeaderBoardStyles.Container className="container">
				<Rank
					sasToken={sasToken}
					leaderBoard={leaderBoardUsers}
					userId={props.userId}
				/>

				{leaderBoardUsers?.Items && leaderBoardUsers.Items?.length > 3 ? (
					<div className="container" onScroll={onScroll}>
						<table className="leader-board">
							<tbody>
								{leaderBoardUsers?.Items?.map(
									(leaderBoard: UserRank, index: number) => {
										if (index >= 3) {
											return (
												<tr
													ref={
														leaderBoard.userId == props.userId
															? selectedUserRef
															: null
													}
													key={leaderBoard._id}
													className={`${
														leaderBoard.userId == props.userId
															? "selected-row"
															: ""
													}`}
												>
													<td className="rank" role="columnheader">
														<div className="circle">{leaderBoard.rank}</div>
													</td>
													<td className="avatar" role="columnheader">
														<img
															className={`profile ${
																!leaderBoard?.profileImageUrl || !sasToken
																	? "default-avatar"
																	: ""
															}`}
															alt=""
															src={leaderBoard?.profileImageUrl + sasToken}
														/>
													</td>
													<td className="avatar" role="columnheader">
														<div>{leaderBoard.userName}</div>
													</td>
													<td role="columnheader">
														<div className="score">
															<span>{leaderBoard.score}</span>
														</div>
													</td>
												</tr>
											);
										}
									}
								)}
							</tbody>
						</table>
						<div className={`scroll-btn ${visible ? "visible" : "invisible"}`}>
							<button onClick={scroll}>
								<img
									className={`profile ${
										!props.profileImageUrl || !sasToken ? "default-avatar" : ""
									}`}
									alt=""
									src={props.profileImageUrl + sasToken}
								/>
								<div>You're here</div>
								<svg
									width="20px"
									height="20px"
									viewBox="0 0 24 24"
									fill="#FFFFFF"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M11.1808 15.8297L6.54199 9.20285C5.89247 8.27496 6.55629 7 7.68892 7L16.3111 7C17.4437 7 18.1075 8.27496 17.458 9.20285L12.8192 15.8297C12.4211 16.3984 11.5789 16.3984 11.1808 15.8297Z"
										fill="#FFFFFF"
									/>
								</svg>
							</button>
						</div>
					</div>
				) : (
					<div className="not-found">No users found</div>
				)}
			</LeaderBoardStyles.Container>
		</GlobalStyles.Scroll>
	);
};

export default LeaderBoard;
