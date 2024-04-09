
import Layout from "hocs/layouts/Layout"
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
import { connect } from "react-redux";
import { useEffect, useState } from "react"
import { get_directorio, get_recaudo, get_tecnica } from "redux/actions/tablas/tablas"
import { read, utils } from 'xlsx';


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



function Directorio({


    get_directorio,
    directorio,
    get_recaudo,
    recaudo,
    get_tecnica,
    tecnica

}) {

    const [jsonData, setJsonData] = useState(null);
    useEffect(() => {
        get_directorio()
        get_recaudo()
        get_tecnica()
    }, []);

    const baseUrl = process.env.REACT_APP_API_URL;
    const [data, setData] = useState(null);
    const [data1, setData1] = useState(null);
    const [data2, setData2] = useState(null);
    const [data3, setData3] = useState(null);

    const handleDescargar = async () => {
        try {
            const response = await fetch(directorio.archivo);
            const blob = await response.blob();

            const reader = new FileReader();
            reader.onload = () => {
                const workbook = read(reader.result, { type: 'binary' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const jsonData = utils.sheet_to_json(sheet, { header: 1 });
                console.log(jsonData)
                setData(jsonData);
            };
            reader.readAsBinaryString(blob);
        } catch (error) {
            console.error('Error al descargar el archivo:', error);
        }
    };
    handleDescargar();

    const handleDescargarTecnica = async () => {
        try {
            const response = await fetch(tecnica.archivo);
            const blob = await response.blob();

            const reader = new FileReader();
            reader.onload = () => {
                const workbook = read(reader.result, { type: 'binary' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const jsonData = utils.sheet_to_json(sheet, { header: 1 });
                console.log(jsonData)
                setData1(jsonData);
            };
            reader.readAsBinaryString(blob);
        } catch (error) {
            console.error('Error al descargar el archivo:', error);
        }
    };
    handleDescargarTecnica();

    const handleDescargarRecaudo = async () => {
        try {
            const response = await fetch(recaudo.archivo);
            const blob = await response.blob();

            const reader = new FileReader();
            reader.onload = () => {
                const workbook = read(reader.result, { type: 'binary' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const jsonData = utils.sheet_to_json(sheet, { header: 1 });
                console.log(jsonData)
                setData2(jsonData);
            };
            reader.readAsBinaryString(blob);
        } catch (error) {
            console.error('Error al descargar el archivo:', error);
        }
    };
    handleDescargarRecaudo();







    return (
        <Layout>

            <Navbar />




            <div className="container" style={{ marginTop: "100px" }}>



                <h1 className="text-center h1-title mt-5">Directorio</h1>

                <h2 className="h2-title mt-3 text-center">{directorio?.title}</h2>
                <TableContainer className="table-responsive" sx={{ maxWidth: 900, margin: "0 auto" }} component={Paper}>

                    {data && (


                        <TableContainer className="table-responsive" sx={{ maxWidth: 900, margin: "0 auto" }} component={Paper}>
                            <Table className="" aria-label="customized table">
                                <TableHead>
                                    <TableRow>

                                        {Object.values(data[0]).map(key => (
                                            <StyledTableCell key={key}>{key}</StyledTableCell>
                                        ))}


                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.slice(1).map((item, index) => (
                                        <TableRow key={index}>
                                            {Object.values(item).map((value, index) => (
                                                <StyledTableCell key={index}>{value}</StyledTableCell>
                                            ))}
                                        </TableRow>
                                    ))}

                                </TableBody>
                            </Table>

                        </TableContainer>
                    )}
                </TableContainer>
            </div>

            <div className="container " style={{ marginTop: "100px" }}>

                <h2 className="h2-title mt-3 text-center">{tecnica?.title}</h2>

                <TableContainer sx={{ maxWidth: 900, margin: "0 auto" }} component={Paper}>

                    {data1 && (


                        <TableContainer className="table-responsive" sx={{ maxWidth: 900, margin: "0 auto" }} component={Paper}>
                            <Table className="" aria-label="customized table">
                                <TableHead>
                                    <TableRow>

                                        {Object.values(data1[0]).map(key => (
                                            <StyledTableCell key={key}>{key}</StyledTableCell>
                                        ))}


                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data1.slice(1).map((item, index) => (
                                        <TableRow key={index}>
                                            {Object.values(item).map((value, index) => (
                                                <StyledTableCell key={index}>{value}</StyledTableCell>
                                            ))}
                                        </TableRow>
                                    ))}

                                </TableBody>
                            </Table>

                        </TableContainer>
                    )}
                </TableContainer>
            </div>

            <div className="container" style={{ marginTop: "100px" }}>

                <h2 className="h2-title mt-3 text-center">{recaudo?.title}</h2>

                <TableContainer sx={{ minWidth: 700, maxWidth: 900, margin: "0 auto" }} className="mb-3" component={Paper}>
                    {data2 && (


                        <TableContainer className="table-responsive" sx={{ maxWidth: 900, margin: "0 auto" }} component={Paper}>
                            <Table className="" aria-label="customized table">
                                <TableHead>
                                    <TableRow>

                                        {Object.values(data2[0]).map(key => (
                                            <StyledTableCell key={key}>{key}</StyledTableCell>
                                        ))}


                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data2.slice(1).map((item, index) => (
                                        <TableRow key={index}>
                                            {Object.values(item).map((value, index) => (
                                                <StyledTableCell key={index}>{value}</StyledTableCell>
                                            ))}
                                        </TableRow>
                                    ))}

                                </TableBody>
                            </Table>

                        </TableContainer>
                    )}
                </TableContainer>
            </div>





            <Footer />


        </Layout>
    )
}

const mapStateToProps = state => ({

    directorio: state.tablas.directorio,
    tecnica: state.tablas.tecnica,
    recaudo: state.tablas.recaudo


})
export default connect(mapStateToProps, {

    get_directorio, get_recaudo, get_tecnica

})(Directorio)