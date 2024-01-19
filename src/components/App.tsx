import { ZohoDeskProvider } from '../ZohoDeskContext/ZohoDeskProvider';
import Menu from './Menu/Menu';
import ProGamificationApp from './ProGamificationApp';

const App = () => {
  return (
    <ZohoDeskProvider>
      <ProGamificationApp />
    </ZohoDeskProvider>
  );
};
export default App;
