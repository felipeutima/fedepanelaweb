import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function CardEvents({ titulo, cuerpo, fecha, url }) {
    return (
        <>
            <div class="card-events mt-4">
                <div class="header">
                    <div>
                        <a class="title" target="blank" href={url}>
                           {titulo}
                                                   </a>
                        
                    </div>
                    
                </div>
                <p class="description">
                    {cuerpo}
                </p>
                <dl class="post-info">
                    <div class="cr">
                        
                        <dd class="dd">{fecha}</dd>
                    </div>
             
                </dl>
            </div>




        </>

    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(CardEvents)