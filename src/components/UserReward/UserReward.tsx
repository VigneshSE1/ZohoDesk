import React, { FC, useEffect, useState } from "react";
import { getSasToken } from "../../api/LeaderBoardService";
import RewardStyles from "./UserReward.styles";

interface UserRewardProps {
	userRewards: any;
	isLoading: boolean;
}

const UserReward: FC<UserRewardProps> = (props) => {
	const countOfRewards = props.userRewards
		? Object.keys(props.userRewards).reduce(
				(count, rewardType) => count + props.userRewards[rewardType].length,
				0
		  )
		: 0;
	const [sasToken, setSasToken] = useState<string>("");

	useEffect(() => {
		getSasToken()
			.then((sasToken: string) => {
				setSasToken(sasToken);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	});

	return (
		<RewardStyles.RewardContainer>
			<div className="labels">
				<h3>Badge board ({countOfRewards || 0})</h3>
			</div>

			{!props.isLoading &&
			props.userRewards &&
			Object.keys(props.userRewards).length ? (
				<div className="user-rewards">
					{Object.keys(props.userRewards).map((rewardType, i) => (
						<React.Fragment key={i}>
							{props.userRewards[rewardType].map((reward:any, j:any) => (
								<div
									key={j}
									className={`reward ${
										(i * props.userRewards[rewardType].length + j) % 6 === 0
											? "color1"
											: (i * props.userRewards[rewardType].length + j) % 6 === 1
											? "color2"
											: (i * props.userRewards[rewardType].length + j) % 6 === 2
											? "color3"
											: (i * props.userRewards[rewardType].length + j) % 6 === 3
											? "color4"
											: (i * props.userRewards[rewardType].length + j) % 6 === 4
											? "color5"
											: "color6"
									} ${!reward.attained ? "attained" : ""}`}
									title={reward.value || ""}
								>
									<div className="reward-border">
										<img
											src={reward.sourceImgUrl + sasToken || ""}
											alt=""
											className={
												!reward.sourceImgUrl || !sasToken
													? "default-reward"
													: ""
											}
										/>
									</div>
									<div className="reward-content">
										<div className="reward-name">
											{reward.value
												? reward.value.charAt(0).toUpperCase() +
												  reward.value.slice(1)
												: ""}
										</div>
									</div>
								</div>
							))}
						</React.Fragment>
					))}
				</div>
			) : props.isLoading ? (
				<div className="progamification-spinner"></div>
			) : (
				<div className="msg">
					<h4>No Badges</h4>
				</div>
			)}
		</RewardStyles.RewardContainer>
	);
};

export default UserReward;
