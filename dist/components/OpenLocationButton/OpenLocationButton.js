import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from '../Button';
export const OpenLocationButton = ({ location, children = 'Open Location', color = 'blue' }) => {
    const openLocation = () => {
        ZOHODESK.invoke('ROUTE_TO', location);
    };
    return (_jsx(Button, { color: "blue", onClick: openLocation, children: children }));
};
