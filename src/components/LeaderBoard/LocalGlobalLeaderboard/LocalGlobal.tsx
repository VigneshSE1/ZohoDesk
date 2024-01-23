import { ILeaderBoard, UserRank } from "../../../models/LeaderBoard";

import LocalGlobalLeaderBoardStyles from "./LocalGlobal.styles";
import React from "react";
import { env } from "../../../env/env";

const LocalGlobal: React.FC<{
  leaderBoards: any[];
  userInformation: any;
  sasToken: any;
}> = ({ leaderBoards, userInformation, sasToken }) => {
  const displayedColumns = ["Rank", "Player", "Points", "Reward"]; // Update with your actual column names
  const rewardImgErrorHandler = (e: any) => {
    e.target.src = `${env.BLOB_URL}/${env.CONTAINER_PATH}/no-reward.png`;
  };
  const avatarErrorHandler = (e: any) => {
    e.target.src = `${env.BLOB_URL}/${env.CONTAINER_PATH}/avatar.png`;
  };
  return (
    <LocalGlobalLeaderBoardStyles.Container>
      <table
        aria-label="leaderboard"
        aria-describedby="leaderboard"
        aria-hidden="true"
        className="leaderboard"
      >
        <thead>
          {leaderBoards?.length >= 3 && (
            <tr>
              {displayedColumns.map((column, index) => (
                <th key={index} scope="col" role="columnheader">
                  {column}
                </th>
              ))}
            </tr>
          )}
        </thead>
        <tbody>
          {leaderBoards?.map((leaderBoard, i) => (
            <React.Fragment key={i}>
              {i === 10 &&
                leaderBoards[i].rank - leaderBoards[i - 1].rank >= 2 && (
                  <tr>
                    <td className="more" colSpan={displayedColumns.length}>
                      <img alt="more" />
                    </td>
                  </tr>
                )}
              {i >= 3 && (
                <tr
                  className={
                    userInformation.userId === leaderBoard.userId
                      ? "selectedRow"
                      : ""
                  }
                  id={
                    userInformation.userId === leaderBoard.userId
                      ? "selectedRow"
                      : ""
                  }
                >
                  <td className="rank" role="columnheader">
                    <div>{leaderBoard?.rank || "NA"}</div>
                  </td>
                  <td className="avatar" role="columnheader">
                    <div className="player">
                      <img
                        className={`profile ${
                          !leaderBoard?.profileImageUrl ||
                          !sasToken ||
                          leaderBoard?.imageOnError
                            ? "default-avatar-gamify"
                            : ""
                        }`}
                        alt=""
                        src={
                          leaderBoard?.profileImageUrl?.includes("assets")
                            ? `${leaderBoard?.profileImageUrl}${sasToken}`
                            : leaderBoard?.profileImageUrl
                        }
                        onError={(e) => avatarErrorHandler(e)}
                      />
                      <span>{leaderBoard?.userName || "-"}</span>
                    </div>
                  </td>
                  <td role="columnheader">
                    <div className="score">
                      <span>{leaderBoard?.score}</span>
                    </div>
                  </td>
                  <td role="columnheader">
                    <div className="reward">
                      <img
                        alt={
                          leaderBoard?.userReward?.previousReward?.value || ""
                        }
                        className={`reward ${
                          !leaderBoard?.userReward?.previousReward
                            ?.sourceImgUrl || !sasToken
                            ? "default-reward-gamify"
                            : ""
                        }`}
                        src={`${leaderBoard?.userReward?.previousReward?.sourceImgUrl}${sasToken}`}
                        onError={(e) => rewardImgErrorHandler(e)}
                      />
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </LocalGlobalLeaderBoardStyles.Container>
  );
};

export default LocalGlobal;
