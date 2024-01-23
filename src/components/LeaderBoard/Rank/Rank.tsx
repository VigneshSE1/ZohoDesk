import RankStyles from "./Rank.styles";
import React from "react";
import { env } from "../../../env/env";

const LeaderBoard: React.FC<{
  leaderBoard: any[];
  userId: string;
  sasToken: string;
}> = (props) => {
  const imgErrorHandler = (event: any) => {
    event.target.src = `${env.BLOB_URL}/${env.CONTAINER_PATH}/avatar.png`;
  };

  const ellipticString = (userName: string, index: number) => {
    // Implement your ellipticString function
    return userName?.length > 10
      ? userName.substring(0, 10) + "..."
      : userName || `player-${index}`;
  };

  return (
    <RankStyles.Container>
      <div
        className={`rank-holder ${
          props.leaderBoard?.length > 3 ? "attained-score" : ""
        }`}
      >
        {props.leaderBoard?.length > 0 && (
          <>
            <div
              className="rank-2"
              title={props.leaderBoard?.[1]?.userName || "NA"}
            >
              <div className="rank">{props.leaderBoard?.[1]?.rank || "NA"}</div>
              <div className="outer-border">
                <div className="dp">
                  <img
                    className={`profile inner-content ${
                      !props.leaderBoard?.[1]?.profileImageUrl ||
                      !props.sasToken
                        ? "default-avatar-gamify"
                        : ""
                    } ${
                      props.leaderBoard?.[1]?.userId === props.userId
                        ? "highlighted"
                        : ""
                    }`}
                    alt=""
                    src={
                      props.leaderBoard?.[1]?.profileImageUrl?.includes(
                        "assets"
                      )
                        ? `${props.leaderBoard?.[1]?.profileImageUrl}
											  ${props.sasToken}`
                        : props.leaderBoard?.[1]?.profileImageUrl || ""
                    }
                    onError={(event) => imgErrorHandler(event)}
                  />
                </div>
              </div>
              <div className="score">
                <span>
                  {ellipticString(props.leaderBoard?.[1]?.userName, 2)}
                </span>
                <span className="points">
                  {props.leaderBoard?.[1]?.score || 0}
                </span>
              </div>
            </div>

            <div className="rank-1" title={props.leaderBoard?.[0]?.userName}>
              <img className="crown" alt="crown" />
              <div className="outer-border">
                <div className="dp container">
                  <img
                    className={`profile inner-content ${
                      !props.leaderBoard?.[0]?.profileImageUrl ||
                      !props.sasToken
                        ? "default-avatar-gamify"
                        : ""
                    } highlighted`}
                    alt=""
                    src={
                      props.leaderBoard?.[0]?.profileImageUrl?.includes(
                        "assets"
                      )
                        ? `${props.leaderBoard?.[0]?.profileImageUrl}
											${props.sasToken}`
                        : props.leaderBoard?.[0]?.profileImageUrl
                    }
                    onError={(event) => imgErrorHandler(event)}
                  />
                </div>
              </div>
              <div></div>
              <div className="score">
                <span>
                  {ellipticString(props.leaderBoard?.[0]?.userName, 1)}
                </span>
                <span className="points">
                  {props.leaderBoard?.[0]?.score || 0}
                </span>
              </div>
            </div>

            <div className="rank-3" title={props.leaderBoard?.[2]?.userName}>
              <div className="rank">{props.leaderBoard?.[2]?.rank || "NA"}</div>
              <div className="outer-border">
                <div className="dp">
                  <img
                    className={`profile inner-content ${
                      !props.leaderBoard?.[2]?.profileImageUrl ||
                      !props.sasToken
                        ? "default-avatar-gamify"
                        : ""
                    } ${
                      props.leaderBoard?.[2]?.userId === props.userId
                        ? "highlighted"
                        : ""
                    }`}
                    alt=""
                    src={
                      props.leaderBoard?.[2]?.profileImageUrl?.includes(
                        "assets"
                      )
                        ? `${props.leaderBoard?.[2]?.profileImageUrl}
											${props.sasToken}`
                        : props.leaderBoard?.[2]?.profileImageUrl
                    }
                    onError={(event) => imgErrorHandler(event)}
                  />
                </div>
              </div>
              <div className="score">
                <span>
                  {ellipticString(props.leaderBoard?.[2]?.userName, 3)}
                </span>
                <span className="points">
                  {props.leaderBoard?.[2]?.score || 0}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </RankStyles.Container>
  );
};

export default LeaderBoard;
