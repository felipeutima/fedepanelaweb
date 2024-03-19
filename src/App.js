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
import OportunidadesComerciales from 'containers/pages/Area comercial/OportunidadesComerciales';
import Estructuraorgánicaytalentohumano from 'containers/pages/Ley de Transparencia/Estructuraorgánicaytalentohumano';
import Normatividad from 'containers/pages/Ley de Transparencia/Normatividad';
import ProyeccionNegocio from 'containers/pages/Area comercial/ProyecciónNegocio';
import Control from 'containers/pages/Ley de Transparencia/Control';
import Aexcid from 'containers/pages/Convenios/Aexid';
import Finagro from 'containers/pages/Convenios/Finagro';
import NamaPanela from 'containers/pages/Convenios/NamaPanela';
import PreguntasFrecuentes from 'containers/pages/Fondo de fomento/PreguntasFrecuentes';
import HerramientesInter from 'containers/pages/Area comercial/HerramientasInter';
import ObjetivoTecnica from 'containers/pages/Area tecnica/ObjetivoTecnica';
import AsistenciaTecnica from 'containers/pages/Area tecnica/AsistenciaTecnica';
import SeguridadSocial from 'containers/pages/Area tecnica/SeguridadSocial';
import CapitalSocial from 'containers/pages/Area tecnica/CapitalSocial';
import BibliografiaTecnica from 'containers/pages/Area tecnica/BibliografiaTecnica';
import ObjetivoComunicaciones from 'containers/pages/Area comunicaciones/ObjetivoComunicaciones';
import PromocionConsumo from 'containers/pages/Area comunicaciones/PromocionConsumo';
import PanelaKids from 'containers/pages/Area comunicaciones/PanelaKids';
import ObjetivoSocio from 'containers/pages/Area socioempresarial/ObjetivoSocio';
import ConstruccionCapital from 'containers/pages/Area socioempresarial/ConstruccionCapital';
import SeguridadySalud from 'containers/pages/Area socioempresarial/SeguridadySalud';
import NormatividadSocio from 'containers/pages/Area socioempresarial/NormatividadSocio';


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
          <Route path="/FondodeFomento/PreguntasFrecuentes" element={<PreguntasFrecuentes />} />






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
          <Route path="/LeyTransparencia/Planeacion" element={<Planeacion />} />
          <Route path="/LeyTransparencia/Control" element={<Control />} />



          {/*Convenios*/}

          <Route path="/Convenios/AexidyFHRE" element={<Aexcid />} />
          <Route path="/Convenios/Finagro" element={<Finagro />} />
          <Route path="/Convenios/NamaPanela" element={<NamaPanela />} />

          {/*Area Tecnica*/}

          <Route path="/AreaTecnica/Objetivo" element={<ObjetivoTecnica />} />
          <Route path="/AreaTecnica/AsistenciaTecnica" element={<AsistenciaTecnica />} />
          <Route path="/AreaTecnica/SeguridadSocial" element={<SeguridadSocial />} />
          <Route path="/AreaTecnica/CapitalSocial" element={<CapitalSocial />} />
          <Route path="/AreaTecnica/BibliografiaTecnica" element={<BibliografiaTecnica />} />


          {/*Area comercial*/}

          <Route path="/AreaComercial/OportunidadesComerciales" element={<OportunidadesComerciales />} />
          <Route path="/AreaComercial/Herramientas" element={<HerramientesInter />} />
          <Route path="/AreaComercial/ProyeccionNegocio" element={<ProyeccionNegocio />} />

          {/*Area Comunicaciones*/}

          <Route path="/AreaComunicaciones/Objetivo" element={<ObjetivoComunicaciones />} />
          <Route path="/AreaComunicaciones/PromocionConsumo" element={<PromocionConsumo />} />
          <Route path="/AreaComunicaciones/PanelaKids" element={<PanelaKids />} />
          {/*Area Socio Empresarial*/}

          <Route path="/AreaSocioEmpresarial/Objetivo" element={<ObjetivoSocio />} />
          <Route path="/AreaSocioEmpresarial/ConstruccionCapital" element={<ConstruccionCapital/>} />
          <Route path="/AreaSocioEmpresarial/SeguridadySalud" element={<SeguridadySalud/>} />
          <Route path="/AreaSocioEmpresarial/NormatividadSocio" element={<NormatividadSocio/>} />
 
















        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
