// ClientCredStyles.js
import styled from "styled-components";

const ClientCredStyles = {
  Form: styled.form`
    max-width: 400px;
    margin: 0 auto;
    .div {
      margin-bottom: 1em;
    }
    .label {
      display: block;
      margin-bottom: 0.5em;
    }
    .input {
      width: 100%;
      padding: 0.5em;
      margin-top: 0.2em;
    }
    .button {
      background-color: #007bff;
      color: #fff;
      padding: 0.5em 1em;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 1em;
    }
  `,
};

export default ClientCredStyles;
