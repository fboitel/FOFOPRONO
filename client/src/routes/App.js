import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./App.css"
import Match from "../components/Match";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: [] };
    }

    callAPI() {
        fetch("http://localhost:9000/match")
            .then(res => res.json())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }


    render() {
        return (
            <div>
                <div>
                    <Header token={JSON.stringify(this.props)}/>
                </div>
                <div className="accueil">
                    <div className="div-matchs">
                        <div>
                            {this.state.apiResponse.map((item) => (
                            <div><Match data={item}/></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;