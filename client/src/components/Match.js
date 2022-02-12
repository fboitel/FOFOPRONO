import React, { Component } from "react";
import logo from "./logo.png";
import "./Match.css";
import { Link } from "react-router-dom";
import { getFullMonth, normalizeValue } from "../utils/date";

class Match extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let date = new Date(this.props.data.date);
        console.log(date.getFullYear());
        return (
            <div className="Match">
                <div className="date">
                {date.getDay()}  {getFullMonth(date.getMonth())} -  {normalizeValue(date.getHours())}
                H
                {normalizeValue(date.getMinutes())}</div>
                <div className="left">{this.props.data.home_team}</div>
                    <input value={this.props.data.home_score} disabled="yes"/>
                -
                    <input value={this.props.data.away_score} disabled="yes"/>
                <div className="right">{this.props.data.away_team}</div>
            </div>
        );
    }
}

export default Match;