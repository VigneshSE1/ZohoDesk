import { env } from "../../../env/env";
import styled from "styled-components";

const LocalGlobalLeaderBoardStyles = {
  Container: styled.div`
    .leaderboard {
      border-collapse: collapse;
      border-spacing: 0;
      font-weight: 500;
      font-size: medium;
      background: transparent;
      width: 100% !important;

      th {
        padding: 0.7em 1.4em;
        color: #777777;
        font-size: 0.8em !important;
      }
      tr {
        border: 1.5px solid #ebebeb;
        text-align: left;
        font-size: 0.9em;
        &.selectedRow {
          background-color: #fff0db;
          .rank .circle {
            background: #fff0db;
            color: white;
          }
        }

        td {
          padding: 0.7em 1.4em;
          &.more {
            text-align: center;
            img {
              content: url("../../../../../assets/icons/more.svg");
            }
          }
          &.rank .circle {
            border-radius: 100%;
            display: flex;
            background: #ebebeb;
            padding: 1px 0.7px;
            font-size: 0.9em;
          }
          &:nth-child(3) {
            text-align: left;
          }
          &:nth-child(4) {
            text-align: left;
          }
          &.avatar {
            .player {
              display: flex;
              gap: 0.3em;
              align-items: center;
            }
            .profile {
              width: 2.75em !important;
              height: 2.75em !important;
              background: var(--pro-gamify-rank-bg-color);
              background-size: cover !important;
              border-radius: 50% !important;
              box-shadow: 0px 10px 30px #00000034;

              &.default-avatar-gamify,
              &.on-img-error {
                content: url("${env.BLOB_URL}/${env.CONTAINER_PATH}/avatar.png");
              }
            }
          }
          .score {
            display: flex;
            gap: 0.4em;
            lib-bolt {
              display: inherit;
            }
          }
          .reward {
            img {
              width: 2em;
              height: 2em;

              &.default-reward-gamify {
                content: url("${env.BLOB_URL}/${env.CONTAINER_PATH}/no-reward.png");
              }
            }
          }
        }
      }
    }
  `,
};

export default LocalGlobalLeaderBoardStyles;
