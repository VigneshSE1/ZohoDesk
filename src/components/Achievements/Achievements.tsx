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

const Achievement: FC<userDetails> = (props) => {
  const [progressAndUserRewards, setUserReward] = useState<any>({});
  const [isLoading, setLoader] = useState<boolean>(true);

  useEffect(() => {
    getUserRewards(props.userId, props.applicationId)
      .then((responseData: any) => {
        setUserReward(responseData.data);
        setLoader(false);
      })
      .catch((error: any) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <GlobalStyles.Scroll>
      <AchievementStyles.Container>
        <div style={{ display: "flex", gap: "1em" }}>
          <div>
            <Progress
              progress={progressAndUserRewards.progress}
              userScore={props.userScore}
              level={progressAndUserRewards.level}
              nextReward={progressAndUserRewards.nextReward}
              previousReward={progressAndUserRewards.previousReward}
            />
            {env.isRedeemEnabled && (
              <div className="card">
                <Coin
                  userId={props.userId}
                  applicationId={props.applicationId}
                />
                <Redeem
                  userId={props.userId}
                  applicationId={props.applicationId}
                />
                <Order
                  userId={props.userId}
                  applicationId={props.applicationId}
                />
              </div>
            )}
          </div>
          <div>
            <UserReward
              userRewards={progressAndUserRewards.userRewards}
              isLoading={isLoading}
              appId={props.applicationId}
            />
          </div>
        </div>
      </AchievementStyles.Container>
    </GlobalStyles.Scroll>
  );
};

export default Achievement;
