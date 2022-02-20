import React, { Component } from "react";
import Header from "../components/Header";
import "./App.css"
import Match from "../components/Match";
import MiniStanding from "../components/MiniStanding";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            apiMatchResponse: [],
            apiStandingResponse: [] 
        };
    }

    callMatchAPI() {
        fetch("http://localhost:9000/match")
            .then(res => res.json())
            .then(res => this.setState({ apiMatchResponse: res }))
            .catch(err => err);
    }

    callStandingAPI() {
        fetch("http://localhost:9000/standing")
            .then(res => res.json())
            .then(res => this.setState({ apiStandingResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callMatchAPI();
        this.callStandingAPI();
    }


    render() {

        
        return (
            <div>
                <div>
                    <Header token={JSON.stringify(this.props)}/>
                </div>
                <div id="accueil">
                    <div id="div-matchs">
                        <div className="title">MATCHS</div>
                        <div>
                            {this.state.apiMatchResponse.map((item) => (
                            <div><Match data={item}/></div>
                            ))}
                        </div>
                    </div>
                    <span id="trait" className="vertical1"></span>
                    <div id="div-standing">
                        <div className="title">CLASSEMENT</div>
                        <MiniStanding token={JSON.stringify(this.props)} players={this.state.apiStandingResponse}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;