import React, { Component } from "react";
import logo from "./logo.png";
import "./Match.css";
import { Link } from "react-router-dom";
import { getFullMonth, normalizeValue } from "../utils/date";

class MatchAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            apiResponse: "",
            matchId: this.props.data._id,
            homeScore: "",
            awayScore: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        fetch("http://localhost:9000/matchAdmin", requestOptions)
             .then(res => res.text())
             .then((res) => {this.setState({apiResponse: res})})
             .catch(err => err);    
        console.log("APRES FETCH:");
        setTimeout(() => console.log(this.state), 1000);
        
     }


     handleChange(key) {
        return function (e) {
            var state = this.state;
            state[key] = e.target.value;
            this.setState(state);
        }.bind(this);
    }


     handleSubmit(event) {
        console.log("BEFORE SUBMIT");
        console.log(this.state);
        this.callPronoAPI();
        event.preventDefault();
    }


    render() {
        let date = new Date(this.props.data.date);
        console.log(date.getFullYear());
        return (
            <form onSubmit={this.handleSubmit} name="MyForm" id="MyForm">
                <div className="Match">
                    <div className="date">
                    {date.getDay()}  {getFullMonth(date.getMonth())} -  {normalizeValue(date.getHours())}
                    H
                    {normalizeValue(date.getMinutes())}</div>
                    <div className="left">{this.props.data.homeTeam}</div>
                        <input value={this.props.data.homeScore} onChange={this.handleChange('homeScore')} disabled={this.props.data.homeScore}/>
                    -
                        <input value={this.props.data.awayScore} onChange={this.handleChange('awayScore')} disabled={this.props.data.awayScore}/>
                    <div className="right">{this.props.data.awayTeam}</div>
                    <button className="AnisubmitButton" type="submit">Valider</button>
                    <div className="date-no-date">{this.state.apiResponse}</div>
                </div>
                
                
            </form>
        );
    }
}

export default MatchAdmin;