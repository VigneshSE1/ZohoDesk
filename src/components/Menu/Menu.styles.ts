import styled from "styled-components";

const MenuStyles = {
  Menu: styled.div`
    font-family: "DM Sans", sans-serif;
    padding: 2em;
    margin-right: 7em;
    position: relative;
    z-index: 999;
    .tabs {
      margin-top: 0.3em;
      display: flex;
      justify-content: center;
    }
  `,
  Header: styled.div`
    display: flex !important;
    gap: 1em !important;
    align-items: center !important;
    justify-items: center !important;
    cursor: pointer !important;
    color: white !important;
  `,
  ImgContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    img {
      width: 1.9em;
      height: 1.9em;
      border-radius: 50% !important;
      border: 1.5px solid gray;
    }
  `,

  Wallet: styled.div`
    display: flex;
    gap: 0.5em;
    border-radius: 50%;
    padding: 0.5em;
    align-items: center;
    border-radius: 1em;
    background-color: darken(#235449, 50%);
    .img-width {
      width: 1.75rem;
    }
  `,
};

export default MenuStyles;
