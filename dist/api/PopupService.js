import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useState, useMemo, } from "react";
export const PopupContext = createContext({});
export function usePopup() {
    const context = useContext(PopupContext);
    return context;
}
export function PopupService({ children }) {
    const [popupContent, setPopupContent] = useState(null);
    const contextValue = useMemo(() => ({
        openPopup: (content) => {
            setPopupContent(content);
        },
        closePopup: () => {
            setPopupContent(null);
        },
    }), []);
    return (_jsxs(PopupContext.Provider, { value: contextValue, children: [children, popupContent && _jsx("div", { className: "popup-overlay", children: popupContent })] }));
}
