import { env } from "../../env/env";
import styled from "styled-components";

const CoinStyles = {
  CoinHeader: styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff6e6;
    border-radius: 1.25em;
    padding: 1em;
    gap: 1.3em;
    align-items: flex-start;
    border-radius: 1.25em;
    box-shadow: #0000003d 0 3px 8px;
    .proheader {
      font-size: 1.3em;
    }

    .content {
      display: flex;
      gap: 0.5em;
      align-items: center;
      img {
        width: 3em;
        height: auto;
      }

      img.coins {
        width: 2.1em;
        height: 2.1em;
      }
    }
    div.nav {
      display: flex;
      gap: 0.3em;
      a {
        cursor: pointer;
        display: flex;
        font-size: 0.85em;
        gap: 0.5em;
        align-items: center;
        color: #898989;
      }
      .forward svg {
        fill: #898989;
        width: 0.75em;
      }
    }
    .rotating-coin {
      /* background: #ffde00; */
      border-radius: 50%;
      position: relative;
      -webkit-transform-style: preserve-3d;
      animation: spin 5s linear infinite;
      transition-timing-function: ease-in-out;

      .rotating-coin:before {
        -webkit-animation: spin 0.2s infinite;
        animation: spin 0.2s infinite;
        display: inline-block;
      }
      @-webkit-keyframes spin {
        from {
          transform: rotateY(0deg);
        }
        to {
          transform: rotateY(360deg);
        }
      }
      @keyframes spin {
        from {
          transform: rotateY(0deg);
        }
        to {
          transform: rotateY(360deg);
        }
      }
    }
  `,
};

export default CoinStyles;
