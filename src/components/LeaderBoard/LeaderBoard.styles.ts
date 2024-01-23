import { env } from "../../env/env";
import styled from "styled-components";

const LeaderBoardStyles = {
  Container: styled.div`
    height: 95%;
    font-family: "DM Sans", sans-serif;
    .tabs-group {
      display: flex;
      justify-content: center;
      background-color: white;
      width: 62%;
      border-radius: 1.3em;
      border: 1px solid #ff8725;
      padding: 0.12em;
      margin: 1em auto;

      button {
        font-family: "DM Sans", sans-serif !important;
        outline: none;
        border: none;
        background-color: white;
        width: 50%;
        padding: 0.6em 0.8em;
        border-radius: 1.3em;
        font-size: 0.9em;
        font-weight: 600;
        cursor: pointer;
        &.active {
          background-color: #ff8725;
          color: white;
          transition: transform 0.5s ease;
        }
      }
    }
    .bg-leaderboard {
      background: url("../../../app/img/");
      background-position: top;
      height: 100%;
      background-repeat: no-repeat;
      background-size: contain;
      padding-top: 4em;
      animation: fadeIn ease 500ms;
      .gpName {
        position: relative;
        margin: 0.3em;
        display: flex;
        align-items: center;
        justify-content: center;
        .back-arrow {
          border: none;
          &:hover {
            transform: translateX(0.1em);
          }
          position: absolute;
          left: 1em;
          cursor: pointer;
          .back {
            content: url("../../../app/img/back.svg");
            height: 1.5em;
          }
        }

        .gpName {
          font-weight: 700;
        }
      }
    }
    .groups {
      display: flex;
      gap: 0.3em;
      flex-direction: column;
      padding: auto;

      div.heading {
        align-self: flex-start;
        margin-left: 0.5em;
        margin-bottom: 0.5em;
        font-weight: 500;
        font-size: 1.65em;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.3em;

        .profile {
          width: 1.4em !important;
          height: 1.4em !important;
          background: var(--pro-gamify-rank-bg-color);
          background-size: cover !important;
          border-radius: 50% !important;
          border: 1.7px solid white;
          box-shadow: 0px 10px 30px #00000034;
          &.default-avatar-gamify,
          &.on-img-error {
            content: url("${env.BLOB_URL}/${env.CONTAINER_PATH}/avatar.png");
          }
        }
      }
    }
    .usergp-list {
      display: flex;
      justify-content: space-between;
      border: 1px solid rgb(247, 111, 0, 0.5);
      padding: 1em 0.75em;
      border-radius: 0.5em;
      align-items: center;
      cursor: pointer;
      margin: 0 0.3em;
      &:hover {
        background-color: rgb(247, 111, 0, 0.1);
      }

      .list {
        display: flex;
        gap: 2em;
        .rank {
          font-weight: bold;
        }
        .name {
          font-weight: 500;
        }
      }
      button {
        border: none;
        background: none;
        img {
          content: url("../../../app/img/arrow-down.svg");
        }
      }
    }
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `,
};

export default LeaderBoardStyles;
