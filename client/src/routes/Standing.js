import React, { Component } from "react";
import "./Standing.css";
import { Link } from "react-router-dom";
import Header from "../components/Header"
import { sortPlayers } from "../utils/standing";


class Standing extends Component {

    i = 1;

    constructor(props) {
        super(props);
        this.state = {apiResponse: []};
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
        sortPlayers(this.state.apiResponse);
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
                <div className>
                    <Header token={JSON.stringify(this.props)}/>
                </div>
                <div className="main">
                    <p className="titile"> CLASSEMENT </p>
                    <table>
                        <thead>
                            <tr>
                                <td className="td-corner"></td>
                                <td className="td-player">JOUEUR</td>

                                <td className="td-score">PTS</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.apiResponse.map((item) => (
                                <tr>
                                    <td className="td-number">{this.i++}.</td>
                                    <td className="td-player">{item.pseudo}</td>

                                    <td className="td-score">{item.points}</td>
                                </tr>
                                ))}
                           
                        </tbody>
                    </table>
                </div>
            </div>
            
        );
    }
}

export default Standing;