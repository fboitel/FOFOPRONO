import React, { Component } from "react";
import logo from "./logo.svg";
import "./Admin.css";
import Header from "../components/Header";
import { getFullMonth, normalizeValue, isPassed } from "../utils/date";
import MatchAdmin from "../components/MatchAdmin";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            apiMatchResponse: [],
        };
    }

    callMatchAPI() {
        fetch("http://localhost:9000/match")
            .then(res => res.json())
            .then(res => this.setState({ apiMatchResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callMatchAPI();
    }   

    render() {

        if (this.props.apiResponse != "CONNECTE(E)" || this.props.pseudo != "root"){
            return (
                <h1>ERROR 404</h1>
            );
        }


        this.state.apiMatchResponse.map((item) => {
            
            let date = new Date(item.date);
            item.date = date;
        });

        console.log("PROOROR");
        console.log(this.state);

        return (
            <div>
                {this.state.apiMatchResponse.map((item) => (
                <div><MatchAdmin data={item}/></div>
                ))}
            </div>
        );
    }
}

export default Admin;