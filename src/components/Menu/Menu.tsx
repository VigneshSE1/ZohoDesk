import React, { FC, useState, useEffect } from "react";
import Tabs from "../Tabs/Tabs";
import { Info } from "../../common/icons/Info";
import MenuStyles from "./Menu.styles";
import { PopupService } from "../../api/PopupService";

import {
  getLeaderBoardByUserId,
  getSasToken,
  getUserInfo,
} from "../../api/LeaderBoardService";
import { Bolt } from "../../common/icons/Bolt";
import { ILeaderBoard } from "../../models/LeaderBoard";
import { initializeClientCredentials } from "../../api/TokenService";
import GlobalStyles from "../../common/styles/global.styles";
import { DomainEvent } from "../../utils/eventDispatcher";
import useEvent from "../../utils/useEvents";
import { DomainEvents } from "../../enums/DomainEvents";

interface MenuProps {
  userId: string;
  applicationId: string;
  clientId: string;
  clientSecret: string;
}

const Menu: FC<MenuProps> = (props) => {
  initializeClientCredentials(props.clientId, props.clientSecret);
  //   return (
  //     <div>
  //       <h1>{props.clientId}</h1>
  //       <h2>{props.clientSecret}</h2>
  //     </div>
  //   );
  const [showTabs, setShowTabs] = useState(false);
  const [sasToken, setSasToken] = useState<string>("");
  let [userInfo, setUserInfo] = useState<any>({});
  const handleToggleTabs = () => {
    setShowTabs(!showTabs);
  };
  const userCreatedEvent: DomainEvent | undefined = useEvent(
    DomainEvents.GETUSERINFO
  );

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
    getLeaderBoardByUserId(props.userId, props.applicationId)
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
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [props.userId, props.applicationId, userCreatedEvent]);

  return (
    <PopupService>
      <GlobalStyles.DMFonts>
        <MenuStyles.Menu>
          <MenuStyles.Header>
            <div>
              <Info applicationId={props.applicationId} />
            </div>
            <MenuStyles.Wallet onClick={handleToggleTabs}>
              <Bolt />
              <div>{userInfo?.score || 0}</div>
            </MenuStyles.Wallet>
            <MenuStyles.ImgContainer onClick={handleToggleTabs}>
              <img
                src={`${userInfo?.profileImageUrl}`}
                className={`${
                  !userInfo?.profileImageUrl ? "default-avatar" : ""
                }`}
              />
              <p>{userInfo?.userName}</p>
            </MenuStyles.ImgContainer>
          </MenuStyles.Header>
          {showTabs && (
            <div className="tabs">
              <Tabs
                clientId={props.clientId}
                clientSecret={props.clientId}
                userId={props.userId}
                applicationId={props.applicationId}
                userScore={userInfo.score}
                profileImageUrl={userInfo?.profileImageUrl}
              />
            </div>
          )}
        </MenuStyles.Menu>
      </GlobalStyles.DMFonts>
    </PopupService>
  );
};

export default Menu;
