
import Layout from "hocs/layouts/Layout"
import AccordionComponent from "components/Nuestra Fede/AccordionComponent"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"

function Directorio() {

    return (
        <Layout>

            <Navbar />

            <div className="container" style={{marginTop:"100px"}}>

                <h1 className="text-center h1-title mt-5">Directorio</h1>
                <h2 className="h2-title">Directorio Oficina Central Fedepanela - Bogotá</h2>

                <table class="table" style={{ width:"70%"}}>
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Área</th>
                            <th scope="col">Funcionario</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Extensión</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Gerente General</th>
                            <td>CARLOS MAYORGA</td>
                            <td>gerencia@fedepanela.org.co</td>
                            <td>1004</td>
                        </tr>
                        <tr>
                            <th scope="row">Asistente Gerencia</th>
                            <td>ILEN ALTAMIRANDA</td>
                            <td>asistentegerencia@fedepanela.org.co</td>
                            <td>1003</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>

                <table class="table">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>





            <Footer />


        </Layout>
    )
}
export default Directorio