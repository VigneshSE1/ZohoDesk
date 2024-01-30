import styled from "styled-components";

const AchievementStyles = {
  Container: styled.div`
    padding: 0.6em;
    .card {
      margin: 0.7em 0.4em;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      > * {
        margin: 0.75em 0;
        flex-basis: calc(30% - 1.2em);
        justify-content: space-between;
        cursor: pointer;
      }
    }
  `,
};

export default AchievementStyles;
