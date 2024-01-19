import { useCallback, useContext, useEffect, useState } from "react";
import { ZohoDeskContext } from "../ZohoDeskContext/ZohoDeskContext";
import PopupButton from "../PopupButton";
import { Button } from "./Button";
import { OpenLocationButton } from "./OpenLocationButton/OpenLocationButton";
import { RenderObject } from "./RenderObject";
import Menu from "./Menu/Menu";

const ProGamificationApp = () => {
  const [ticket, setTicket] = useState({});

  const { app, loading } = useContext(ZohoDeskContext);
  const instance = app?.instance;
  //Get the ticket details

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const ticket = await ZOHODESK.get("ticket");
        setTicket(ticket);
      } catch (error) {
        // Handle error
      }
    };

    fetchTicket();
  }, []);

  useEffect(() => {
    if (!instance) return;
    console.log("Sample Extension: Adding Comment Listener");
    instance.on("ticket_comment.add", function (data: any) {
      console.log("Sample Extension: ticket_comment.add", data);
    });
  }, [instance]);

  const setDeskData = useCallback(async (key: string, value: any) => {
    try {
      await ZOHODESK.set(key, value);
      // Handle response
    } catch (error) {
      // Handle error
    }
  }, []);

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

  const openModal = useCallback(async () => {
    if (!instance) return;
    try {
      const modalInfo = await instance.modal({
        url: "/app/modal.html",
        title: "Modal box",
      });
      var modalInstance = instance.getWidgetInstance(modalInfo.widgetID);
      modalInstance.on("modal.opened", function (data: any) {
        console.log("Sample Extension: modal opened ++++++++++++++++++");
        console.log("Sample Extension: modal instance data", modalInstance);
      });
    } catch (error) {
      // Handle error
    }
  }, [instance]);

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <h2 className="text-xl font-bold p-1 bg-blue-200 text-center">
          React Extension with Tailwind Samples
        </h2>
        <Menu
          userId={"50aab225-10a2-47e8-bc35-fa48d1d45e0e"}
          applicationId={"652e75c5e23dd83338f6dd93"}
          clientId={"08ce0068-2906-44d4-b840-b268e5511624"}
          clientSecret={"2BG8Q~Vsd33.QQ93jcejZkrr5aVyXvxbl_FrubYg"}
        />
      </>
    );
  }
};

export default ProGamificationApp;
