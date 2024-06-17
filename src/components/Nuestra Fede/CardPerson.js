import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function CardPerson({ nombre, desripcion, imagen, contenido, contenido2, contenido3, contenido4 }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <>
            <div class="card-person">
                <div class="image"> <img className="img-fluid" src={imagen} /> </div>
                <div class="card-info">
                    <span>{nombre}</span>
                    <p>{desripcion}</p>
                </div>

                <Button onClick={handleShow} variant="success">¡Conoce más!</Button>{' '}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{nombre}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{contenido}</Modal.Body>
                    <Modal.Body className="my-2" >{contenido2}</Modal.Body>
                    <Modal.Body className="my-2" >{contenido3}</Modal.Body>
                    <Modal.Body className="my-2" >{contenido4}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={handleClose}>
                            Cerrar
                        </Button>

                    </Modal.Footer>
                </Modal>



                <div
                    className="modal show"
                    style={{ display: 'block', position: 'initial' }}
                >

                </div>


            </div>




        </>

    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(CardPerson)