import React, { Component } from "react";
import "./Standing.css";
import { Link } from "react-router-dom";
import Header from "../components/Header"


class Standing extends Component {

    monArr = {score: [3, 3, 4, 5, 6, 7]};

    constructor(props) {
        super(props);
        this.state = { apiResponse: {score:[]} };
    }

    callAPI() {
        fetch("http://localhost:9000/standing")
            .then(res => res.json())
            .then(res => this.setState({apiResponse: res}))
            .catch(err => err);
        
            
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        if (this.props.apiResponse != "CONNECTE(E)"){
            return (
                <div><center>
                    <h1>Connexion requise</h1>
                    <a href="/login"><button className="AnimatedForm__submitButton m-full-width">Connexion</button></a>
                </center></div>
            );
        }
        return (

            <body>
                <div className>
                    <Header token={JSON.stringify(this.props)}/>
                </div>
                <div className="App-content">
                    <p> CLASSEMENT </p>
                    {/* <p className="App-intro">{this.state.apiResponse}</p> */}
                    <p></p>
                    {this.state.apiResponse.score.map((item) => (
                    <p>{item}</p>
                ))}
                </div>
            </body>
            
        );
    }
}

export default Standing;