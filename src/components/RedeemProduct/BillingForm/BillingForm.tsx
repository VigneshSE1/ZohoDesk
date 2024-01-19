import React, { FC, useEffect, useState } from "react";
import { BackArrow } from "../../../common/icons/BackArrow";
import { useForm } from "react-hook-form";
import { RightArrow } from "../../../common/icons/RightArrow";
import { usePopup } from "../../../api/PopupService";
import DetailRedeemProduct from "../DetailRedeemProduct/DetailRedeemProduct";
import RedeemConfirmation from "../RedeemConfirmation/RedeemConfirmation";
import Wallet from "../../Wallet/Wallet";
import BillingFormStyles from "./BillingForm.styles";
import RedeemFailure from "../RedeemFailure/RedeemFailure";
import { getSasToken } from "../../../api/LeaderBoardService";
import { redeemProduct } from "../../../api/RedeemService";
import { RedeemPageProps } from "../../../models/RedeemProps";

const BillingForm: FC<RedeemPageProps> = (props) => {
	const { openPopup } = usePopup();
	const [sasToken, setSasToken] = useState<string>("");
	const handleWalletPopup = () => {
		openPopup(
			<Wallet userId={props.userId} applicationId={props.applicationId} />
		);
	};
	const handleBackPopup = () => {
		openPopup(
			<DetailRedeemProduct
				product={props.product}
				userId={props.userId}
				applicationId={props.applicationId}
				walletData={props.walletData}
			/>
		);
	};

	useEffect(() => {
		getSasToken()
			.then((sasToken: string) => {
				setSasToken(sasToken);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, [props.walletData]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (userDetails: any) => {
		let redeemDetails = {
			email: userDetails.email,
			firstName: userDetails.Name,
			telephone: userDetails.countryCode + userDetails.telephone,
			redeemRuleId: props?.product.id,
			gamificationUserId: props.userId,
			gamificationApplicationId: props.applicationId,
		};

		try {
			const response: any = await redeemProduct(redeemDetails);
			if (!response.data.message) {
				openPopup(
					<RedeemConfirmation
						product={props.product}
						userId={props.userId}
						applicationId={props.applicationId}
						walletData={props.walletData}
					/>
				);
			} else {
				openPopup(
					<RedeemFailure
						product={props.product}
						userId={props.userId}
						applicationId={props.applicationId}
						walletData={props.walletData}
						failureMsg={response.data.message}
					/>
				);
			}
		} catch (error:any) {
			openPopup(
				<RedeemFailure
					product={props.product}
					userId={props.userId}
					applicationId={props.applicationId}
					walletData={props.walletData}
					failureMsg={error.message}
				/>
			);
		}
	};

	return (
		<BillingFormStyles.BillingModal className="modal-wrap">
			<div className="billing-form modal-content">
				<header>
					<div className="back">
						<div className="cancel" onClick={handleBackPopup}>
							<BackArrow />
						</div>

						<div className="wallet">
							<button onClick={handleWalletPopup}>Go to Wallet</button>

							<div className="coin">
								<img
									className="img-width"
									src={props.walletData?.imageUrl + sasToken}
									alt=""
								/>
								<div>{props.walletData?.balance}</div>
							</div>
						</div>
					</div>
				</header>
				<h2 className="margin-y">Billing Address</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="fname-lname">
						<div className="name">
							<div className="input">
								<label htmlFor="Name">
									Name<span className="required">*</span>
								</label>

								<input
									type="text"
									className=""
									placeholder="Enter Your  Name"
									{...register("Name", {
										required: true,
									})}
								/>
								{errors.Name?.type === "required" && (
									<span className="error_message"> Name is required</span>
								)}
							</div>
						</div>
					</div>

					<div className="input">
						<label htmlFor="firstName">
							Contact Number<span className="required">*</span>
						</label>

						<div className="input-group">
							<select className="country-code" {...register("countryCode")}>
								<option value="+91">+91</option>

								<option value="+1">+1</option>
							</select>

							<input
								className="telephone"
								placeholder="Enter Your Contact Number"
								{...register("telephone", {
									required: true,

									pattern: {
										value: /^\d{10}$/,

										message: "Please enter a valid 10-digit phone number",
									},
								})}
							/>
						</div>
						{errors.telephone?.type == "required" && (
							<span className="error_message">Contact Number is required</span>
						)}
						{errors.telephone?.type == "pattern" && (
							<span className="error_message">
								{errors.telephone.message as string}
							</span>
						)}
					</div>

					<div className="input">
						<label htmlFor="name">
							Email<span className="required">*</span>
						</label>

						<input
							type="text"
							placeholder="Enter Your Email"
							{...register("email", {
								required: true,

								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: "Invalid email address",
								},
							})}
						/>
						{errors.email && (
							<span className="error_message">
								{errors.email.message as string}
							</span>
						)}
						{errors.email?.type == "required" && (
							<span className="error_message">Email is required</span>
						)}
					</div>

					<button>
						<span>Redeem Now</span>

						<span>
							<RightArrow height={""} color={""} />
						</span>
					</button>
				</form>
			</div>
		</BillingFormStyles.BillingModal>
	);
};

export default BillingForm;
