import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spotify } from "react-bootstrap-icons";
import portada from "assets/img/spotify.jpg"


function CardSpotify({ fecha, titulo }) {
    return (
        <>
            <div class="main ">
                <div class="currentplaying">
                    <Spotify color="white" size="8%"/>
                    <p class="mx-4 fw-bold">La vida sabe a panela radio</p>
                </div>
                <div class="loader">
                    <div class="song">
                        <p class="name">Capitulo 10- La ordenanza 365</p>
                        <p class="artist">Fedepanela</p>
                    </div>
                    <div class="albumcover"><img className="img-fluid" src={portada}/></div>
                    <div class="loading">
                        <div class="load"></div>
                        <div class="load"></div>
                        <div class="load"></div>
                        <div class="load"></div>
                    </div>
                </div>
  
            </div>

        </>

    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(CardSpotify)