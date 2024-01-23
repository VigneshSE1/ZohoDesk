import styled from "styled-components";

const ProgressStyles = {
  ProProgressBar: styled.div`
    padding: 1em 0.7em;
    border-radius: 15px;
    margin-top: 1em;
    margin: 1.2em 0.4em 0;
    background-color: #fff6e6;
    border-radius: 1.25em;
    box-shadow: #0000003d 0 3px 8px;
    .wrapper {
      border: 1px solid #fc9300;
      border-radius: 50px;
    }
  `,
  ProgresBarHeader: styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1em 0px;
  `,
  ProgressHeading: styled.div`
    font-size: 1.3em;
    font-size: 1.2em;
  `,
  ProgressBarFooter: styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    font-size: 0.9em;
    color: #807f7f;
    margin-top: 0.75em;

    .leaderBoard {
      display: flex;
      align-items: center;
      gap: 0.2em;
      cursor: pointer;
      color: #00774b;
      font-size: 1em;
      font-weight: 600;
    }
  `,
};

export default ProgressStyles;
