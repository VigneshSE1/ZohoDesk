import { ZohoDeskProvider } from "../ZohoDeskContext/ZohoDeskProvider";
import ProGamificationApp from "./ProGamificationApp";

const App = () => {
  return (
    <ZohoDeskProvider>
      <ProGamificationApp />
    </ZohoDeskProvider>
  );
};
export default App;
