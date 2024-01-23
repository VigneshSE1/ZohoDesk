import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { ZohoDeskContext } from "./ZohoDeskContext";
export const ZohoDeskProvider = ({ children, }) => {
    const [loading, setLoading] = useState(true);
    const [app, setApp] = useState(null);
    useEffect(() => {
        ZOHODESK.extension.onload().then((App) => {
            console.log("Desk extension loaded");
            setLoading(false);
            setApp(App);
        });
    }, []);
    return (_jsx(ZohoDeskContext.Provider, { value: { loading, app }, children: loading ? _jsx("div", { children: "Initialising..." }) : children }));
};
