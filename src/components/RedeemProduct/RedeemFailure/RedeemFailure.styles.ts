import { env } from "../../../env/env";
import styled from "styled-components";

const modalWrap = `position: fixed !important;
width: 100% !important;
height: 100% !important;
overflow-y: auto !important;
top: 0 !important;
left: 0 !important;
z-index: 99999 !important;
padding: 2em 0 !important;
box-sizing: border-box !important;
display: flex !important;
align-items: center !important;
background-color: rgba(0, 0, 0, 0.2);`;
const RedeemFailureStyles = {
  FailureModal: styled.div`
    font-family: "DM Sans", sans-serif;

    ${modalWrap}
    .modal-content {
      padding: 2em !important;
      width: 21% !important;
      height: 500px !important;
      margin: auto !important;
      background: white !important;
      border-radius: 1.5rem !important;
      color: black !important;
      min-width: 400px !important;
      .order-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .close {
          display: flex;
          gap: 0.5em;
          align-items: center;
        }
        button {
          cursor: pointer;
          border: none;
          background: none;
        }
      }

      .header-wallet {
        display: flex;
        gap: 15px;
        .wallet-btn {
          color: #898989;
          background: none;
          border: none;
          padding: 0;
          margin: 0;
          font-size: 1em;
          cursor: pointer;
        }
      }

      .header-failure {
        font-size: x-large;
        font-weight: bold;
        margin: 0;
        display: flex;
      }

      .failure-details {
        display: flex;
        margin: 20px;
        text-align: center;
        justify-content: center;
        img.failure {
          width: 4em;
          margin-bottom: 10px;
        }
        .failure-heading {
          font-weight: 500;
          font-size: medium;
          margin-bottom: 10px;
        }
        .order-description {
          font-size: small;
          text-align: center;
          margin-top: 20px;
          margin-bottom: 10px;
          .description {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 10px;
          }
        }
      }
      .navigation-buttons {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        button {
          margin-top: 10px;
          border: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #e8e8e8;
          border-radius: 15px;
          padding: 7px 20px;
          width: 70%;
          cursor: pointer;
          img {
            width: 20px;
          }
        }
      }
    }
  `,
};

export default RedeemFailureStyles;
