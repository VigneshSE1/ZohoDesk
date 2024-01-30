import { useEffect, useState } from "react";
import { initializeClientCredentials } from "../../api/TokenService";
import {
  getLocalLeaderBoardByUserId,
  getSasToken,
  getUserInfo,
} from "../../api/LeaderBoardService";
import { ILeaderBoard } from "../../models/LeaderBoard";
import GlobalStyles from "../../common/styles/global.styles";
import { getUserRewards } from "../../api/RedeemService";
import Achievement from "../Achievements/Achievements";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import UserReward from "../UserReward/UserReward";
import TabStyles from "./Tabs.styles";

export const Menu = (props: any) => {
  const [showTabs, setShowTabs] = useState(false);
  const [sasToken, setSasToken] = useState<string>("");
  let [userInfo, setUserInfo] = useState<any>({});
  let [redemptionEnabled, setRedeemStatus] = useState<boolean>(false);
  const [progressAndUserRewards, setUserReward] = useState<any>({});
  const [isLoading, setLoader] = useState<boolean>(true);
  const [avatarEditForm, setAvatarEditForm] = useState<boolean>(false);
  const [gallaryEditForm, setGallaryEditForm] = useState<boolean>(false);
  const tabNames = ["Achievement", "LeaderBoard"];
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const handleToggleTabs = () => {
    setShowTabs(!showTabs);
  };

  const toggleAvatar = () => {
    setAvatarEditForm(!avatarEditForm);
  };

  const toggleGallary = () => {
    setGallaryEditForm(!gallaryEditForm);
  };

  initializeClientCredentials(props.clientId, props.clientSecret);

  useEffect(() => {
    getUserInfo(props.userId, props.applicationId)
      .then((response) => {
        setUserInfo(response.data.data);
        setRedeemStatus(response.data.data.client.redemptionEnabled);
      })
      .catch((error) => {
        console.error("Error fetching user info:", error);
      });
    getSasToken()
      .then((sasToken: string) => {
        setSasToken(sasToken);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    getLocalLeaderBoardByUserId(props.userId, props.applicationId)
      .then((responseData: ILeaderBoard) => {
        const currentUser = responseData.Items.find(
          (user) => user.userId === props.userId
        );

        if (currentUser) {
          setUserInfo((prevUserInfo: any) => ({
            ...prevUserInfo,
            score: currentUser.score,
          }));
        }
      })
      .catch((error: any) => {
        console.error("Error fetching data:", error);
      });
  }, [props.userId, props.applicationId]);

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
    <GlobalStyles.DMFonts>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TabStyles.TabContainer>
          <TabStyles.TabNav>
            {tabNames.map((tabName, index) => (
              <TabStyles.TabList
                key={tabName}
                className={activeTab === index ? "active" : ""}
                onClick={() => handleClick(index)}
              >
                <a>{tabName}</a>
              </TabStyles.TabList>
            ))}
          </TabStyles.TabNav>
        </TabStyles.TabContainer>
      </div>
      <div
        style={{
          width: "50%",
          marginLeft: "25%",
          height: "100vh",
          alignItems: "center",
        }}
      >
        {activeTab === 0 ? (
          <div>
            <Achievement
              userId={props.userId}
              applicationId={props.applicationId}
              clientId={props.clientId}
              clientSecret={props.clientSecret}
              userScore={props.userScore}
              redemptionEnabled={props.redemptionEnabled}
            />
            <UserReward
              userRewards={progressAndUserRewards.userRewards}
              isLoading={isLoading}
              appId={props.applicationId}
            />
          </div>
        ) : (
          <LeaderBoard
            userInfo={userInfo}
            applicationId={props.applicationId}
          />
        )}
      </div>
    </GlobalStyles.DMFonts>
  );
};
