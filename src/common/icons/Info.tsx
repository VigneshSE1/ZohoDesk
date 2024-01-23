import React, { FC } from "react";
import PrivilegeStage from "../../components/rewards/RewardsInfo";
import { usePopup } from "../../api/PopupService";
interface InfoProps {
  applicationId: string;
}

export const Info: FC<InfoProps> = (props) => {
  const { openPopup } = usePopup();

  const handleOpenPopup = () => {
    openPopup(<PrivilegeStage applicationId={props.applicationId} />);
  };
  return (
    <svg
      onClick={handleOpenPopup}
      xmlns="http://www.w3.org/2000/svg"
      width="20.449"
      height="20.449"
      viewBox="0 0 26.449 26.449"
    >
      <path
        id="info_FILL0_wght400_GRAD0_opsz48"
        d="M92.332-860.163h1.984V-868.1H92.332Zm.892-10.381a1.074,1.074,0,0,0,.778-.3,1.007,1.007,0,0,0,.314-.754,1.105,1.105,0,0,0-.313-.8,1.039,1.039,0,0,0-.777-.323,1.041,1.041,0,0,0-.778.323,1.1,1.1,0,0,0-.314.8,1.008,1.008,0,0,0,.313.754A1.073,1.073,0,0,0,93.224-870.544Zm.009,16.994a12.8,12.8,0,0,1-5.141-1.042,13.435,13.435,0,0,1-4.208-2.843,13.429,13.429,0,0,1-2.843-4.21A12.826,12.826,0,0,1,80-866.792a12.825,12.825,0,0,1,1.041-5.146,13.232,13.232,0,0,1,2.843-4.194,13.571,13.571,0,0,1,4.21-2.827A12.826,12.826,0,0,1,93.241-880a12.826,12.826,0,0,1,5.146,1.041,13.37,13.37,0,0,1,4.194,2.827,13.353,13.353,0,0,1,2.827,4.2,12.856,12.856,0,0,1,1.041,5.149,12.8,12.8,0,0,1-1.041,5.141,13.506,13.506,0,0,1-2.827,4.2,13.353,13.353,0,0,1-4.2,2.843A12.793,12.793,0,0,1,93.233-853.551Zm.008-1.984a10.8,10.8,0,0,0,7.951-3.29,10.879,10.879,0,0,0,3.273-7.968,10.835,10.835,0,0,0-3.267-7.951,10.838,10.838,0,0,0-7.974-3.273,10.87,10.87,0,0,0-7.951,3.267,10.811,10.811,0,0,0-3.29,7.974,10.832,10.832,0,0,0,3.29,7.951A10.852,10.852,0,0,0,93.241-855.534ZM93.225-866.775Z"
        transform="translate(-80 880)"
        fill="#fff"
      />
    </svg>
  );
};
