import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { RightArrow } from "../../common/icons/RightArrow";
import ListRedeemProduct from "../RedeemProduct/ListRedeemProduct/ListRedeemProduct";
import { usePopup } from "../../api/PopupService";
import CoinStyles from "../Coin/Coin.styles";
const Redeem = (props) => {
    const { openPopup } = usePopup();
    const handleOpenPopup = () => {
        openPopup(_jsx(ListRedeemProduct, { userId: props.userId, applicationId: props.applicationId }));
    };
    return (_jsxs(CoinStyles.CoinHeader, { className: "card-item", children: [_jsx("div", { className: "proheader", children: "Redeem" }), _jsx("div", { className: "content", children: _jsx("img", { alt: "redeem", className: "redeem" }) }), _jsxs("div", { onClick: handleOpenPopup, className: "nav", children: [_jsx("a", { children: "Lets redeem voucher" }), _jsx("div", { className: "forward", children: _jsx(RightArrow, { height: "0.7em", color: "" }) })] })] }));
};
export default Redeem;
