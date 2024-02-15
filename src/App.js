import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import store from './store';
import Error404 from 'containers/errors/error404';
import Home from 'containers/pages/home';
import { Provider } from 'react-redux';
import Nfqs from 'containers/pages/Nuestra Federación/Nfqs';
import Directorio from 'containers/pages/Nuestra Federación/Directorio';
import Estatutos from 'containers/pages/Nuestra Federación/Estatutos';
import EstructuraFede from 'containers/pages/Nuestra Federación/EstructuraFede';
import PlanEstrategico from 'containers/pages/Nuestra Federación/PlanEstrategico';
import NormatividadFDF from 'containers/pages/Fondo de fomento/NormatividadFDF';
import ServiciosFDF from 'containers/pages/Fondo de fomento/ServiciosFDF'

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

          {/*Directorio Display */}
          <Route path="/NuestraFederacion/directorio" element={<Directorio />} />

          {/*Estatutos Display */}
          <Route path="/NuestraFederacion/estatutos" element={<Estatutos />} />

          {/*EstructuraFede Display */}
          <Route path="/NuestraFederacion/EstructuraFede" element={<EstructuraFede />} />

          {/*PlanEstrategico Display */}
          <Route path="/NuestraFederacion/PlanEstrategico" element={<PlanEstrategico />} />





          {/*PlanEstrategico Display */}
          <Route path="/FondodeFomento/Normatividad" element={<NormatividadFDF />} />
          {/*PlanEstrategico Display */}
          <Route path="/FondodeFomento/Servicios" element={<ServiciosFDF />} />







        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
