import React, { Component } from "react";
import logo from "./logo.png";
import "./Match.css";
import { Link } from "react-router-dom";
import { getFullMonth, normalizeValue, normalizeDay, normalizeType } from "../utils/date";

class Match extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let date = new Date(this.props.data.date);
        console.log(date.getFullYear());
        return (
            <div className="Match">
                <div className="date33">
                {normalizeDay(date.getDay())} {date.getDate()} {getFullMonth(date.getMonth())} -  {normalizeValue(date.getHours())}
                H
                {normalizeValue(date.getMinutes())}<br></br>
                {normalizeType(this.props.data.type)}
                </div>
                <div className="left">{this.props.data.homeTeam}</div>
                    <input value={this.props.data.homeScore} disabled="yes"/>
                -
                    <input value={this.props.data.awayScore} disabled="yes"/>
                <div className="right">{this.props.data.awayTeam}</div>
            </div>
        );
    }
}

export default Match;