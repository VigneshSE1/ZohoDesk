import { jsx as _jsx } from "react/jsx-runtime";
import { ZohoDeskProvider } from '../ZohoDeskContext/ZohoDeskProvider';
import ProGamificationApp from './ProGamificationApp';
const App = () => {
    return (_jsx(ZohoDeskProvider, { children: _jsx(ProGamificationApp, {}) }));
};
export default App;
