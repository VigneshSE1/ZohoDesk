var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useContext, useEffect, useState } from "react";
import { ZohoDeskContext } from "../ZohoDeskContext/ZohoDeskContext";
import { Menu } from "./Menu/Menu";
const ProGamificationApp = () => {
  const [ticket, setTicket] = useState({});
  const { app, loading } = useContext(ZohoDeskContext);
  const instance = app === null || app === void 0 ? void 0 : app.instance;
  //Get the ticket details
  useEffect(() => {
    const fetchTicket = () =>
      __awaiter(void 0, void 0, void 0, function* () {
        try {
          const ticket = yield ZOHODESK.get("ticket");
          setTicket(ticket);
        } catch (error) {
          // Handle error
        }
      });
    fetchTicket();
  }, []);
  useEffect(() => {
    if (!instance) return;
    console.log("Sample Extension: Adding Comment Listener");
    instance.on("ticket_comment.add", function (data) {
      console.log("Sample Extension: ticket_comment.add", data);
    });
  }, [instance]);
  const setDeskData = useCallback(
    (key, value) =>
      __awaiter(void 0, void 0, void 0, function* () {
        try {
          yield ZOHODESK.set(key, value);
          // Handle response
        } catch (error) {
          // Handle error
        }
      }),
    []
  );
  const setTicketComment = useCallback(
    () => setDeskData("ticket.comment", { comment: "Test comment" }),
    [setDeskData]
  );
  const setTicketReply = useCallback(() => {
    console.log("Sample Extension: setTicketReply");
    ZOHODESK.invoke("INSERT", "ticket.replyEditor", {
      value:
        '<div style="border: 1px solid #cccccc; border-radius:5px; padding:5px;"><h1 style="font-size: 24px">Here is some HTML Formatted Content</h1><p style="font-size:16px">Here is a sub paragraph</p></div>',
      type: "replace",
    });
  }, []);
  const openModal = useCallback(
    () =>
      __awaiter(void 0, void 0, void 0, function* () {
        if (!instance) return;
        try {
          const modalInfo = yield instance.modal({
            url: "/app/modal.html",
            title: "Modal box",
          });
          var modalInstance = instance.getWidgetInstance(modalInfo.widgetID);
          modalInstance.on("modal.opened", function (data) {
            console.log("Sample Extension: modal opened ++++++++++++++++++");
            console.log("Sample Extension: modal instance data", modalInstance);
          });
        } catch (error) {
          // Handle error
        }
      }),
    [instance]
  );
  if (loading) {
    return _jsx("p", { children: "Loading..." });
  } else {
    return _jsx(_Fragment, {
      children: _jsx(Menu, {
        userId: "50aab225-10a2-47e8-bc35-fa48d1d45e0e",
        applicationId: "652e75c5e23dd83338f6dd93",
        clientId: "08ce0068-2906-44d4-b840-b268e5511624",
        clientSecret: "2BG8Q~Vsd33.QQ93jcejZkrr5aVyXvxbl_FrubYg",
      }),
    });
  }
};
export default ProGamificationApp;
