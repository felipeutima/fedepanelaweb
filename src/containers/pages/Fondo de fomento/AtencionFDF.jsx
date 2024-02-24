
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
import CardAtention from "components/Nuestra Fede/CardAtention";
import { EnvelopeFill, ClockFill, GeoAltFill, HouseFill  } from 'react-bootstrap-icons';


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

const asistenciaTecnicaData = [
    { area: 'CUNDINAMARCA', departamento: 'BOGOTÁ', ciudad: 'Carrera 49B No. 91 - 48 Barrio La Castellana', direccion: 'Lunes a viernes de 8 am - 6 am' },
    { area: 'ANTIOQUIA', departamento: 'ITAGUI', ciudad: 'Central mayorista de Antioquia. Calle 85 No. 48-01 - Bloque 25 - Oficina 515', direccion: 'Lunes a viernes de 9 am - 5 pm' },
    { area: 'BOYACA', departamento: 'SANTANA', ciudad: 'Mercado de la plaza de Panela, segundo piso sobre la via Barbosa Bucaramanga.', direccion: 'Horario con cita previa al Teléfono +57 314 228 48 03' },
    { area: 'CALDAS', departamento: 'MANIZALES', ciudad: 'Carrera 23 No. 25-61 edificio Don Pedro Oficina 1007', direccion: 'Horario con cita previa al Teléfono: +57 313 397 33 31' },
    { area: 'CAUCA', departamento: 'POPAYAN', ciudad: 'Carrera 11 No. 9 N-46 Barrio Santa Clara', direccion: 'Los días viernes y con cita previa al Teléfono: +57 320 838 27 01' },
    { area: 'CAQUETA', departamento: 'FLORENCIA', ciudad: 'Carrera 7 No. 7-25 Barrio La Estrella', direccion: 'Lunes a viernes de 8 am - 12m y 2 pm - 6 pm' },
    { area: 'CUNDINAMARCA', departamento: 'VILLETA', ciudad: 'Calle 2 No 4-137 Barrio San Cayetano', direccion: 'Jueves y viernes de 8 am a 5 pm, Los otros días se atiende esporádicamente' },
    { area: 'HUILA', departamento: '', ciudad: '', direccion: 'Horario con cita previa al Teléfono: +57 313 889 73 24' },
    { area: 'NARIÑO', departamento: 'PASTO', ciudad: 'Calle 11A No. 39a-31 Apto A1 Edificio Barlobento B/Mariluz', direccion: 'Lunes a viernes de 8 am - 12.30 pm. / 2 pm - 6 pm' },
    { area: 'NARIÑO', departamento: 'SANDONÁ', ciudad: 'Calle 4 No. 4-46 B/San Francisco', direccion: 'Lunes a viernes de 8 am - 12pm / 2 pm- 6 pm' },
    { area: 'NORTE DE SANTANDER', departamento: 'CONVENCION', ciudad: 'Calle 5 No. 15 - 14', direccion: 'Lunes y viernes de 8 am - 6 pm' },
    { area: 'QUINDIO', departamento: '', ciudad: '', direccion: 'Horario con cita previa al Teléfono: +57 300 794 71 10' },
    { area: 'RISARALDA', departamento: 'PEREIRA', ciudad: 'Centro Comercial Fiducentro F 111', direccion: 'Sábados 8-12 o cita previa' },
    { area: 'SANTANDER', departamento: '', ciudad: '', direccion: 'Horario con cita previa al Teléfono: +57 310 854 79 31' },
    { area: 'TOLIMA', departamento: '', ciudad: '', direccion: 'Horario con cita previa al Teléfono: +57 321 626 87 22' },
    { area: 'VALLE', departamento: 'TULUA', ciudad: 'Carrera 23 No. 24-43 Centro comercial la 23 Oficina 205', direccion: 'Lunes, miércoles y viernes de 8 am a 12 pm' }
];


function AtencionFDF() {

    return (
        <Layout>

            <Navbar />


            <div className="container" style={{ marginTop: "100px" }}>

                <h1 className="text-center h1-title mt-5">Atención al ciudadano </h1>
                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-6">
                            <CardAtention titulo= "Contacto"
                             cuerpo= "57 (1) 6 22 20 66 en Bogotá D.C. (Comunica con todas las dependencias)"
                             i={<EnvelopeFill />}
                              cuerpo2= "* Consultar los siguientes directorios, si desea comunicarse con una dependencia en particular"/>
                           
                        </div>
                        <div className="col-md-6">
                            <CardAtention titulo= "Horarios de atención al público:" 
                            cuerpo= "Lunes a viernes de 8:30 am a 5:00 pm, jornada continua" 
                            i={<ClockFill  className="mx-auto"/>}
                            cuerpo2="Para el horario de cada sede en el país, por favor consulte en el cuadro inferior de esta página"/>
                        </div>
                        <div className="col-md-6 mt-3">
                            <CardAtention titulo= "Recepción de correspondencia en la sede Principal, Bogotá:" 
                            cuerpo= "Lunes a viernes de 8:30 am a 5:00 pm, jornada continua"
                            i={<GeoAltFill />}
                            />
                        </div>
                        <div className="col-md-6 mt-3">
                            <CardAtention titulo= "Recepción de correspondencia en la sede Principal, Bogotá:" 
                            i={<HouseFill />}
                            
                            cuerpo= "Lunes a viernes de 8:30 am a 5:00 pm, jornada continua"/>
                        </div>
                    </div>

                </div>

                <h2 style={{ marginLeft: "200px" }} className="h2-title mt-3">Directorio Oficina Central Fedepanela - Bogotá</h2>
                <TableContainer className="table-responsive" sx={{ maxWidth: 900, margin: "0 auto" }} component={Paper}>

                    <Table className="mt-3" aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Área </StyledTableCell>
                                <StyledTableCell align="left">Departamento</StyledTableCell>
                                <StyledTableCell align="left">Ciudad</StyledTableCell>
                                <StyledTableCell align="left">Dirección</StyledTableCell>
                                <StyledTableCell align="left">Horario de atención</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {asistenciaTecnicaData.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{row.area}</StyledTableCell>
                                    <StyledTableCell align="left">{row.departamento}</StyledTableCell>
                                    <StyledTableCell align="left">{row.ciudad}</StyledTableCell>
                                    <StyledTableCell align="left">{row.direccion}</StyledTableCell>
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
export default AtencionFDF