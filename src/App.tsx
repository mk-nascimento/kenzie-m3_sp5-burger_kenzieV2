import Providers from './contexts';
import Router from './routes';
import { GlobalStyles } from './styles/global';

const App = () => (
  <Providers>
    <GlobalStyles />
    <Router />
  </Providers>
);

export default App;
