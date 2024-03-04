import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import CardDownload from "components/Nuestra Fede/CardDownload";
import re2023 from "assets/docs/Reforma-Estatutaria-2023.pdf";
import re003 from "assets/docs/Resolucion-003-Reglamento-Elecciones-2023.pdf";
import { motion } from "framer-motion";
import Accordion from "react-bootstrap/Accordion";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#85380F",
      color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
      border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein, ab, link) {
  return { name, calories, fat, carbs, protein, ab, link };
}

const rows = [
  createData('001/2020','CONTRATO DE SUMINISTRO','20-12-10328106','CONTRATACIÓN DIRECTA','REALIZAR IMPESION DE LOS ROLLOS DE CINTAS NECESARIOS PARA EL CONTROL DEL RECAUDO EN FORMA PERIODICA Y CONTINUA DE ACUERDO A LAS ORDENES DE PEDIDO QUE FEDEPANELA REALICE','$ 200.000.000','Detalle del proceso: 001/2020 (contratos.gov.co)'),
  createData('002/2020', 'PRESTACION DE SERVICIOS', '20-12-10328251', 'CONTRATACIÓN DIRECTA','prestar sus servicios profesionales para la coordinación del programa comercial del Fondo de Fomento Panelero.', '$ 71.046.000', 'Detalle del proceso: 002/220 (contratos.gov.co)' ),
  createData('003/2020', 'PRESTACION DE SERVICIOS', '20-12-10328299', 'CONTRATACIÓN DIRECTA', 'prestar sus servicios profesionales como Director del área Jurídica, con el fin de dar asesoria legal en la totalidad de los asuntos que surjan relacionados con las diferentes actividades del Fondo de Fomento Panelero de acuerdo con la legislación vigente', '$ 71.046.000', 'Detalle del proceso: 003/2020 (contratos.gov.co)' ),
  createData('004/2020', 'PRESTACION DE SERVICIOS', '20-12-10328334', 'CONTRATACIÓN DIRECTA', 'Fortalecer el sistema de informacion Panelero SIPA, atravez de la direccion del programa', '$ 71.046.000', 'Detalle del proceso: 004/2020 (contratos.gov.co)'),
  createData('005/2020', 'PRESTACION DE SERVICIOS', '20-12-10328376', 'CONTRATACIÓN DIRECTA', 'PRESTAR SUS SERVICIOS PROFESIONALES DE ASESORIA AL PROGRAMA DE PROMOCION AL CONSUMO DEL FONDO DE FOMENTO PANELERO', '$ 71.046.000', 'Detalle del proceso: 005/2020 (contratos.gov.co)' ),
  createData('006/2020', 'PRESTACION DE SERVICIOS', '20-12-10328412', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS PARA ACTIVIDADES DE RECAUDO Y VERIFICACIÓN DE LA CUOTA DE FOMENTO PANELERO EN EL DEPARTAMENTO DE HUILA', '$ 20.036.401', 'Detalle del proceso: 006/2020 (contratos.gov.co)'),
  createData('007/2020', 'PRESTACION DE SERVICIOS', '20-12-10328476', 'CONTRATACIÓN DIRECTA','Prestar sus servicios para realizar las actividades de RECAUDO Y VERIFICACIÓN DE LA CUOTA DE FOMENTO PANELERO EN LOS DEPARTAMENTOS DE RISARALDA QUINDIO.', '$ 19.681.401', 'Detalle del proceso: 007/2020 (contratos.gov.co)'),
  createData('008/2020', 'PRESTACION DE SERVICIOS', '20-12-10328532', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS PARA ACTIVIDADES DE RECAUDO Y VERIFICACIÓN DE LA CUOTA DE FOMENTO PANELERO EN EL DEPARTAMENTO DE VALLE DEL CAUCA', '$ 25.195.142', 'Detalle del proceso: 008/2020 (contratos.gov.co)'),
  createData('009/2020', 'PRESTACION DE SERVICIOS', '20-12-10328576', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS PARA ACTIVIDADES DE RECAUDO Y VERIFICACIÓN DE LA CUOTA DE FOMENTO PANELERO EN EL DEPARTAMENTO DE CALDAS', '$ 20.864.734', 'Detalle del proceso: 009/2020 (contratos.gov.co)'),
  createData('010/2020', 'PRESTACION DE SERVICIOS', '20-12-10333240', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS PARA ACTIVIDADES DE RECAUDO Y VERIFICACIÓN DE LA CUOTA DE FOMENTO PANELERO EN EL DEPARTAMENTO DE SANTANDER', '$ 19.681.401', 'Detalle del proceso: 010/2020 (contratos.gov.co)'),
  createData('011/2020', 'PRESTACION DE SERVICIOS', '20-12-10333284', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS COMO AUXILIAR ADMINISTRAITVO DE APOYO AL PROGRAMA DE ASISTENCIA TECNICA DE FEDEPANELA', '$ 21.263.600', 'Detalle del proceso: 011/2020 (contratos.gov.co)'),
  createData('012/2020', 'PRESTACION DE SERVICIOS', '20-12-10365953', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS COMO PROFESIONAL DE APOYO PAR AFORTALECER UN SISTEMA DE ASISTENCIA TECNICA INTEGRAL A TRAVEZ DE LA IMPLEMETACION DE PROCESOS QUE GARANTICEN LA SOSTENIBILIDAD Y COMPETITIVIDAD EL EL SUBSECTOR PANELERO', '$ 37.346.000', 'Detalle del proceso: 012/2020 (contratos.gov.co'),
  createData('013/2020', 'PRESTACION DE SERVICIOS', '20-12-10366010', 'CONTRATACIÓN DIRECTA','REALIZAR ACTIVIDADES DE ACTUALIZACION DE INFORMACION DE LA BASE DE DATOS DEL PROGRAMA DE ASISTENCIA TECNICA', '$ 17.228.000', 'Detalle del proceso: 013/2020 (contratos.gov.co)'),
  createData('014/2020', 'PRESTACION DE SERVICIOS', '20-12-10366057', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICOS PARA REALIZAR ACTIVIDADES ADMINISTRATIVAS DERIVADAS DEL RECAUDO Y DE LOS PROGRAMAS DEL FONDO DE FOMENTO PANELERO', '$ 26.998.400', 'Detalle del proceso: 014/2020 (contratos.gov.co)'),
  createData('015/2020', 'PRESTACION DE SERVICIOS', '20-12-10366111', 'CONTRATACIÓN DIRECTA','prestar sus servicios como profesional de apoyo en gestión ambiental y gestión de proyectos para fortalecer un sistema de asistencia técnica integral a través de la implementación de procesos que garanticen la sostenibilidad y competitividad en el subsector panelero, fomentando la asociatividad, la gestión comercial, técnica, social e institucional en las unidades productivas y organizaciones seleccionadas para la prestación del servicio.', '$ 36.609.600', 'Detalle del proceso: 015/2020 (contratos.gov.co)'),
  createData('016/2020', 'PRESTACION DE SERVICIOS', '20-12-10366182', 'CONTRATACIÓN DIRECTA','prestar sus servicios profesionales para la coordinación y realización de actividades del Programa de Promoción al Consumo del Fondo de Fomento Panelero mediante diversas actividades como participación en ferias y eventos a nivel nacional, regional y local; acciones para el impulso a las ventas, divulgación de mensajes promocionales en medios masivos, vinculando asociaciones y/o productores paneleros', '$ 39.553.327', 'Detalle del proceso: 016/2020 (contratos.gov.co)'),
  createData('017/2020', 'PRESTACION DE SERVICIOS', '20-12-10366384', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS COMO PROFESIONAL PARA LA REALIZACION DE ACTIVIDADES ADMINISTRATIVAS QUE CORRESPONDEN A LA EJECUCION DEL PROGRAMA COMERCIAL', '$ 27.025.000', 'Detalle del proceso: 017/2020 (contratos.gov.co)'),
  createData('018/2020', 'PRESTACION DE SERVICIOS', '20-12-10366433', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICOS PROFESIONALES PARA REALIZAR ENCADENAMIENTOS PRODUCTIVOS CORRESPONDIENTES A LA EJECUCION DE LA FICHA TECNICA DEL FONDO DE FOMENTO PANELERO', '$ 38.525.000', 'Detalle del proceso: 018/2020 (contratos.gov.co)'),
  createData('019/2020', 'PRESTACION DE SERVICIOS', '20-12-10366462', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS PARA FORTALECER EL SISTEMA DE INFORMACION PANELERO SIPA', '$ 24.150.000', 'Detalle del proceso: 019/2020 (contratos.gov.co)'),
  createData('020/2020', 'PRESTACION DE SERVICIOS', '20-12-10366481', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICOS COMO PROFESIONAL DE APOYO PAR AFORTALECER UN SISTEMA DE ASISSTENCIA TECNICA U¡INEGRAL A TRAVES DE LA IMPLEMENTACION DE PROCESOS QUE GARANTICEN LA SOSTENIBILIDAD Y COMPETITIVIDAD EN EL SUBSECTOR PANELERO', '$ 36.294.000', 'Detalle del proceso: 020/2020 (contratos.gov.co)'),
  createData('021/2020', 'PRESTACION DE SERVICIOS', '20-12-10366506', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS COMO PROFESIONAL ESPECIALIZADO EN SEGURIDAD SOCIAL Y SALUD LABORAL PAR AFORTALECER UN SISTEMA DE ASISTENCIA TECNICA INTEGRAL A TRAVES DE LA IMPLEMENTACION DE PROCESOS QUE GARANTICEN LA SOSTENIBIBILIDAD Y COMPETITIVIDAD EN EL SUBSECTOR PANELERO', '$ 35.017.500', 'Detalle del proceso: 021/2020 (contratos.gov.co)'),
  createData('022/2020', 'PRESTACION DE SERVICIOS', '20-12-10366532', 'CONTRATACIÓN DIRECTA','APOYO ADMINISTRATIVO AL PROGRAMA DE ASISTENCIA TECNICA', '$ 20.723.000', 'Detalle del proceso: 022/2020 (contratos.gov.co)'),
  createData('023/2020', 'PRESTACION DE SERVICIOS', '20-12-10366562', 'CONTRATACIÓN DIRECTA','Prestar los servicios se de soporte, mantenimiento tecnico preventiivo y correctivo de equipos de computo y redes', '$ 20.125.000', 'Detalle del proceso: 023/2020 (contratos.gov.co)'),
  createData('024/2020', 'PRESTACION DE SERVICIOS', '20-12-10366589', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS COMO PROFESIONAL DE CAPITAL SOCIAL', '$ 28.416.667', 'Detalle del proceso: 024/2020 (contratos.gov.co)'),
  createData('025/2020', 'PRESTACION DE SERVICIOS', '20-12-10366618', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS COMO ASISTENTE DE TRABAJO SOCIAL', '$ 23.870.000', 'Detalle del proceso: 025/2020 (contratos.gov.co)'),
  createData('026/2020', 'PRESTACION DE SERVICIOS', '20-12-10366638', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS PARA FORTALECER EL SISTEMA DE INOFRMACION PANELERO SIPA', '$ 26.143.333', 'Detalle del proceso: 026/2020 (contratos.gov.co)'),
  createData('027/2020', 'PRESTACION DE SERVICIOS', '20-12-10366650', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICOS PROFESIONALES COMO COORDINADOR DEL DEPARTAMENTO DE CAUCA', '$ 41.613.367', 'Detalle del proceso: 027/2020 (contratos.gov.co)'),
  createData('028/2020', 'PRESTACION DE SERVICIOS', '20-12-10366680', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICOS PROFESIONALES COMO COORDINADOR DEL DEPARTAMENTO DE ANTIOQUIA', '$ 41.613.367', 'Detalle del proceso: 028/2020 (contratos.gov.co)'),
  createData('029/2020', 'PRESTACION DE SERVICIOS', '20-12-10366704', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICOS PROFESIONALES COMO COORDINADOR DEL DEPARTAMENTO DE CALDAS', '$ 41.613.367', 'Detalle del proceso: 029/2020 (contratos.gov.co)'),
  createData('030/2020', 'PRESTACION DE SERVICIOS', '20-12-10366758', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICOS PROFESIONALES COMO COORDINADOR DEL DEPARTAMENTO DE NARIÑO', '$ 41.613.367', 'Detalle del proceso: 030/2020 (contratos.gov.co)'),
  createData('031/2020', 'PRESTACION DE SERVICIOS', '20-12-10366777', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS COMO PROFESIONAL DE APOYO DEL DEPARTAMENTO DE CAQUETA', '$ 17.472.000', 'Detalle del proceso: 031/2020 (contratos.gov.co)'),
  createData('032/2020', 'PRESTACION DE SERVICIOS', '20-12-10366799', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICiOS PROFESIONALES COMO COORDINADOR DEL DEPARTAMENTO DE SANTANDER', '$ 21.966.000', 'Detalle del proceso: 032/2020 (contratos.gov.co)'),
  createData('033/2020', 'PRESTACION DE SERVICIOS', '20-12-10366843', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICiOS PROFESIONALES COMO COORDINADOR DEL DEPARTAMENTO DE VALLE DEL CAUCA', '$ 21.966.000', 'Detalle del proceso: 033/2020 (contratos.gov.co)'),
  createData('034/2020', 'PRESTACION DE SERVICIOS', '20-12-10378653', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICiOS PROFESIONALES COMO COORDINADOR DEL DEPARTAMENTO DE CUNDINAMARCA.', '$ 21.966.000', 'Detalle del proceso: 034/2020 (contratos.gov.co)'),
  createData('035/2020', 'PRESTACION DE SERVICIOS', '20-12-10378681', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICiOS PROFESIONALES COMO COORDINADOR DEL DEPARTAMENTO DE TOLIMA.', '$ 21.966.000', 'Detalle del proceso: 035/2020 (contratos.gov.co)'),
  createData('036/2020', 'PRESTACION DE SERVICIOS', '20-12-10378711', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICOS COMO PROFESIONAL DE CAMPO DEL DEPARTAMENTO DE QUINDIO.', '$ 17.472.000', 'Detalle del proceso: 036/2020 (contratos.gov.co)'),
  createData('037/2020', 'PRESTACION DE SERVICIOS', '20-12-10378752', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICOS PROFESIONALES COMO PROFESIONAL DE APOYO DEL DEPARTAMENTO DE NORTE DE SANTANDER.', '$ 17.472.000', 'Detalle del proceso: 037/2020 (contratos.gov.co)'),
  createData('038/2020', 'PRESTACION DE SERVICIOS', '20-12-10378787', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICiOS PROFESIONALES COMO COORDINADOR DEL DEPARTAMENTO DE RISARALDA.', '$ 12.325.367', 'Detalle del proceso: 038/2020 (contratos.gov.co)'),
  createData('039/2020', 'PRESTACION DE SERVICIOS', '20-12-10378821', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICOS COMO DIRECTOR NACIONAL DEL AREA TECNICA', '$ 30.391.900', 'Detalle del proceso: 039/2020 (contratos.gov.co)'),
  createData('040/2020', 'PRESTACION DE SERVICIOS', '20-12-10378889', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS COMO TECNICO AGRICOLA DEL DEPARTAMENTO DE ANTIOQUIA', '$ 14.400.000', 'Detalle del proceso: 040/2020 (contratos.gov.co)'),
  createData('041/2020', 'PRESTACION DE SERVICIOS', '20-12-10378950', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS COMO TECNICO AGRICOLA DEL DEPARTAMENTO DE CAUCA', '$ 14.400.000', 'Detalle del proceso: 041/2020 (contratos.gov.co)'),
  createData('042/2020', 'PRESTACION DE SERVICIOS', '20-12-10378980', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS COMO TECNICO AGRICOLA DEL DEPARTAMENTO DE CUNDINAMARCA', '$ 14.400.000', 'Detalle del proceso: 042/2020 (contratos.gov.co)'),
  createData('043/2020', 'PRESTACION DE SERVICIOS', '20-12-10379012', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS COMO TECNICO AGRICOLA DEL DEPARTAMENTO DE CUNDINAMARCA', '$ 14.400.000', 'Detalle del proceso: 043/2020 (contratos.gov.co)'),
  createData('044/2020', 'PRESTACION DE SERVICIOS', '20-12-10379049', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS COMO TECNICO AGRICOLA DEL DEPARTAMENTO DE HUILA', '$ 14.400.000', 'Detalle del proceso: 044/2020 (contratos.gov.co)'),
  createData('045/2020', 'PRESTACION DE SERVICIOS', '20-12-10379070', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICOS PROFESIONALES COMO PROFESIONAL DE APOYO DEL DEPARTAMENTO DE NORTE DE HUILA', '$ 17.472.000', 'Detalle del proceso: 045/2020 (contratos.gov.co)'),
  createData('046/2020', 'PRESTACION DE SERVICIOS', '20-12-10379124', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS COMO TECNICO AGRICOLA DEL DEPARTAMENTO DE NARIÑO', '$ 9.600.000', 'Detalle del proceso: 046/2020 (contratos.gov.co)'),
  createData('047/2020', 'PRESTACION DE SERVICIOS', '20-12-10379153', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS COMO TECNICO AGRICOLA DEL DEPARTAMENTO DE NARIÑO', '$ 9.600.000', 'Detalle del proceso: 047/2020 (contratos.gov.co)'),
  createData('048/2020', 'PRESTACION DE SERVICIOS', '20-12-10379213', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS COMO TECNICO AGRICOLA DEL DEPARTAMENTO DE TOLIMA', '$ 14.400.000', 'Detalle del proceso: 048/2020 (contratos.gov.co)'),
  createData('049/2020', 'PRESTACION DE SERVICIOS', '20-12-10379287', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS COMO TECNICO AGRICOLA DEL DEPARTAMENTO DE SANTANDER', '$ 14.400.000', 'Detalle del proceso: 049/2020 (contratos.gov.co'),
  createData('050/2020', 'PRESTACION DE SERVICIOS', '20-12-10379348', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS COMO TECNICO AGRICOLA DEL DEPARTAMENTO DE SANTANDER', '$ 14.400.000', 'Detalle del proceso: 050/2020 (contratos.gov.co)'),
  createData('051/2020', 'PRESTACION DE SERVICIOS', '20-12-10379387', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS COMO TECNICO AGRICOLA DEL DEPARTAMENTO DE VALLE DEL CAUCA', '$ 14.400.000', 'Detalle del proceso: 051/2020 (contratos.gov.co)'),
  createData('052/2020', 'PRESTACION DE SERVICIOS', '20-12-10379443', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS PROFESIONALES PARA REALIZAR ACTIVIDADES DE APOYO AL PROGRAMA DE PROMOCION AL CONSUMO DEL FONDO DE FOMENTO PANELERO.', '$ 19.800.000', 'Detalle del proceso: 052/2020 (contratos.gov.co)'),
  createData('053/2020', 'PRESTACION DE SERVICIOS', '20-12-10379477', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS COMO PROFESIONAL DE APOYO DEL PROGRAMA DE PROMOCION AL CONSUMO DEL FONDO DE FOMENTO PANELERO', '$ 19.800.000', 'Detalle del proceso: 053/2020 (contratos.gov.co)'),
  createData('054/2020', 'PRESTACION DE SERVICIOS', '20-12-10558253', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS COMO TECNICO AGRICOLA DEL DEPARTAMENTO DE ANTIOQUIA', '$ 13.920.000	', 'Detalle del proceso: 054/2020 (contratos.gov.co)'),
  createData('055/2020', 'ANULADO', 'ANULADO', 'ANULADO','ANULADO', 'ANULADO', 'ANULADO'),
  createData('056/2020', 'PRESTACION DE SERVICIOS', '20-12-10558341', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS COMO TECNICO AGRICOLA DEL DEPARTAMENTO DE BOYACA', '$ 14.400.000', 'Detalle del proceso: 056/2020 (contratos.gov.co)'),
  createData('057/2020', 'PRESTACION DE SERVICIOS', '20-12-10558364', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS COMO TECNICO AGRICOLA DEL DEPARTAMENTO DE BOYACA', '$ 14.400.000', 'Detalle del proceso: 057/2020 (contratos.gov.co)'),
  createData('058/2020', 'PRESTACION DE SERVICIOS', '20-12-10558395', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS COMO PROFESIONAL DE APOYO DE CAPITAL SOCIAL PARA FORTALECER UN SISTEMA DE ASISTENCIA TECNICA INTEGRAL A TRAVES DEL SEGUIMIENTO, DESARROLLO E IMPLEMENTACION DE METODOLOGIAS QUE FOMENTEN LA ASOCIATIVIDAD, EL RELEVO GENERACIONAL, LA PARTICIPACON DE LAS MUJERES Y ENCADENAMIENTOS PRODUCTIVOS EN EL SECTOR PANELERO', '$ 17.472.000', 'Detalle del proceso: 058/2020 (contratos.gov.co)'),
  createData('059/2020', 'PRESTACION DE SERVICIOS', '20-12-10558427', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS COMO PROFESIONAL DE APOYO DEL DEPARTAMENTO DE BOYACA', '$ 17.472.00', 'Detalle del proceso: 059/2020 (contratos.gov.co)'),
  createData('060/2020', 'PRESTACION DE SERVICIOS', '060/2020', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS COMO TECNICO AGRICOLA DEL DEPARTAMENTO DE VALLE DEL CAUCA', '$ 14.400.000', 'Detalle del proceso: 060/2020 (contratos.gov.co)'),
  createData('061/2020', 'PRESTACION DE SERVICIOS', '20-12-10720560', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS EN CALIDAD DE AUDITORES DEL FONDO NACIONAL DE LA PANELA', '$ 61.143.390', 'Detalle del proceso: cto 061/2020 (contratos.gov.co)'),
  createData('062/2020', 'PRESTACION DE SERVICIOS', '20-12-10720572', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICiOS PROFESIONALES COMO COORDINADOR DEL DEPARTAMENTO DE RISARALDA.', '$ 10.983.000', 'Detalle del proceso: 062/2020 (contratos.gov.co)'),
  createData('063/2020', 'PRESTACION DE SERVICIOS', '20-12-10818422', 'CONTRATACIÓN DIRECTA','Prestar sus servicios como profesional especializado', '$ 7.322.000', 'Detalle del proceso: 063/2020 (contratos.gov.co)'),
  createData('064/2020', 'PRESTACION DE SERVICIOS', '20-12-10818429', 'CONTRATACIÓN DIRECTA','Prestar sus servicios como profesional especializado	', '$ 7.322.000', 'Detalle del proceso: 064/2020 (contratos.gov.co)'),
  createData('065/2020', 'PRESTACION DE SERVICIOS', '20-12-10885411', 'CONTRATACIÓN DIRECTA','Realizar la contratacion y emision de pauta para radio coomo parte de la campàña de promocion al consumo del fondo de fomemento panelero', '$ 12.506.000', 'Detalle del proceso: 065/2020 (contratos.gov.co)'),
  createData('066/2020', 'PRESTACION DE SERVICIOS', '20-12-10885420', 'CONTRATACIÓN DIRECTA','prestar sus servicios para realizar actividades de recaudo y verificacion de la cuota de fomento panelero en el municipio de Villeta Cundinamarca y municipios aledaños', '$ 8.839.302', 'Detalle del proceso: 066/2020 (contratos.gov.co)'),
  createData('067/2020', 'PRESTACION DE SERVICIOS', '20-12-10885427', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS COMO PROFESIONAL DE APOYO DEL DEPARTAMENTO DE NARIÑO', '$ 17.242.000', 'Detalle del proceso: 067/2020 (contratos.gov.co)'),
  createData('068/2020', 'PRESTACION DE SERVICIOS', '20-12-10885431', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICOS COMO DIRECTOR NACIONAL DEL AREA TECNICA', '$ 35.523.000', 'Detalle del proceso: 068/2020 (contratos.gov.co)'),
  createData('069/2020', 'PRESTACION DE SERVICIOS', '20-12-10885433', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS DE APOYO ADMINISTRAIVO AL PROOGRAMA DE ASISTENCIA TECNICA DE FEDEPANELA-FONDO DE FOMENTO PANELERO', '$ 9.630.000', 'Detalle del proceso: 069/2020 (contratos.gov.co)'),
  createData('070/2020', 'PRESTACION DE SERVICIOS', '20-12-10885436', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS PROFESIONALES PARA LA CONSTRUCCION DE MODELOS DE NEGOCIO', '$ 14.100.000', 'Detalle del proceso: 070/2020 (contratos.gov.co)'),
  createData('071/2020', 'PRESTACION DE SERVICIOS', '20-12-10975519', 'CONTRATACIÓN DIRECTA','prestar sus servicios como Técnico Agrícola del departamento de Caldas para fortalecer un sistema de asistencia técnica integral a través de la implementación de procesos que garanticen la sostenibilidad y competitividad en el subsector panelero, fomentando la asociatividad, la gestión comercial, técnica, social e institucional en las unidades productivas y organizaciones seleccionadas para la prestación del servicio', '$ 13.280.000', 'Detalle del proceso: 071/2020 (contratos.gov.co)'),
  createData('072/2020', 'PRESTACION DE SERVICIOS', '20-12-10975529', 'CONTRATACIÓN DIRECTA','prestar sus servicios como Técnico Profesional de Apoyo para Fortalecer un sistema de asistencia técnica integral a través del desarrollo e implementación de protocolos de riegos en bioseguridad', '$ 14.608.000', 'Detalle del proceso: 072/2020 (contratos.gov.co)'),
  createData('073/2020', 'PRESTACION DE SERVICIOS', '20-12-10975536', 'CONTRATACIÓN DIRECTA','PRESTAR SUS SERVICIOS COMO TECNICO AGRICOLA DEL DEPARTAMENTO DE NARIÑO', '$ 12.000.000', 'Detalle del proceso: 073/2020 (contratos.gov.co)'),
  createData('074/2020', 'PRESTACION DE SERVICIOS', '20-12-10975545', 'CONTRATACIÓN DIRECTA','prestar sus servicios como Técnico Agrícola del departamento de Santander', '$ 12.000.000', 'Detalle del proceso: 074/2020 (contratos.gov.co'),
  createData('075/2020', 'PRESTACION DE SERVICIOS', '20-12-11134610', 'CONTRATACIÓN DIRECTA','Realizar la contaracion de emision de pauta para radio de la campaña Paneleros Fuerza Vital', '$ 11.000.000', 'Detalle del proceso: 075/2020 (contratos.gov.co'),
  createData('076/2020', 'PRESTACION DE SERVICIOS', '20-12-11134669', 'CONTRATACIÓN DIRECTA','Realizar la venta de tres (3) computadores d escritorio para el Fondo de Fomento Panelero', '$ 9.990.000', 'Detalle del proceso: 076/2020 (contratos.gov.co)'),
  createData('077/2020', 'PRESTACION DE SERVICIOS', '20-12-11317562', 'CONTRATACIÓN DIRECTA','prestar sus servicios como profesional especializado para fortalecer un sistema de asistencia técnica integral a través de la implementación de procesos que garanticen la sostenibilidad y competitividad en el subsector panelero', '$ 10.983.000', 'Detalle del proceso: 077/2020 (contratos.gov.co)'),
  createData('078/2020', 'PRESTACION DE SERVICIOS', '20-12-113689721', 'CONTRATACIÓN DIRECTA','VENTA DE 22 KIT PARA REALIZAR PRUEBAS DE IDENTIFICACION DE SULFITOS EN LA PRODUCCION Y COMERCIALIZACION DE PANELA', '$ 9.988.010', 'Detalle del proceso: 078/2020 (contratos.gov.co)'),
  createData('079/2020', 'PRESTACION DE SERVICIOS', '20-12-11368972', 'CONTRATACIÓN DIRECTA','REALIZAR CONTRATACION Y EMISION DE PAUTA PARA RADIO', '$ 29.940.000', 'Detalle del proceso: 079/2020 (contratos.gov.co)'),


];

function Contratacion() {
  return (
    <Layout>
      <Navbar />

      <div
        className="container"
        style={{ marginTop: "100px", marginBottom: "50px" }}
      >
        <h1 className="text-center h1-title mt-5">8. Contratación</h1>
        <div className="row mt-5">
          <div className="col-md-12">
            <motion.div
              initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
              animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    {" "}
                    <h2 className="h2-title-header">
                      {" "}
                      8.1. Publicación de la información contractual
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="container">
                      <div>
                      <Accordion.Header>
                    {" "}
                    <h2 className="h2-title-header">
                      {" "}
                      Contratos
                    </h2>
                  </Accordion.Header>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2019/04/contratos2014.pdf"
                        >
                          2014
                        </a>
                      </div>
                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2019/04/CONTRATOS2015.pdf"
                        >
                          2015
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2019/04/contratos2016.pdf"
                        >
                          2016
                        </a>
                      </div>
                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2019/04/contratos2017.pdf"
                        >
                         2017
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2019/04/RELACION-CONTRATOS-2018-P%C3%81GINA.pdf"
                        >
                          2018
                        </a>
                      </div>
                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2019/08/RELACION-CONTRATOS-2019-PAGINA.pdf"
                        >
                          2019
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2022/09/RELACION-CONTRATOS-2020-PAGINA-2.pdf"
                        >
                          2020
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2022/09/RELACION-CONTRATOS-2021-PAGINA-2.pdf"
                        >
                          2021
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2022/07/RELACION-CONTRATOS-2022.pdf"
                        >
                          2022
                        </a>
                      </div>
                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2023/07/RELACION-CONTRATOS-2023.pdf"
                        >
                          2023
                        </a>
                      </div>
                    </div>

                    <Accordion.Header>
                    {" "}
                    <h2 className="h2-title-header">
                      {" "}
                      Ordenes de servicio
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="container">
                      <div>
                        
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2019/04/RELACION-ORDENES-DE-SERVICIO-2018.pdf"
                        >
                          2018
                        </a>
                      </div>
                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2019/08/RELACION-ORDENES-DE-SERVICIO-2019.pdf"
                        >
                          2019
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/09/RELACION-ORDENES-DE-SERVICIO-2020-2.pdf"
                        >
                          2020
                        </a>
                      </div>
                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2021/04/RELACION-ORDENES-DE-SERVICIO-2021.pdf"
                        >
                         2021
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2022/02/RELACION-ORDENES-DE-SERVICIO-2022.pdf"
                        >
                          2022
                        </a>
                      </div>
                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2023/07/RELACION-ORDENES-DE-SERVICIO-2023.pdf"
                        >
                          2023
                        </a>
                      </div>
                    </div>

                  </Accordion.Body>
                  </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    {" "}
                    <h2 className="h2-title-header">
                      {" "}
                      8.2. Publicación de la ejecución de contratos
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="container">
                      <div>
                      <Accordion.Header>
                    {" "}
                    <h2 className="h2-title-header">
                      {" "}
                      a. Aprobaciones, autorizaciones, requerimientos o informes del supervisor o del interventor, que prueben la ejecución de los contratos.
                    </h2>
                  </Accordion.Header>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/11/2015-RELACION-ACTAS-DE-LIQUIDACION-DE-CONTRATOS-DEL-AN%CC%83O-2015.pdf"
                        >
                          Relación de Actas de liquidación contratos - 2015
                        </a>
                      </div>
                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/11/2016-RELACION-ACTAS-DE-LIQUIDACION-DE-CONTRATOS-2016.pdf"
                        >
                          Relación de Actas de liquidación contratos - 2016
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/11/2017-RELACION-ACTAS-DE-LIQUIDACION-DE-CONTRATOS-20171.pdf"
                        >
                         Relación de Actas de liquidación contratos - 2017
                        </a>
                      </div>
                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/11/2018-RELACION-ACTAS-DE-LIQUIDACION-CONTRATOS-2018-PAGINA.pdf"
                        >
                         Relación de Actas de liquidación contratos - 2018
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/11/2019-RELACION-ACTAS-DE-LIQUIDACION-CONTRATOS-PAGINA.pdf"
                        >
                          Relación de Actas de liquidación contratos - 2019
                        </a>
                      </div>
                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2023/06/RELACION-CONTRATOS-2020-LIQUIDACION.pdf"
                        >
                          Relación de Actas de liquidación contratos - 2020
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2023/06/RELACION-CONTRATOS-2021-LIQUIDACION.pdf"
                        >
                          Relación de Actas de liquidación contratos - 2021
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2023/06/RELACION-CONTRATOS-2022-LIQUIDACION.pdf"
                        >
                          Relación de Actas de liquidación contratos - 2022
                        </a>
                      </div>
                    </div>

              
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    {" "}
                    <h2 className="h2-title-header">
                      {" "}
                      8.3. Publicación de procedimientos, lineamientos y políticas en materia de adquisición y compras
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="container">
                    <div>
                        
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/11/Manual-de-Procedimientos-2018-incluido-devoluciones-correccion-termino.pdf"
                        >
                          a. Manual de contratación, que contiene los procedimientos, lineamientos y políticas en materia de adquisición y compras.
                        </a>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    {" "}
                    <h2 className="h2-title-header">
                      {" "}
                      8.4. Plan Anual de Adquisiciones
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="container">
                    <div>
                        
                        <span
                          className="span-accordion"
                          href="#"
                        >
                          a. Plan Anual de Adquisiciones (PAA). No aplica
                        </span>
                      </div>

                      <div>
                        
                        <span
                          className="span-accordion"
                          href="#"
                        >
                          b. Enlace que direccione al PAA publicado en el SECOP. No aplica
                        </span>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "100px"}}>

<h1 className="text-center h1-title mt-5">SECOP</h1>

<h2 style={{marginLeft:"200px"}} className="h2-title mt-3">CONTRATOS FONDO DE FOMENTO AÑO 2020</h2>
<TableContainer className="table-responsive" sx={{  maxWidth: 900, margin:"0 auto" }} component={Paper}>

    <Table className="mt-3"  aria-label="customized table">
        <TableHead>
            <TableRow>
                <StyledTableCell>CONTRATO No </StyledTableCell>
                <StyledTableCell align="left">CLASE DE CONTRATO</StyledTableCell>
                <StyledTableCell align="left">No. DE CONSTANCIA DE PROCESO SECOP</StyledTableCell>
                <StyledTableCell align="left">CLASE DE PROCESO</StyledTableCell>
                <StyledTableCell align="left">OBJETO DEL CONTRATO	</StyledTableCell>
                <StyledTableCell align="left">VALOR TOTAL DEL CONTRATO</StyledTableCell>
                <StyledTableCell align="left">LINK SECOP I</StyledTableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row) => (
                <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                        {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.calories}</StyledTableCell>
                    <StyledTableCell align="left">{row.fat}</StyledTableCell>
                    <StyledTableCell align="left">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="left">{row.protein}</StyledTableCell>
                    <StyledTableCell align="left">{row.ab}</StyledTableCell>
                    <StyledTableCell align="left">{row.link}</StyledTableCell>
                </StyledTableRow>
            ))}
        </TableBody>
    </Table>
</TableContainer>   
</div>

      <Footer />
    </Layout>
  );
}
export default Contratacion;
