
import Layout from "hocs/layouts/Layout"
import AccordionComponent from "components/Nuestra Fede/AccordionComponent"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import quienessomos from "assets/img/quienes2.png"
import fomento from "assets/img/fomento.jpg"
import { motion } from 'framer-motion';
import { useState } from 'react';
import { People, FileEarmarkCheck, FileEarmarkText, Eye, FileEarmarkBarGraph } from "react-bootstrap-icons"
import img1 from "assets/img/Img1.png"
import { Check } from "react-bootstrap-icons"
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

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
const recaudoData = [
    createData('Director(a) de Cadenas Agrícolas y Forestales', 'OSCAR MAURICIO BERNAL VARGAS', 'Oscar.bernal@minagricultura.gov.co', 'yerli.bernal@minagricultura.gov.co'),
    createData('Director (a) de Innovación Desarrollo Tecnológico y Protección Sanitaria', 'CESAR AUGUSTO CORREDOR VELANDIA', 'cesar.corredor@minagricultura.gov.co', 'ginna.cobos@minagricultura.gov.co'),
    createData('Director de Financiamiento y Riesgos Agropecuarios', 'PAULA ANDREA ZULETA GIL', 'paula.zuleta@minagricultura.gov.co', '@minagricultura.gov.co'),
    createData('Director de Capacidades Productivas y Emprendimiento', 'ANDREA CAMPUZANO BECERRA', 'andrea.campuzano@minagricultura.gov.co', '@minagricultura.gov.co'),

];
const recaudoData1 = [
    createData('Delegado de Nariño', 'VICTOR HUGO ZAMBRANO MONTENEGRO', 'victorzambrano15@hotmail.com'),
    createData('Delegado del Valle del Cauca', 'SANTIAGO FERNANDEZ VALLEJO', 'saccharumsa@hotmail.com / biobando@hotmail.com'),
    createData('Delegado de Santander', 'TOMAS AUGUSTO MARTINEZ MARTINEZ', 'tommeson@yahoo.es'),
   
];

function SomosFDF() {

    const [isVisible, setIsVisible] = useState(false);

    const handleVisibilityChange = (isVisible) => {
        if (isVisible) {
            setIsVisible(true);
        }
    };

    return (
        <Layout>

            <Navbar />

            <div className="" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <div className="container">
                    <h1 className="text-center h1-title mt-5">Quiénes Somos-Fondo de Fomento</h1>


                    <div className="row ">
                        <div class="container px-5 mt-4 ">
                            <div class="row gx-5 align-items-center">
                                <div class="col-lg-6 order-first order-lg-last d-flex justify-content-center align-items-center">
                                    <motion.div
                                        initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut" }}
                                    >

                                        <img className="img-fluid rounded mb-5 mb-lg-0" width="350px" src={quienessomos} alt="..." />

                                    </motion.div>
                                </div>
                                <div class="col-lg-6">
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut" }}
                                    >

                                        <h2 class="fw-bolder h2-title">Fondo de Fomento</h2>
                                        <p class="lead fw-normal text-muted mb-0">La experiencia de este Ingeniero Agrícola en planes de Desarrollo Territorial con énfasis en Gestión Ambiental Urbana y en el desarrollo de infraestructura para el manejo de procesos de elaboración de la panela unida a su dominio del sector agroindustrial, son los elementos fundamentales para garantizar una gestión de asistencia técnica gremial con miras a aumentar el desarrollo de la comercialización de los mercados nacionales e internacionales.</p>

                                    </motion.div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">

                    <h2 className="lead fw-small my-4 mx-3 text-center">De acuerdo con lo establecido en la ley 40 de 1990, los recursos del Fondo de Fomento Panelero se invierten en planes y proyectos que beneficien el sector panelero, en las siguientes actividades:</h2>
                    <div className="row px-5">

                        <div className="d-flex justify-content-center px-5">
                            <ul className="list-unstyled align-items-center">
                                <li className="mb-2 mt-1">
                                    <Check color="#005B24" />
                                    Gastos de funcionamiento de la Federación Nacional de Productores de Panela, FEDEPANELA, y sus seccionales, o de otras asociaciones sin ánimo de lucro, representativas de la actividad panelera, incluyendo las cooperativas de producción o comercialización de la panela (hasta un 10%)
                                </li>
                                <li className="mb-2">
                                    <Check color="#005B24" />
                                    Actividades de investigación y extensión vinculadas con producción de semillas mejoradas de caña de panela; utilización de energéticos alternativos en la producción de la panela; técnicas de conservación, empaque y comercialización de la panela y otros productos de los trapiches y programas de diversificación de la producción.
                                </li>

                                <li className="mb-2 mt-1">
                                    <Check color="#005B24" />
                                    La promoción del consumo de la panela, dentro y fuera del país.
                                </li>
                                <li className="mb-2 mt-1">
                                    <Check color="#005B24" />
                                    Campañas educativas sobre las características nutricionales de la panela.
                                </li>
                                <li className="mb-2 mt-1">
                                    <Check color="#005B24" />
                                    Actividades de comercialización de la panela, dentro y fuera del país.
                                </li>
                                <li className="mb-2 mt-1">
                                    <Check color="#005B24" />
                                    Programas de diversificación de la producción de las unidades paneleras.
                                </li>
                                <li className="mb-2 mt-1">
                                    <Check color="#005B24" />
                                    Programas de conservación de las cuencas hidrográficas y el entorno ambiental en las zonas paneleras.
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>

                <div className="container-flex mt-5 " style={{ backgroundImage: `url(${img1})`, marginBottom: "100px", backgroundAttachment: "fixed" }}>
                    <h1 className="text-center text-white py-5">Entidades de Control</h1>
                </div>
                <div className="row  " >
                    <div className="container">

                        <section class="py-2" id="features">
                            <div class="container px-5 ">
                                <div className="row">

                                    <div class="col  mb-md-0 h-100">
                                        <div class="feature bg-success bg-gradient text-white rounded-3 mb-1"><FileEarmarkBarGraph /></div>
                                        <h2 class="h5">Informe a la Contaduría Nacional General</h2>
                                        <p class="text-muted">Se envían informes trimestrales de los estados financieros a la Contaduría Nacional General de la Nación.</p>
                                    </div>



                                    <div class="col  mb-md-0 h-100">
                                        <div class="feature bg-success bg-gradient text-white rounded-3 mb-1"><FileEarmarkCheck /></div>
                                        <h2 class="h5">Auditoría Externa</h2>
                                        <p class="text-muted">La Junta nombra a una firma auditora externa para realizar auditorías permanentes al Fondo y presentar informes en las reuniones trimestrales.</p>
                                    </div>
                                    <div class="col h-100">
                                        <div class="feature bg-success bg-gradient text-white rounded-3 mb-1"><FileEarmarkText /></div>
                                        <h2 class="h5">Revisión Ministerial</h2>
                                        <p class="text-muted"> El Ministerio de Agricultura y Desarrollo Rural realiza revisiones periódicas a los programas, procedimientos administrativos, de recaudo y estados financieros del Fondo.</p>
                                    </div>

                                </div>
                                <div className="row">
                                    <div class="col-md-6">
                                        <div class="feature bg-success bg-gradient text-white rounded-3 mb-1"><Eye /></div>
                                        <h2 class="h5">Vigilancia de la Contraloría General</h2>
                                        <p class="text-muted">La Contraloría General de la República vigila los estados financieros, inversiones y administración de la Cuota de Fomento Panelero, recibiendo informes trimestrales.</p>
                                    </div>


                                    <div class="col h-100">
                                        <div class="feature bg-success bg-gradient text-white rounded-3 mb-1"> < People /></div>
                                        <h2 class="h5">Junta Directiva del Fondo de Fomento Panelero</h2>
                                        <p class="text-muted"> Conformada por representantes del Ministerio de Agricultura y Desarrollo Rural y del sector panelero, se reúne trimestralmente para revisar y aprobar inversiones y presupuestos.</p>
                                    </div>

                                </div>




                            </div>
                        </section>
                    </div>


                </div>
                <div className="container " style={{ marginTop: "100px" }}>

                    <h2 style={{ marginLeft: "100px", borderBottom:"2px solid #005B24", display: "inline-block" }} className="fw-bolder h2-title mb-4">Junta Directiva</h2>
                    <h2 style={{ marginLeft: "120px" }}className="h2-title ">Ministerio de Agricultura Y Desarrollo Rural</h2>
                    <TableContainer sx={{ maxWidth: 900, margin: "0 auto" }} component={Paper}>
                        <Table aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Área </StyledTableCell>
                                    <StyledTableCell align="left">Nombre</StyledTableCell>
                                    <StyledTableCell align="left">Correo</StyledTableCell>
                                    <StyledTableCell align="left">Contacto Asistente</StyledTableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {recaudoData.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{row.calories}</StyledTableCell>
                                        <StyledTableCell align="left">{row.fat}</StyledTableCell>
                                        <StyledTableCell align="left">{row.carbs}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div className="container " style={{ marginTop: "100px" }}>

                    <h2 style={{ marginLeft: "120px" }}className="h2-title ">Delegados de la Junta directiva</h2>
                    <TableContainer sx={{ maxWidth: 900, margin: "0 auto" }} component={Paper}>
                        <Table aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Área </StyledTableCell>
                                    <StyledTableCell align="left">Nombre</StyledTableCell>
                                    <StyledTableCell align="left">Correo</StyledTableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {recaudoData1.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{row.calories}</StyledTableCell>
                                        <StyledTableCell align="left">{row.fat}</StyledTableCell>
                                      
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div >





            <Footer />


        </Layout >
    )
}
export default SomosFDF