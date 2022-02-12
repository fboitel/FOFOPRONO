import React, { Component } from "react";
import "./MiniStanding.css";
import { sortPlayers } from "../utils/standing";


class MiniStanding extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        sortPlayers(this.props.players);
        if (JSON.parse(this.props.token).apiResponse !== "CONNECTE(E)"){
            return (
                <div>
                    <div><center>
                        <h1>Connexion requise pour voir le classement</h1>
                    </center></div>
                </div>
            );
        }
        return (

            <div>
                <div className="stand-main">
                    <table className="stand-table">
                        <thead className="stand-head">
                            <tr>
                                <td className="td-corner1"></td>
                                <td className="td-player1">JOUEUR</td>

                                <td className="td-score1">PTS</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.players.map((item, index) => (
                                <tr>
                                    <td className="td-number1">{index+1}.</td>
                                    <td className="td-player1">{item.pseudo}</td>

                                    <td className="td-score1">{item.points}</td>
                                </tr>
                                ))}
                           
                        </tbody>
                    </table>
                </div>
            </div>
            
        );
    }
}

export default MiniStanding;