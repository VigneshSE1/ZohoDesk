import React, { FC, useEffect, useState } from "react";
import Progress from "../ProgressBar/ProgressBar";
import Coin from "../Coin/Coin";
import Redeem from "../Redeem/Redeem";
import UserReward from "../UserReward/UserReward";
import Order from "../Order/Order";
import { userDetails } from "../../models/UserDetails";
import { getUserRewards } from "../../api/RedeemService";
import AchievementStyles from "./Achievements.styles";
import GlobalStyles from "../../common/styles/global.styles";
import { env } from "../../env/env";
import useEvent from "../../utils/useEvents";
import { DomainEvent } from "../../utils/eventDispatcher";
import { DomainEvents } from "../../enums/DomainEvents";

const Achievement: FC<userDetails> = (props) => {
	const [progressAndUserRewards, setUserReward] = useState<any>({});
	const [isLoading, setLoader] = useState<boolean>(true);

	const userCreatedEvent: DomainEvent | undefined = useEvent(
		DomainEvents.GETUSERINFO
	);
	useEffect(() => {
		getUserRewards(props.userId, props.applicationId)
			.then((responseData: any) => {
				setUserReward(responseData.data);
				setLoader(false);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, [userCreatedEvent]);
	return (
		<GlobalStyles.Scroll>
			<AchievementStyles.Container>
				<Progress
					progress={progressAndUserRewards.progress}
					userScore={props.userScore}
					level={progressAndUserRewards.level}
					nextReward={progressAndUserRewards.nextReward}
					switchToTab={props.switchToTab}
					previousReward={progressAndUserRewards.previousReward}
				/>
				{env.isRedeemEnabled && (
					<div className="card">
						<Coin userId={props.userId} applicationId={props.applicationId} />
						<Redeem userId={props.userId} applicationId={props.applicationId} />
						<Order userId={props.userId} applicationId={props.applicationId} />
					</div>
				)}

				<UserReward
					userRewards={progressAndUserRewards.userRewards}
					isLoading={isLoading}
				/>
			</AchievementStyles.Container>
		</GlobalStyles.Scroll>
	);
};

export default Achievement;
