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
const RedeemConfirmStyles = {
  ConfirmModal: styled.div`
    ${modalWrap}
    font-family: "DM Sans", sans-serif;

    .redeem-confirm.modal-content {
      padding: 2em !important;
      width: 28% !important;
      height: 550px;
      margin: auto !important;
      background: white !important;
      border-radius: 1.5rem !important;
      color: black !important;
      min-width: 400px !important;
      header {
        text-align: left;
        .close {
          display: flex;
          justify-content: space-between;
          width: 100%;
          .wallet {
            display: flex;
            align-items: center;
            gap: 0.5em;
            button {
              border: none;
              background: none;
              color: #a2a2a2;
              letter-spacing: 0.5px;
              font-size: 0.9em;
              cursor: pointer;
            }
            .coin {
              display: flex;
              gap: 5px;
              align-items: center;
              border: 1px solid #dddddd;
              background: #efefef;
              border-radius: 1.4em;
              padding: 0.4em 0.5em;
              .img-width {
                width: 1.75em;
              }
            }
          }
        }
        h2 {
          font-weight: 700;
          font-size: 2em;
          letter-spacing: 0.75px;
          margin-top: 0.5em;
        }
      }
      .success-details {
        margin: 20px;
        text-align: center;
        .success-img {
          display: flex;
          justify-content: center;
        }
        .success-heading {
          font-weight: 500;
          font-size: medium;
          margin-bottom: 10px;
        }
        .order-description {
          font-size: small;
          text-align: center;
          margin-top: 20px;
          margin-bottom: 10px;
          .balance-debited {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 10px;
            img.wallet-coin {
              width: 2em;
              height: 2em;
            }
          }
        }
      }
      .border {
        border-top: 2px solid #e8e8e8;
      }
      .success-footer {
        text-align: center;
        margin: 30px;
        .delivered {
          color: #898989;
          font-size: small;
        }
        .navigation-buttons {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          button {
            margin-top: 10px;
            border: none;

            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #e8e8e8;
            border-radius: 15px;
            padding: 7px 10px;
            cursor: pointer;
          }
        }
      }
    }
    .cancel {
      cursor: pointer;
    }
  `,
};

export default RedeemConfirmStyles;
