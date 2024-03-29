import styled from "styled-components";

const TabStyles = {
  TabContainer: styled.div`
    width: 50%;
    min-width: 410px;
    background-color: white !important;
    z-index: 9999 !important;
    font-family: "DM Sans", sans-serif;
  `,
  TabNav: styled.ul`
    display: flex !important;
    background: white !important;
    font-size: large !important;
    font-weight: 500;
    padding: 0 !important;
    margin: 0 !important;
    position: relative !important;
    border-bottom: 1px solid #dedede;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
  `,
  TabList: styled.li`
    cursor: pointer !important;
    list-style-type: none !important;
    padding: 0.95em 2em !important;
    margin: 0 !important;
    width: 50% !important;
    text-align: center !important;
    position: relative !important;
    border-top-left-radius: 1.3em;
    border-top-right-radius: 1.3em;
    &.active {
      a {
        color: black;
      }

      &::after {
        content: "";
        width: 100%;
        height: 0.2em;
        background-color: #333333;
        position: absolute;
        z-index: 1200;
        bottom: 0;
        left: 0;
        transition: all 0.4s linear;
      }
    }

    a {
      text-decoration: none !important;
      color: #898989;
    }
  `,
};

export default TabStyles;
