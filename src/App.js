import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import store from './store';
import Error404 from 'containers/errors/error404';
import Home from 'containers/pages/home';
import { Provider } from 'react-redux';
import Nfqs from 'containers/pages/nfqs';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/*Error Display */}
          <Route path="*" element={<Error404 />} />

          {/*Home Display */}
          <Route path="/" element={<Home />} />

          {/*nfqa Display */}
          <Route path="/NuestraFederacion/quienessomos" element={<Nfqs />} />



        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
