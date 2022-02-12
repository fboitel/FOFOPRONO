import React, { Component } from "react";
import logo from "./logo.svg";
import "./Prono.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { getFullMonth, normalizeValue, isPassed } from "../utils/date";

class Prono extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            apiMatchResponse: [],
            apiPronoResponse: "",
            userPseudo: this.props.pseudo,
            filledMatch: [],
            homeScore: [],
            awayScore: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    callMatchAPI() {
        fetch("http://localhost:9000/match")
            .then(res => res.json())
            .then(res => this.setState({ apiMatchResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callMatchAPI();
        setTimeout(() => this.callPronoAPI(), 500);
    }

    handleChange(key, i) {
        return function (e) {
            var state = this.state;
            state[key][i] = e.target.value;
            state['filledMatch'][i] = state['apiMatchResponse'][i];
            this.setState(state);
        }.bind(this);
    }

    handleSubmit(event) {
        console.log("BEFORE SUBMIT");
        console.log(this.state);
        this.callPronoAPI();
        event.preventDefault();
    }

    callPronoAPI() {
      
        //console.log(data);
        const requestOptions = {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
               },
             body: JSON.stringify(this.state)
         };
        console.log(JSON.stringify("AVANT FETCH:" + JSON.stringify(this.state)));
        fetch("http://localhost:9000/prono", requestOptions)
             .then(res => res.json())
             .then((res) => {this.setState({homeScore: res.homeScore, awayScore: res.awayScore})})
             .catch(err => err);    
        console.log("APRES FETCH:");
        setTimeout(() => console.log(this.state), 1000);
        
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


        this.state.apiMatchResponse.map((item) => {
            
            let date = new Date(item.date);
            item.date = date;
        });

        console.log(this.state);

        return (
            <form onSubmit={this.handleSubmit} name="MyForm" id="MyForm">
                <div>
                    <div>
                        <Header token={JSON.stringify(this.props)}/>
                    </div>
                    <div className="accueil">
                        <p className="titile"><center>PRONOSTIQUES</center></p>
                        <div className="div-matchs">
                            <div>
                                {this.state.apiMatchResponse.map((item, index) => (
                                <div>
                                    <div className="Match">
                                        <div className="date">
                                        {item.date.getDay()}  {getFullMonth(item.date.getMonth())} -  {normalizeValue(item.date.getHours())}
                                        H
                                        {normalizeValue(item.date.getMinutes())}</div>
                                        <div className="left">{item.home_team}</div>
                                            <input disabled={isPassed(item.date)} value={this.state.homeScore[index]} onChange={this.handleChange('homeScore', index)}/>
                                        -
                                            <input disabled={isPassed(item.date)} value={this.state.awayScore[index]} onChange={this.handleChange('awayScore', index)}/>
                                        <div className="right">{item.away_team}</div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <button className="AnimatedForm__submitButton" type="submit">Soumettre</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default Prono;