import { useEffect, useState } from "react";
import Tabs from "../Tabs/Tabs";
import { initializeClientCredentials } from "../../api/TokenService";
import {
  getLocalLeaderBoardByUserId,
  getSasToken,
  getUserInfo,
} from "../../api/LeaderBoardService";
import { ILeaderBoard } from "../../models/LeaderBoard";
import { Bolt } from "../../common/icons/Bolt";
import GlobalStyles from "../../common/styles/global.styles";
import MenuStyles from "./Menu.styles";
import { PopupService } from "../../api/PopupService";
import { Info } from "../../common/icons/Info";
import Achievement from "../Achievements/Achievements";
import LeaderBoard from "../LeaderBoard/LeaderBoard";

export const Menu = (props: any) => {
  const [showTabs, setShowTabs] = useState(false);
  const [sasToken, setSasToken] = useState<string>("");
  let [userInfo, setUserInfo] = useState<any>({});
  initializeClientCredentials(props.clientId, props.clientSecret);
  const handleToggleTabs = () => {
    setShowTabs(!showTabs);
  };
  useEffect(() => {
    getUserInfo(props.userId, props.applicationId)
      .then((response) => {
        setUserInfo(response.data.data);
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

  useEffect(() => {});
  return (
    <GlobalStyles.DMFonts>
      <div style={{ display: "flex", height: "100vh" }}>
        <Achievement
          userId={props.userId}
          applicationId={props.applicationId}
          clientId={props.clientId}
          clientSecret={props.clientSecret}
          userScore={props.userScore}
          redemptionEnabled={props.redemptionEnabled}
        />
        <LeaderBoard userInfo={userInfo} applicationId={props.applicationId} />
      </div>
    </GlobalStyles.DMFonts>
  );
};
