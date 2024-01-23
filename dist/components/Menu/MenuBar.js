import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import Tabs from "../Tabs/Tabs";
export const Menu = (props) => {
  useEffect(() => {}, []);
  return _jsx("div", {
    children: _jsx(Tabs, {
      clientId: props.clientId,
      clientSecret: props.clientSecret,
      userId: props.userId,
      applicationId: props.applicationId,
    }),
  });
};
