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
import ServiciosFDF from 'containers/pages/Fondo de fomento/ServiciosFDF';
import Comercial from 'containers/pages/Normatividad/Comercial';
import Ambiental from 'containers/pages/Normatividad/Ambiental';
import Sanitarias from 'containers/pages/Normatividad/Sanitarias';
import SomosFDF from 'containers/pages/Fondo de fomento/SomosFDF';
import ProgramasFDF from 'containers/pages/Fondo de fomento/ProgramasFDF';
import AtencionFDF from 'containers/pages/Fondo de fomento/AtencionFDF';
import EstructuraOrganica from 'containers/pages/Fondo de fomento/EstructuraOrganica';
import ProcesosRecaudoFDF from 'containers/pages/Fondo de fomento/ProcesosRecaudoFDF';
import CalendarioEventosFDF from 'containers/pages/Fondo de fomento/CalendarioEventosFDF';
import QuejasReclamos from 'containers/pages/Fondo de fomento/QuejasReclamos';
import Laboral from 'containers/pages/Normatividad/Laboral';
import MecanismoContacto from 'containers/pages/Ley de Transparencia/MecanismosContacto';
import Informaciondeinteres from 'containers/pages/Ley de Transparencia/InformaciondeInteres';
import Planeacion from 'containers/pages/Ley de Transparencia/Planeacion';
import Estructuraorgánicaytalentohumano from 'containers/pages/Ley de Transparencia/Estructuraorganicaytalentohumano';
import Normatividad from 'containers/pages/Ley de Transparencia/Normatividad';
import Presupuesto from 'containers/pages/Ley de Transparencia/Presupuesto';
import Contratacion from 'containers/pages/Ley de Transparencia/Contratacion';

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
          <Route path="/NuestraFederacion/EstructuraFedepanela" element={<EstructuraFede />} />

          {/*PlanEstrategico Display */}
          <Route path="/NuestraFederacion/PlanEstrategico" element={<PlanEstrategico />} />





          {/*PlanEstrategico Display */}
          <Route path="/FondodeFomento/Normatividad" element={<NormatividadFDF />} />
          {/*PlanEstrategico Display */}
          <Route path="/FondodeFomento/Servicios" element={<ServiciosFDF />} />
          <Route path="/FondodeFomento/QuienesSomos" element={<SomosFDF />} />
          <Route path="/FondodeFomento/Programas" element={<ProgramasFDF />} />
          <Route path="/FondodeFomento/AtencionCiudadano" element={<AtencionFDF />} />
          <Route path="/FondodeFomento/EstructuraOrganica" element={<EstructuraOrganica />} />
          <Route path="/FondodeFomento/ProcesosRecaudo" element={<ProcesosRecaudoFDF />} />
          <Route path="/FondodeFomento/CalendarioEventos" element={<CalendarioEventosFDF />} />
          <Route path="/FondodeFomento/QuejasReclamos" element={<QuejasReclamos />} />






          {/*Normatividad*/}
          <Route path="/Normatividad/Comercial" element={<Comercial />} />
          <Route path="/Normatividad/Ambiental" element={<Ambiental />} />
          <Route path="/Normatividad/Sanitarias" element={<Sanitarias />} />
          <Route path="/Normatividad/Laboral" element={<Laboral />} />



          {/*Ley Transparecia*/}
          <Route path="/LeyTransparencia/MecanismosContacto" element={<MecanismoContacto />} />
          <Route path="/LeyTransparencia/Informaciondeinteres" element={<Informaciondeinteres/>} />
          <Route path="/LeyTransparencia/Estructuraorgánicaytalentohumano" element={<Estructuraorgánicaytalentohumano/>} />
          <Route path="/LeyTransparencia/Normatividad" element={<Normatividad/>} />
          <Route path="/LeyTransparencia/Presupuesto" element={<Presupuesto/>} />
          <Route path="/LeyTransparencia/Planeacion" element={<Planeacion />} />
          <Route path="/LeyTransparencia/Contratacion" element={<Contratacion />} />


          











        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
