import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spotify } from "react-bootstrap-icons";
import portada from "assets/img/Cap7.png"
import portada2 from "assets/img/Cap8.png"
import portada3 from "assets/img/Cap9.png"


function CardSpotify({ fecha, titulo }) {
    return (
        <>
            <div class="main ">
                <div class="currentplaying">
                    <Spotify color="white" size="8%"/>
                    <p class="mx-4 fw-bold text-white">La vida sabe a panela radio</p>
                </div>
                <a className="text-white loader" style={{textDecoration:"none"}} href="https://open.spotify.com/episode/1nFvb5IMovb1BOcNNTooK7" class="loader mt-2 ">
                    <div class="song">
                        <p class="name">Capítulo 10- La ordenanza 365</p>
                        
                    </div>
                    <div class="albumcover"><img className="img-fluid" src={portada3}/></div>
                    <div class="loading">
                        <div class="load"></div>
                        <div class="load"></div>
                        <div class="load"></div>
                        <div class="load"></div>
                    </div>
                </a>
                <a className="text-white loader" style={{textDecoration:"none"}} href="https://open.spotify.com/episode/4Hp0aSt97O6z6JRd9VarB6" class="loader mt-2 ">
                    <div class="song">
                        <p class="name">Capítulo 9- Dulce exportación</p>
                        
                    </div>
                    <div class="albumcover"><img className="img-fluid" src={portada2}/></div>
                    <div class="loading">
                        <div class="load"></div>
                        <div class="load"></div>
                        <div class="load"></div>
                        <div class="load"></div>
                    </div>
                </a>
                <a className="text-white loader" style={{textDecoration:"none"}} href="https://open.spotify.com/episode/3hVyfxTHzAPTG3tRXNX2Sg" class="loader mt-2 ">
                    <div class="song">
                        <p class="name">Capítulo 8- Iniciativa "Alcaldes Paneleros"</p>
                        
                    </div>
                    <div class="albumcover"><img className="img-fluid" src={portada}/></div>
                    <div class="loading">
                        <div class="load"></div>
                        <div class="load"></div>
                        <div class="load"></div>
                        <div class="load"></div>
                    </div>
                </a>
           
  
            </div>

        </>

    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(CardSpotify)