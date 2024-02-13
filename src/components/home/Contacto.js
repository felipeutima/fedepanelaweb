import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contacto() {
    return (
        <> <h1 className="text-center">Contacto</h1>

            <div className="container">
                <div className="row">
                    <div className="col-md-6"> </div>
                    <div className="col-md-6"> 


                <Form className="form_container">
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Label>Nombre y Apellido*</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Telefono/Celular</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Asunto</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
 
                    <Button className="sign-in_btn " variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
                </div>
                </div>
            </div>
        </>

    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(Contacto)