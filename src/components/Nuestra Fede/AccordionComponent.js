import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';

function AccordionComponent({ titulo, cuerpo }) {
    return (
        <>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{titulo}</Accordion.Header>
                    <Accordion.Body>
                        {cuerpo}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


        </>

    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(cordionComponent)