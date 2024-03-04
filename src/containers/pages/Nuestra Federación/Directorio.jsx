
import Layout from "hocs/layouts/Layout"
import AccordionComponent from "components/Nuestra Fede/AccordionComponent"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
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

const rows = [
    createData('Gerente General', "CARLOS MAYORGA", "gerencia@fedepanela.org.co", 1004),
    createData('Asistente Gerencia', "ILEN ALTAMIRANDA", "asistentegerencia@fedepanela.org.co", 1003),
    createData('Directora de Recaudo', "JACKELINE ALVARADO", "jalvarado@fedepanela.org.co", 1017),
    createData('Coordinadora de Recaudo', "VIVIANA CALVO", "coordinadoraderecaudo@fedepanela.org.co", 1016),
    createData('Director Jurídico', "SANTIAGO DAVILA", "juridica@fedepanela.org.co", 1013),
    createData('Polizas y Contratación', "SANDRA RODRIGUEZ", "srodriguez@fedepanela.org.con", 1014),
    createData('Director Financiero', "JUAN MANUEL LASSO", "jlasso@fedepanela.org.co", 1001),
    createData('Administrativa Fedepanela', "TATIANA GARCIA", "tgarcia@fedepanela.org.co", 1021),
    createData('Exportaciones', "PAOLA JARAMILLO", "exportaciones@fedepanela.org.co", 1021),
    createData('Tesoreria', "ANDREA FIGUEROA", "tesoreria@fedepanela.org.co", 1020),
    createData('Contadora', "LEYDI BELTRAN", "contabilidad@fedepanela.org.co", 1024),
    createData('Recursos Humanos', "JISETH CASTELLANOS", "gestionhumana@fedepanela.org.co", 1027),
    createData('Presupuesto', "HEIDY MALDONADO", "presupuesto@fedepanela.org.co", 1023),
    createData('Recepcion', "CAMILA CASTAÑEDA", "recepcion@fedepanela.org.co", 1000),
    createData('Director Técnico', "CRISTIÁN MARIN", "cmarin@fedepanela.org.co", 1005),
    createData('Profesional de apoyo', "EMIL CELYS", "ecelys@fedepanela.org.co", 1007),
    createData('Profesional de apoyo', "BEATRIZ RONDON", "brondon@fedepanela.org.co", 1006),
    createData('Profesional de apoyo', "NIDIA VARELA", "nvarela@fedepanela.org.co", 1006),
    createData('Profesional especializado en calidad', "ANGELA MARTINEZ", "amartinez@fedepanela.org.co", 1011),
    createData('Profesional de cumplimiento', "MÓNICA QUINTERO", "lquintero@fedepanela.org.co", 1011),
    createData('Dirección Socio-empresarial', "SANDRA SANCHEZ", "ssanchez@fedepanela.org.co", 1025),
    createData('Director sistemas de información', "MAURICIO ANGEL", "mangel@fedepanela.org.co", 1002),
    createData('Soporte Técnico', "WILMER CRUZ", "wcruz@fedepanela.org.co", 1026),
    createData('Profesional sistemas de información', "LAURA AGUDELO", "lagudelo@fedepanela.org.co", 1008),
    createData('Cedulación', "CARLOS RÍOS", "crios@fedepanela.org.co", 1028),
    createData('Dirección de Comunicaciones', "ERIKA GARRIDO", "comunicaciones@fedepanela.org.co", 1015),
    createData('Profesional Comunicaciones', "NICOLAS TORREJANO", "ntorrejano@fedepanela.org.co", 1015),
    createData('Profesional Comunicaciones Gráficas', "LIZETH FRAILES", "lfrailes@fedepanela.org.co", 1019),
    createData('Dirección Comercial', "YULIETH OLARTE", "yolarte@fedepanela.org.co", 1009),
    createData('Profesional exportaciones', "CAROLINA OSORIO", "caosorio@fedepanela.org.co", 1010),
    createData('Profesional encadenamientos productivos', "MARIBEL MARIN", "mmarin@fedepanela.org.co", 1010),
    createData('Profesional agronegocios y desarrollo de modelos de negocio', "DANIEL CRUZ", "dcruz@fedepanela.org.co", 1010),
    createData('Profesional agronegocios y desarrollo de modelos de negocio', "OSCAR MARTINEZ", "omartinez@fedepanela.org.co", 1010),
    createData('Arquitecto', "ADRIAN ARCOS", "vivienda@fedepanela.org.co", 1022)
  ];


  const recaudoData = [
    createData('ANTIOQUIA', 'DIANA CARVAJAL', '321-638 22 58', 'antioquia@fedepanela.org.co'),
    createData('BOYACA', 'GINA ALEJANDRA CRISTANCHO', '312-397 37 46', 'boyaca@fedepanela.org.co'),
    createData('CALDAS', 'MARIO GIL DÍAZ', '317-439 93 11', 'caldas@fedepanela.org.co'),
    createData('CUNDINAMARCA', 'RODOLFO VELASCO', '320-462 56 49', 'cundinamarca@fedepanela.org.co'),
    createData('HUILA', 'LINDA LUCIA ROJAS GOMEZ', '313-397 12 48', 'huila@fedepanela.org.co'),
    createData('NARIÑO', 'ANGELA JURADO ROSERO', '315-396 35 18', 'narino@fedepanela.org.co'),
    createData('RISARALDA-QUINDIO', 'ALEJANDRA PALACIO VELASQUEZ', '316-577 34 28', 'risaralda@fedepanela.org.co'),
    createData('SANTANDER', 'ANDREA CAROLINA RODRIGUEZ BURGOS', '318-708 20 89', 'crodriguez@fedepanela.org.co'),
    createData('TOLIMA', 'GERARDO GUZMAN', '312-343 81 64', 'geguzman@fedepanela.org.co'),
    createData('VALLE', 'MARIA CRISTINA ROLDAN BEDOYA', '315-396 78 39', 'valle@fedepanela.org.co'),
    createData('VILLETA', 'SANDRA MILENA MARTÍNEZ ÁVILA', '320-485 83 76', 'recaudovilleta@fedepanela.org.co'),
    createData('SANTANDER', 'HUBERTO RUIZ FAJARDO', '311-803 98 25', 'socorro@fedepanela.org.co'),
    createData('CAUCA', 'CRISTINA BOLAÑOS MANQUILLO', '318-347 68 22', 'cauca@fedepanela.org.co')
  ];

  const areaTecnicaData = [
    createData('Cristián Marín', 'Director', 'cmarin@fedepanela.org.co'),
    createData('Angela Martinez', 'Profesional Especializado de Calidad', 'amartinez@fedepanela.org.co'),
    createData('Nestor Triana', 'Profesional de Calidad', 'ntriana@fedepanela.org.co'),
    createData('Nidia Catherine Varela', 'Profesional de Apoyo', 'nvarela@fedepanela.org.co'),
    createData('Emil Celys López', 'Profesional de Apoyo', 'ecelys@fedepanela.org.co'),
    createData('Dinora Patricia Bedoya Vergara', 'Coordinadora Departamental Antioquia', 'dbedoya@fedepanela.org.co'),
    createData('Diana Montenegro', 'Coordinadora Departamental Caldas', 'dmontenegro@fedepanela.org.co'),
    createData('Alba Ruby Rodriguez Bolaños', 'Coordinadora Departamental Cauca', 'arodriguez@fedepanela.org.co'),
    createData('Edwin Hernandez', 'Coordinador Departamental Cundinamarca', 'ehernandez@fedepanela.org.co'),
    createData('German Silva Santander', 'Coordinador Departamental Nariño', 'gsilva@fedepanela.org.co'),
    createData('Sandra Milena Barrera Vargas', 'Coordinadora Departamental Quindío-Risaralda', 'sbarrera@fedepanela.org.co'),
    createData('Wilman Efrén Molina López', 'Coordinador Departamental Santander', 'wemolina@fedepanela.org.co'),
    createData('Alvaro Hernan Quintero Bedoya', 'Coordinador Departamental Valle del Cauca', 'aquintero@fedepanela.org.co'),
    createData('Martha Quintero', 'Coordinadora Departamental Boyacá', 'mquintero@fedepanela.org.co'),
    createData('Jair Rojas Barrera', 'Profesional Departamental Tolima', 'jrojas@fedepanela.org.co'),
    createData('Edgar Esaú Realpe', 'Profesional Departamental Huila', 'erealpe@fedepanela.org.co'),
    createData('Luis Manuel Fajardo Montezuma', 'Profesional Departamental Nariño', 'lfajardo@fedepanela.org.co'),
    createData('Elcira Llanos', 'Profesional Departamental Caquetá', 'ellanos@fedepanela.org.co'),
    createData('David Mauricio Ibáñez Duran', 'Profesional Departamental Norte de Santander', 'dibanez@fedepanela.org.co'),
    createData('Maria Fernanda Casallas', 'Profesional Departamental Boyacá-Santander', 'mcasallas@fedepanela.org.co'),
    createData('Joaquin Emilio Valencia Tuberquia', 'Técnico Agrícola Antioquia', 'jvalencia@fedepanela.org.co'),
    createData('Nancy Carolina Londoño Muñoz', 'Técnico Agrícola Antioquia', 'nlondono@fedepanela.org.co'),
    createData('Jhon Henry Noguera Hernandez', 'Técnico Agrícola Boyacá', 'jnoguera@fedepanela.org.co'),
    createData('Solanyi Esmeralda Villalobos Peña', 'Técnico Agrícola Boyacá', 'svillalobos@fedepanela.org.co'),
    createData('Roger Vergara', 'Técnico Agrícola Cauca', 'rvergara@fedepanela.org.co'),
    createData('Alexander Zarate Espinosa', 'Técnico Agrícola Cundinamarca', 'azarate@fedepanela.org.co'),
    createData('Amparo Ramos', 'Técnico Agrícola Cundinamarca', 'aramos@fedepanela.org.co'),
    createData('Carlos Faiver Argote Calvache', 'Técnico Agrícola Huila', 'cargote@fedepanela.org.co'),
    createData('Luis Hernando Narvaez Morales', 'Técnico Agrícola Nariño', 'lnarvaez@fedepanela.org.co'),
    createData('Yeison Estiben Mateus Ariza', 'Técnico Agrícola Santander', 'ymateus@fedepanela.org.co'),
    createData('Brayan Ferney Naranjo Vesga', 'Técnico Agrícola Santander', 'bnaranjo@fedepanela.org.co'),
    createData('Cesar Augusto Gutierrez', 'Técnico Agrícola Valle del Cauca', 'cgutierrez@fedepanela.org.co'),
    createData('Carlos Alberto Ríos Díaz', 'Auxiliar Administrativo Nivel Central', 'crios@fedepanela.org.co'),
    createData('Leidy Tatiana Garcia Loaiza', 'Auxiliar Administrativo Nivel Central', 'tgarcia@fedepanela.org.co'),
    createData('Heidy Viviana Maldonado Cristancho', 'Auxiliar Administrativo Nivel Central', 'presupuesto@fedepanela.org.co'),
    createData('Jiseth Yulieth Castellanos Misar', 'Auxiliar Administrativo Nivel Central', 'gestionhumana@fedepanel.org.co'),
    createData('Beatriz Rondon', 'Auxiliar Administrativo Nivel Central', 'brondon@fedepanela.org.co'),
    createData('Nancy Perenguez', 'Auxiliar Administrativo Nariño', 'nperenguez@fedepanela.org.co')
  ];




function Directorio() {

    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px"}}>

                <h1 className="text-center h1-title mt-5">Directorio</h1>
                
                <h2 style={{marginLeft:"200px"}} className="h2-title mt-3">UBICACIÓN DE SEDES Y AREAS / HORARIOS DE ATENCIÓN</h2>
                <TableContainer className="table-responsive" sx={{  maxWidth: 900, margin:"0 auto" }} component={Paper}>
                
                    <Table className="mt-3"  aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Área </StyledTableCell>
                                <StyledTableCell align="left">Funcionario</StyledTableCell>
                                <StyledTableCell align="left">Correo</StyledTableCell>
                                <StyledTableCell align="left">Extensión</StyledTableCell>
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
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>   
            </div>

            <div className="container " style={{ marginTop: "100px" }}>

                <h2 style={{marginLeft:"200px"}} className="h2-title mb-4">Directorio Recaudo</h2>

                <TableContainer sx={{ maxWidth: 900, margin:"0 auto" }} component={Paper}>
                    <Table  aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Departamento </StyledTableCell>
                                <StyledTableCell align="left">Nombre</StyledTableCell>
                                <StyledTableCell align="left">Contacto</StyledTableCell>
                                <StyledTableCell align="left">Correo</StyledTableCell>
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

            <div className="container" style={{ marginTop: "100px" }}>

                <h2 style={{marginLeft:"200px"}} className="h2-title mb-3">Área Técnica</h2>

                <TableContainer sx={{ minWidth: 700, maxWidth: 900, margin:"0 auto" }} component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Funcionario </StyledTableCell>
                                <StyledTableCell align="left">Cargo</StyledTableCell>
                                <StyledTableCell align="left">Correo</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {areaTecnicaData.map((row) => (
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



            <Footer />


        </Layout>
    )
}
export default Directorio