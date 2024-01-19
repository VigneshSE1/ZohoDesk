import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from './Button';
const PopupButton = (props) => {
    var _a;
    const showPopup = () => {
        ZOHODESK.showpopup({
            title: props.title,
            content: props.content,
            type: props.type,
            color: props.okButtonColor,
            okText: props.okText,
            cancelText: props.cancelText,
            contentType: 'html'
        }).then((res) => {
            console.log('success');
        }, (err) => {
            console.log('err');
        });
    };
    return (_jsx(Button, { color: (_a = props.color) !== null && _a !== void 0 ? _a : 'blue', onClick: showPopup, children: props.title }));
};
export default PopupButton;
