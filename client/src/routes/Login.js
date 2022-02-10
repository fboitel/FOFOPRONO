import React, { Component } from "react";
import "./User.css";
import { Link } from "react-router-dom";
import FormData from "form-data";
import Header from "../components/Header";
import Inscription from "../components/Inscription";
import Connexion from "../components/Connexion";


class Login extends Component {
    render() {
        if (this.props.apiResponse == "CONNECTE(E)"){
            return (
                <h1>ERROR 404</h1>
            );
        }
        return (
            <div>
                <div>
                    <Header token={JSON.stringify(this.props)}/>
                </div>
                <div id="forms">
                    <div id="gauche"> <Inscription/> </div>
                    <span id="milieu" class="vertical"></span>
                    <div id="droite"> <Connexion /> </div>
                </div>
            </div>
        );
    }
}

export default Login;