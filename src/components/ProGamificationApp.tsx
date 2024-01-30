import { useContext, useEffect, useState } from "react";
import { ZohoDeskContext } from "../ZohoDeskContext/ZohoDeskContext";
import { Menu } from "./Menu/Menu";
import { getClientCredentials } from "../api/Database.service";
import { PopupService } from "../api/PopupService";
import ClientCred from "./ClientCred/ClientCred";

const ProGamificationApp = () => {
  const [clientCred, setClientCred] = useState<any>(null);
  const [userId, setCurretUserId] = useState<string>("");
  const { app, loading } = useContext(ZohoDeskContext);

  const onSubmit = (data: any) => {
    setClientCred(data);
  };

  useEffect(() => {
    ZOHODESK.get("user", {
      queriableValue: "",
    })
      .then(function (userResponse) {
        setCurretUserId(userResponse["user"]?.email);
      })
      .catch(function (error) {
        setCurretUserId("");
      });
    getClientCredentials()
      .then((res) => {
        const credentials = res["database.get"]["data"][0]?.value;
        if (credentials) {
          setClientCred(credentials);
        } else {
          setClientCred(null);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <PopupService>
          {clientCred ? (
            <Menu
              userId={userId}
              applicationId={clientCred?.applicationId}
              clientId={clientCred?.clientId}
              clientSecret={clientCred?.clientSecret}
            />
          ) : (
            <ClientCred onButtonClick={onSubmit} />
          )}
        </PopupService>
      </>
    );
  }
};

export default ProGamificationApp;
