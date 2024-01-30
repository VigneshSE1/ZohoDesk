import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IClientData } from "../../models/ClientData";
import { setClientCredentials } from "../../api/Database.service";
import ClientCredStyles from "./ClientCred.styles";

const ClientCred = (props: any) => {
  const { register, handleSubmit } = useForm<IClientData>();

  const handleFormSubmit: SubmitHandler<IClientData> = (data) => {
    props.onButtonClick(data);
    setClientCredentials(data)
      .then((res: any) => {
        console.log("Client Data Added");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ClientCredStyles.Form>
      <form>
        <div>
          <label htmlFor="clientId" className="label">
            Client ID:
          </label>
          <input
            type="text"
            id="clientId"
            className="input"
            {...register("clientId")}
          />
        </div>
        <div>
          <label className="label" htmlFor="clientSecret">
            Client Secret:
          </label>
          <input
            className="input"
            type="text"
            id="clientSecret"
            {...register("clientSecret")}
          />
        </div>
        <div>
          <label className="label" htmlFor="applicationId">
            Application ID:
          </label>
          <input
            className="input"
            type="text"
            id="applicationId"
            {...register("applicationId")}
          />
        </div>
        <button
          type="button"
          onClick={handleSubmit(handleFormSubmit)}
          className="button"
        >
          Submit
        </button>
      </form>
    </ClientCredStyles.Form>
  );
};

export default ClientCred;
