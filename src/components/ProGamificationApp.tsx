import { useCallback, useContext, useEffect, useState } from "react";
import { ZohoDeskContext } from "../ZohoDeskContext/ZohoDeskContext";
import { Menu } from "./Menu/Menu";

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
        <Menu
          userId={"c59c355c-bb89-44d1-87b6-87aa4239c11b"}
          applicationId={"65a76e3376b3472741f939b3"}
          clientId={"08ce0068-2906-44d4-b840-b268e5511624"}
          clientSecret={"2BG8Q~Vsd33.QQ93jcejZkrr5aVyXvxbl_FrubYg"}
        />
      </>
    );
  }
};

export default ProGamificationApp;
