var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
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
const BillingForm = (props) => {
    var _a, _b, _c, _d, _e, _f;
    const { openPopup } = usePopup();
    const [sasToken, setSasToken] = useState("");
    const handleWalletPopup = () => {
        openPopup(_jsx(Wallet, { userId: props.userId, applicationId: props.applicationId }));
    };
    const handleBackPopup = () => {
        openPopup(_jsx(DetailRedeemProduct, { product: props.product, userId: props.userId, applicationId: props.applicationId, walletData: props.walletData }));
    };
    useEffect(() => {
        getSasToken()
            .then((sasToken) => {
            setSasToken(sasToken);
        })
            .catch((error) => {
            console.error("Error fetching data:", error);
        });
    }, [props.walletData]);
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (userDetails) => __awaiter(void 0, void 0, void 0, function* () {
        let redeemDetails = {
            email: userDetails.email,
            firstName: userDetails.Name,
            telephone: userDetails.countryCode + userDetails.telephone,
            redeemRuleId: props === null || props === void 0 ? void 0 : props.product.id,
            gamificationUserId: props.userId,
            gamificationApplicationId: props.applicationId,
        };
        try {
            const response = yield redeemProduct(redeemDetails);
            if (!response.data.message) {
                openPopup(_jsx(RedeemConfirmation, { product: props.product, userId: props.userId, applicationId: props.applicationId, walletData: props.walletData }));
            }
            else {
                openPopup(_jsx(RedeemFailure, { product: props.product, userId: props.userId, applicationId: props.applicationId, walletData: props.walletData, failureMsg: response.data.message }));
            }
        }
        catch (error) {
            openPopup(_jsx(RedeemFailure, { product: props.product, userId: props.userId, applicationId: props.applicationId, walletData: props.walletData, failureMsg: error.message }));
        }
    });
    return (_jsx(BillingFormStyles.BillingModal, { className: "modal-wrap", children: _jsxs("div", { className: "billing-form modal-content", children: [_jsx("header", { children: _jsxs("div", { className: "back", children: [_jsx("div", { className: "cancel", onClick: handleBackPopup, children: _jsx(BackArrow, {}) }), _jsxs("div", { className: "wallet", children: [_jsx("button", { onClick: handleWalletPopup, children: "Go to Wallet" }), _jsxs("div", { className: "coin", children: [_jsx("img", { className: "img-width", src: ((_a = props.walletData) === null || _a === void 0 ? void 0 : _a.imageUrl) + sasToken, alt: "" }), _jsx("div", { children: (_b = props.walletData) === null || _b === void 0 ? void 0 : _b.balance })] })] })] }) }), _jsx("h2", { className: "margin-y", children: "Billing Address" }), _jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [_jsx("div", { className: "fname-lname", children: _jsx("div", { className: "name", children: _jsxs("div", { className: "input", children: [_jsxs("label", { htmlFor: "Name", children: ["Name", _jsx("span", { className: "required", children: "*" })] }), _jsx("input", Object.assign({ type: "text", className: "", placeholder: "Enter Your  Name" }, register("Name", {
                                            required: true,
                                        }))), ((_c = errors.Name) === null || _c === void 0 ? void 0 : _c.type) === "required" && (_jsx("span", { className: "error_message", children: " Name is required" }))] }) }) }), _jsxs("div", { className: "input", children: [_jsxs("label", { htmlFor: "firstName", children: ["Contact Number", _jsx("span", { className: "required", children: "*" })] }), _jsxs("div", { className: "input-group", children: [_jsxs("select", Object.assign({ className: "country-code" }, register("countryCode"), { children: [_jsx("option", { value: "+91", children: "+91" }), _jsx("option", { value: "+1", children: "+1" })] })), _jsx("input", Object.assign({ className: "telephone", placeholder: "Enter Your Contact Number" }, register("telephone", {
                                            required: true,
                                            pattern: {
                                                value: /^\d{10}$/,
                                                message: "Please enter a valid 10-digit phone number",
                                            },
                                        })))] }), ((_d = errors.telephone) === null || _d === void 0 ? void 0 : _d.type) == "required" && (_jsx("span", { className: "error_message", children: "Contact Number is required" })), ((_e = errors.telephone) === null || _e === void 0 ? void 0 : _e.type) == "pattern" && (_jsx("span", { className: "error_message", children: errors.telephone.message }))] }), _jsxs("div", { className: "input", children: [_jsxs("label", { htmlFor: "name", children: ["Email", _jsx("span", { className: "required", children: "*" })] }), _jsx("input", Object.assign({ type: "text", placeholder: "Enter Your Email" }, register("email", {
                                    required: true,
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address",
                                    },
                                }))), errors.email && (_jsx("span", { className: "error_message", children: errors.email.message })), ((_f = errors.email) === null || _f === void 0 ? void 0 : _f.type) == "required" && (_jsx("span", { className: "error_message", children: "Email is required" }))] }), _jsxs("button", { children: [_jsx("span", { children: "Redeem Now" }), _jsx("span", { children: _jsx(RightArrow, { height: "", color: "" }) })] })] })] }) }));
};
export default BillingForm;
