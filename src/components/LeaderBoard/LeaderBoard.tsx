import React, { FC, useEffect, useState } from "react";
import {
  getLocalLeaderBoardByUserId,
  getSasToken,
} from "../../api/LeaderBoardService";
import {
  getRankByUserGroupId,
  getUserGroupByAppId,
} from "../../api/UserGroup.service";

import GlobalStyles from "../../common/styles/global.styles";
import LeaderBoardStyles from "./LeaderBoard.styles";
import Rank from "./Rank/Rank";
import LocalGlobal from "./LocalGlobalLeaderboard/LocalGlobal";

interface LeaderBoardProps {
  userInfo: any;
  applicationId: string;
}

const LeaderBoard: FC<LeaderBoardProps> = (props) => {
  const [leaderBoardTabIndex, setLeaderBoardTabIndex] = useState<number>(0);
  const [leaderBoardUsers, setLeaderBoardData] = useState<any[]>([]);
  const [userGrpList, setUserGroupList] = useState<any[]>([]);
  const [currentUserGroup, setCurrentUserGroup] = useState<string>("");
  const leaderBoard = {
    LOCAL: 0,
    USERGROUP: 1,
    GLOBAL: 2,
  };

  const goToLocalLeaderBoard = () => {
    setLeaderBoardTabIndex(leaderBoard.LOCAL);
    getLocalLeaderBoardByUserId(props.userInfo.userId, props.applicationId)
      .then((responseData: any) => {
        setLeaderBoardData(responseData?.Items);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const goToUserGroupListPage = () => {
    setLeaderBoardTabIndex(leaderBoard.USERGROUP);
    getUserGroupByAppId(props.userInfo.userId, props.applicationId)
      .then((responseData: any) => {
        setUserGroupList(responseData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const goToGlobalLeaderboard = (userGrp: any) => {
    setLeaderBoardTabIndex(leaderBoard.GLOBAL);
    setCurrentUserGroup(userGrp.userGroupName);
    getRankByUserGroupId(
      userGrp.userGroupId,
      props.userInfo.userId,
      props.applicationId
    )
      .then((responseData: any) => {
        setLeaderBoardData(responseData?.Items);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const [sasToken, setSasToken] = useState<string>("");

  useEffect(() => {
    goToLocalLeaderBoard();
    getSasToken()
      .then((sasToken: string) => {
        setSasToken(sasToken);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [props.userInfo.userId, props.applicationId]);

  return (
    <GlobalStyles.Scroll>
      <LeaderBoardStyles.Container className="container">
        <div className="tabs-group">
          <button
            className={`tab ${
              leaderBoardTabIndex === leaderBoard.LOCAL ? "active" : ""
            }`}
            onClick={goToLocalLeaderBoard}
            disabled={leaderBoardTabIndex === leaderBoard.LOCAL}
          >
            Local
          </button>
          <button
            className={`tab ${
              leaderBoardTabIndex === leaderBoard.USERGROUP ||
              leaderBoardTabIndex === leaderBoard.GLOBAL
                ? "active"
                : ""
            }`}
            onClick={() => goToUserGroupListPage()}
            disabled={
              leaderBoardTabIndex === leaderBoard.USERGROUP ||
              leaderBoardTabIndex === leaderBoard.GLOBAL
            }
          >
            Over All
          </button>
        </div>

        {(() => {
          switch (leaderBoardTabIndex) {
            case leaderBoard.LOCAL:
              return (
                <React.Fragment>
                  <Rank
                    sasToken={sasToken}
                    leaderBoard={leaderBoardUsers}
                    userId={props.userInfo.userId}
                  />
                  <div className="bg-leaderboard">
                    <LocalGlobal
                      leaderBoards={leaderBoardUsers}
                      userInformation={props.userInfo}
                      sasToken={sasToken}
                    />
                  </div>
                </React.Fragment>
              );
            case leaderBoard.USERGROUP:
              return (
                <div className="bg-leaderboard groups">
                  <div className="heading">
                    <img
                      className={`profile ${
                        !props.userInfo?.profileImageUrl || !sasToken
                          ? "default-avatar-gamify"
                          : ""
                      }`}
                      alt=""
                      src={
                        props.userInfo?.profileImageUrl?.includes("assets")
                          ? `${props.userInfo?.profileImageUrl}${sasToken}`
                          : props.userInfo?.profileImageUrl
                      }
                    />
                    <span>You Stand …</span>
                  </div>
                  {userGrpList?.length > 0 &&
                    userGrpList.map(
                      (userGrp, i) =>
                        userGrp?.rank !== undefined && (
                          <button
                            key={i}
                            className="usergp-list"
                            onClick={() => goToGlobalLeaderboard(userGrp)}
                          >
                            <div className="list">
                              <div className="rank">{`#${userGrp?.rank}`}</div>

                              <div className="name">
                                {userGrp?.userGroupName}
                              </div>
                            </div>
                            <button>
                              <img alt="drop-down" />
                            </button>
                          </button>
                        )
                    )}
                </div>
              );
            case leaderBoard.GLOBAL:
              return (
                <React.Fragment>
                  <Rank
                    sasToken={sasToken}
                    leaderBoard={leaderBoardUsers}
                    userId={props.userInfo.userId}
                  />
                  <div className="bg-leaderboard">
                    <div className="gpName">
                      <button
                        className="back-arrow"
                        onClick={() => goToUserGroupListPage()}
                      >
                        <img alt="" className="back" />
                      </button>
                      <span className="gpName">{currentUserGroup}</span>
                    </div>
                    <LocalGlobal
                      leaderBoards={leaderBoardUsers}
                      userInformation={props.userInfo}
                      sasToken={sasToken}
                    />
                  </div>
                </React.Fragment>
              );
            default:
              return <div>default</div>;
          }
        })()}
      </LeaderBoardStyles.Container>
    </GlobalStyles.Scroll>
  );
};

export default LeaderBoard;
