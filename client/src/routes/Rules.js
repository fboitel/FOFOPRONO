import React, { Component } from "react";
import "./Rules.css";
import Header from "../components/Header"
import { sortPlayers } from "../utils/standing";


class Rules extends Component {

    constructor(props) {
        super(props);
        this.state = {apiResponse: []};
    }

    render() {
        
        return (

            <div>
                <div className>
                    <Header token={JSON.stringify(this.props)}/>
                </div>
                <div className="main-rules">
                    <p className="ttile"> RÈGLES DU JEU </p>
                    <p className="bzeg">Le système de points attribués fonctionne comme suit :</p>
                    <p className="bzeg33">➔ Pour les <b>matchs de poules</b>, un <b>résultat correct </b>(Vainqueur du match trouvé uniquement) octroie <b>8 points</b>, tandis qu'un <b>score juste octroie 16 points</b></p>
                    <p className="bzeg33">➔ Pour les <b>huitièmes de finale</b>, un <b>résulat correct octroie 12 points</b>, tandis qu'un <b>score juste octroie 24 points</b></p>
                    <p className="bzeg33">➔ Pour les <b>quarts de finale</b>, un <b>résultat correct octroie 16 points</b>, tandis qu'un <b>score juste octroie 32 points</b></p>
                    <p className="bzeg33">➔ Pour les <b>demi-finales</b>, un <b>résultat correct octroie 20 points</b>, tandis qu'un <b>score juste octroie 40 points</b></p>
                    <p className="bzeg33">➔ Pour la <b>finale</b>, un <b>résultat correct octroie 30 points</b>, tandis qu'un <b>score juste octroie 60 points</b></p>
                    <p className="bzeg"><b>Pour chaque match, le nombre de points attribués est ensuite multiplié par la côte du résultat match</b> (i.e. le nombre de points octoyé est pondéré par la difficulté du résultat trouvé).</p>  
                </div>
            </div>
            
        );
    }
}

export default Rules;