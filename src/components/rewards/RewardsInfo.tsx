import React, { FC, useEffect, useState } from "react";
import {
	getPrivilegeStageInfo,
	getSasToken,
} from "../../api/LeaderBoardService";
import RewardInfoStyles from "./RewardsInfo.styles";
import { usePopup } from "../../api/PopupService";

interface PrivilegeStageProps {
	applicationId: string;
}

const PrivilegeStage: FC<PrivilegeStageProps> = (props) => {
	const [privilegeInfo, setPrivilegeStage] = useState<any[]>([]);
	const [sasToken, setSasToken] = useState<string>("");
	const { closePopup } = usePopup();
	const handleClosePopup = () => {
		closePopup();
	};
	useEffect(() => {
		getPrivilegeStageInfo(props.applicationId)
			.then((responseData: any) => {
				setPrivilegeStage(responseData?.data?.data);
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
	}, []);

	return (
		<RewardInfoStyles.RewardModal className="modal-wrap">
			<div className="modal-content">
				<div className="header">
					<img className="cancel" alt="cancel" onClick={handleClosePopup} />
					<span className="heading-1">Privilege Stages</span>
				</div>
				<div
					className={`table-container 	${
						!privilegeInfo?.length ? "noRewards" : ""
					}`}
				>
					{privilegeInfo?.length ? (
						<table className="scroll-inner" aria-describedby="score-info">
							<thead>
								<tr>
									<th scope="col">Points</th>
									<th scope="col">Rewards</th>
									<th scope="col">Description</th>
								</tr>
							</thead>

							<tbody>
								{privilegeInfo.map((privilege) => (
									<tr key={privilege._id}>
										<td>
											<div className="points center">
												<div>
													{privilege?.points ? privilege.points : "-"} Points
												</div>
											</div>
										</td>
										<td className="rewards">
											<div className="center">
												{privilege.lookupValue ? (
													<>
														<img
															src={`${privilege.lookupValue.sourceImgUrl}${sasToken}`}
															alt=""
														/>
														<div
															className="lookupValue"
															title={privilege.lookupValue.value}
														>
															{privilege.lookupValue.value}
														</div>
													</>
												) : (
													"- "
												)}
											</div>
										</td>
										<td>
											<div
												className="center desc"
												title={privilege.description}
											>
												<div className="description">
													{privilege.description ? privilege.description : "-"}
												</div>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					) : (
						<div className="noRewards">There are no rewards available</div>
					)}
				</div>
			</div>
		</RewardInfoStyles.RewardModal>
	);
};

export default PrivilegeStage;
