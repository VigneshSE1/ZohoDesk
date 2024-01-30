import { env } from "../../../env/env";
import styled from "styled-components";

const RankStyles = {
  Container: styled.div`
    .rank-holder {
      margin: 3em auto -1em;
      height: 15em;
      display: flex;
      justify-content: space-evenly;
      font-weight: bold;
      .score {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        font-size: 0.8em;
        gap: 0.5em;

        .points {
          background-color: #f0f0f0;
          border-radius: 1.5em;
          width: auto;
          font-size: 0.9em;
          padding: 0.45em 1.3em;
          font-weight: medium;
        }
      }
      .rank {
        color: #ee8c40;
        font-weight: bold;
      }

      .profile {
        width: 3.5em;
        height: 3.5em;
        background-size: cover !important;
        border-radius: 50% !important;

        &.highlighted {
          &.inner-content {
            border: 0.65em solid #ff8725;
            padding: 0.2em;
          }
        }
        &.default-avatar-gamify {
          content: url("${env.BLOB_URL}/${env.CONTAINER_PATH}/avatar.png");
        }
      }
      .outer-border {
        display: flex;
        border: 0.6em solid #ff7c000f;
        border-radius: 6em;
      }
      .inner-content {
        display: flex;
        border: 0.4em solid rgba(255, 115, 0, 0.31);
        border-radius: 5em;
      }

      .rank-2 {
        min-width: 0;
        align-self: flex-start;
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 0.5em;

        .inner-content {
          border-color: rgba(255, 115, 0, 0.31);
        }
      }
      .rank-1 {
        align-self: flex-end;
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        .profile {
          height: -webkit-fill-available;
          position: absolute;
          width: -webkit-fill-available;
          left: 0;
        }
        .container {
          border: 1.1em solid rgba(255, 124, 0, 0.28);
          border-radius: 5em;
          background-color: #ecf0f1;
          width: 6.5em;
          height: 6.5em;
          position: relative;
        }
        img.crown {
          content: url("../../../../app/img/crown.svg");
          width: 1.5em;
        }
        .outer-border {
          border-width: 1em;
        }
      }
      .rank-3 {
        align-self: flex-start;
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 0.5em;

        .inner-content {
          border-color: rgba(255, 115, 0, 0.31);
        }
      }
    }

    .rank-holder .rank-1,
    .rank-holder .rank-2,
    .rank-holder .rank-3 {
      opacity: 0;
      transform: translateY(-20px);
      transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    }

    .rank-holder .rank-3 {
      animation: fadeInAndSlide 0.2s ease-in-out 0.2s forwards;
    }

    .rank-holder .rank-2 {
      animation: fadeInAndSlide 0.2s ease-in-out 1s forwards;
    }

    .rank-holder .rank-1 {
      animation: fadeInAndSlide 0.2s ease-in-out 2s forwards;
    }

    @keyframes fadeInAndSlide {
      0% {
        opacity: 0;
        transform: translateY(-20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,
};

export default RankStyles;
