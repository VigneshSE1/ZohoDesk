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
const ProductStyles = {
  ProductModal: styled.div`
    font-family: "DM Sans", sans-serif;

    ${modalWrap}
    border: #dedede;
    .detail-product.modal-content {
      box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px,
        rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px,
        rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px,
        rgba(0, 0, 0, 0.07) 0px 32px 64px;
      padding: 2em !important;
      width: 21% !important;
      height: 590px !important;
      margin: auto !important;
      background: white !important;
      border-radius: 0.7rem !important;
      color: black !important;
      overflow-y: scroll !important;
      text-align: left;
      min-width: 400px !important;
      scrollbar-width: none !important;
      &::-webkit-scrollbar {
        display: none !important;
      }
      .img-width {
        width: 1.75rem;
        height: 1.75rem;
      }
      .back {
        cursor: pointer;
      }
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .close {
          display: flex;
          gap: 1em;
          align-items: center;
          h2 {
            font-weight: 700;
            font-size: 2em;
            letter-spacing: 0.75px;
            margin: 0em;
          }
        }
        /* .wallet {
					display: flex;
					align-items: center;
					gap: 0.5em;

					.coin {
						display: flex;

						gap: 5px;
						align-items: center;
						border: 1px solid #dddddd;
						background: #efefef;
						border-radius: 1.4em;
						padding: 0.4em 0.5em;
					}
				} */
      }
      section {
        text-align: left;
        margin: 1.5em auto;
        h2 {
          font-size: 1.3em;
          font-weight: 700;
          margin-top: 2em;
        }
        .img-product {
          width: 100%;
          height: 15em;
          border-radius: 0.75em;
          border: 1px solid #edebeb;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
            rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        }

        .coin {
          display: flex;
          align-items: center;
          gap: 0.5em;

          @include coin;
          img {
            @include coin-img;
          }
        }

        .validity {
          margin-top: 0.8em;
          display: flex;
          flex-direction: column;
          gap: 0.5em;
          label {
            color: #a2a2a2;
          }
        }
        button {
          background: #f5da48;
          border-radius: 1.5em;
          padding: 0.9em 1.2em;
          outline: none;
          border: none;
          color: #333333;
          margin-top: 1.5em;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.7em;
          font-weight: 700;
          font-size: 0.875em;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }
      }
    }
  `,
};

export default ProductStyles;
