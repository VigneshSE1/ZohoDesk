import React, { FC, useEffect, useState } from "react";
import Progress from "../ProgressBar/ProgressBar";
import Coin from "../Coin/Coin";
import Redeem from "../Redeem/Redeem";
import Order from "../Order/Order";
import { userDetails } from "../../models/UserDetails";
import { getUserRewards } from "../../api/RedeemService";
import { env } from "../../env/env";
import GlobalStyles from "../../common/styles/global.styles";
import AchievementStyles from "./Achievements.styles";

const Achievement: FC<userDetails> = (props) => {
  const [progressAndUserRewards, setUserReward] = useState<any>({});

  useEffect(() => {
    getUserRewards(props.userId, props.applicationId)
      .then((responseData: any) => {
        setUserReward(responseData.data);
      })
      .catch((error: any) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <GlobalStyles.Scroll>
      <AchievementStyles.Container>
        <Progress
          progress={progressAndUserRewards.progress}
          userScore={props.userScore}
          level={progressAndUserRewards.level}
          nextReward={progressAndUserRewards.nextReward}
          previousReward={progressAndUserRewards.previousReward}
        />
        {env.isRedeemEnabled && (
          <div className="card">
            <Coin userId={props.userId} applicationId={props.applicationId} />
            <Redeem userId={props.userId} applicationId={props.applicationId} />
            <Order userId={props.userId} applicationId={props.applicationId} />
          </div>
        )}
      </AchievementStyles.Container>
    </GlobalStyles.Scroll>
  );
};

export default Achievement;
