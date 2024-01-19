import React, { FC } from "react";
import { ILeaderBoard } from "../../../models/LeaderBoard";
import RankStyles from "./Rank.styles";

interface RankProps {
	leaderBoard?: ILeaderBoard | null;
	sasToken?: string;
	userId: string;
}

const Rank: FC<RankProps> = (props: any) => {
	const isRank = (count: number) => props?.leaderBoard?.Items?.length > count;

	return (
		<RankStyles.Container>
			<div className="rank-holder">
				<div className="rank-2">
					<div className="dp">
						<img
							className={`profile ${
								!isRank(1) ||
								!props?.leaderBoard?.Items[1]?.profileImageUrl ||
								!props?.sasToken
									? "default-avatar"
									: ""
							} ${
								props?.leaderBoard?.Items[1]?.userId === props.userId
									? "highlighted"
									: ""
							}`}
							alt=""
							src={
								props?.leaderBoard?.Items[1]?.profileImageUrl + props?.sasToken
							}
						/>
						<span>{isRank(1) ? props?.leaderBoard?.Items[1]?.rank : 0}</span>
					</div>
					<div className="username">
						{isRank(1) ? props?.leaderBoard?.Items[1]?.userName : "Player 2"}
					</div>
					<div className="score">
						<span>{isRank(1) ? props?.leaderBoard?.Items[1]?.score : 0}</span>
					</div>
				</div>
				<div className="rank-1">
					<div className="dp">
						<img
							className={`profile ${
								!isRank(0) || !props?.leaderBoard?.Items[0]?.profileImageUrl
									? "default-avatar"
									: ""
							} ${
								props?.leaderBoard?.Items[0]?.userId === props.userId
									? "highlighted"
									: ""
							}`}
							alt=""
							src={
								props?.leaderBoard?.Items[0]?.profileImageUrl + props?.sasToken
							}
						/>
						<span>{isRank(0) ? props?.leaderBoard?.Items[0]?.rank : 0}</span>
					</div>
					<div className="username">
						{isRank(0) ? props?.leaderBoard?.Items[0]?.userName : "Player 1"}
					</div>
					<div className="score">
						<span>{isRank(0) ? props?.leaderBoard?.Items[0]?.score : 0}</span>
					</div>
				</div>
				<div className="rank-3">
					<div className="dp">
						<img
							className={`profile ${
								!isRank(2) || !props?.leaderBoard?.Items[2]?.profileImageUrl
									? "default-avatar"
									: ""
							} ${
								props?.leaderBoard?.Items[2]?.userId === props.userId
									? "highlighted"
									: ""
							}`}
							alt=""
							src={
								props?.leaderBoard?.Items[2]?.profileImageUrl + props?.sasToken
							}
						/>
						<span>{isRank(2) ? props?.leaderBoard?.Items[2]?.rank : 0}</span>
					</div>
					<div className="username">
						{isRank(2) ? props?.leaderBoard?.Items[2]?.userName : "Player 3"}
					</div>
					<div className="score">
						<span>{isRank(2) ? props?.leaderBoard?.Items[2]?.score : 0}</span>
					</div>
				</div>
			</div>
		</RankStyles.Container>
	);
};

export default Rank;
