import React from "react";
import './cabecalho.css'
import logo from './logo facens.png'

const Cabecalho = () => {
    return (
        <header className="mainHeader">
            <img className="logoImage" src={logo} alt="img_logo" />
            <div className="buttonContainer">

            </div>
        </header>

    )
}
export default Cabecalho;