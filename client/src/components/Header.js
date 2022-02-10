import React from "react";
import logo from "./logo.png";
import "./Header.css";

function signout(){
        sessionStorage.setItem('token', JSON.stringify({apiResponse: "HELL NO"}));

}


function Header(props) {

    console.log("IN HEADER: " + JSON.parse(props.token).apiResponse);
    console.log("USER: " + JSON.parse(props.token).pseudo);
    if (JSON.parse(props.token).apiResponse != "CONNECTE(E)")
        return (
            <div className="header">
                <a className="logo" href="/"><img src={logo} className="App-logo" alt="logo" /></a>
                <a href="/Prono">PRONOSTIQUES</a>
                <a href="/Standing">CLASSEMENT</a>
                <div className="header-right">
                    <a href="/Login">Connexion/Inscription</a>
                </div>
            </div> 
        );
    else 
        return (
            <div className="header">
                <a className="logo" href="/"><img src={logo} className="App-logo" alt="logo" /></a>
                <a href="/Prono">PRONOSTIQUES</a>
                <a href="/Standing">CLASSEMENT</a>
                <div className="header-right">
                    <a href="/" onClick={signout}>Déconnexion</a>
                </div>
            </div> 
    );  
}

export default Header;