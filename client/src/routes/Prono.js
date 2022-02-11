import React, { Component } from "react";
import logo from "./logo.svg";
import "./Prono.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Match from "../components/Match";

class Prono extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {

        if (this.props.apiResponse != "CONNECTE(E)"){
            return (
                <div>
                    <div className>
                        <Header token={JSON.stringify(this.props)}/>
                    </div>
                    <div className="required-con"><center>
                        <h1>Connexion requise</h1>
                        <a href="/login"><button className="AnimatedForm__submitButton m-full-width">Connexion</button></a>
                    </center></div>
                </div>
            );
        }

        return (
            <div>
                <div>
                    <Header token={JSON.stringify(this.props)}/>
                </div>
                <div className="App-content">
                    <p> PRONOSTIQUES </p>
                    {/* <p className="App-intro">{this.state.apiResponse}</p> */}
                    <p></p>
                </div>
            </div>
           
        );
    }
}

export default Prono;