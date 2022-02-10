import React, { Component } from "react";
import logo from "./logo.png";
import "./Form.css";
import {setToken} from "../utils/token";

class Inscription extends Component {

    constructor(props) {
         super(props);
         this.state = { 
             apiResponse: "",
             first_name:"",
             family_name:"",
             pseudo:"",
             mdp:""
         };
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
     }
    handleChange(key) {
         return function (e) {
             var state = {};
             state[key] = e.target.value;
             this.setState(state);
         }.bind(this);
     }
    clearForm(){
         this.state = { 
             apiResponse: "",
             first_name:"",
             family_name:"",
             pseudo:"",
             mdp:""
         };
     }
     handleSubmit(event) {
        this.callAPI();
        setTimeout(() => setToken(this.state), 500);
        setTimeout( () => {
            if (this.state.apiResponse == "CONNECTE(E)"){        
                window.location.href = "/";
            }
        }, 500);
        event.preventDefault();
     }
    callAPI() {
      
        //console.log(data);
        const requestOptions = {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
               },
             body: JSON.stringify(this.state)
         };
        console.log(JSON.stringify(this.state));
        fetch("http://localhost:9000/signup", requestOptions)
             .then(res => res.text())
             .then(res => this.setState({apiResponse: res}))
             .catch(err => err);    
     }
    
    render(){
             return (
                 <form onSubmit={this.handleSubmit} name="MyForm" id="MyForm">
                         <div className="App-content">
                             <h3 className="h3-title" > Inscription </h3>
                             <input className="textInput " type="text" placeholder="Prenom" value={this.state.first_name} onChange={this.handleChange('first_name')}></input>
                             <div className="div-enter" ></div>
                             <input className="textInput " type="text" placeholder="Nom" value={this.state.family_name} onChange={this.handleChange('family_name')} ></input>
                             <div className="div-enter" ></div>
                             <input className="textInput " type="text" placeholder="Pseudonyme" value={this.state.pseudo} onChange={this.handleChange('pseudo')}></input>
                             <div className="div-enter" ></div>
                             <input className="textInput " type="password" placeholder="Mot de passe" value={this.state.mdp} onChange={this.handleChange('mdp')}></input>
                             <div className="div-enter" ></div>
                             <button class="AnimatedForm__submitButton m-full-width" type="submit">S'inscrire</button>
                             
                             <div className="div-response">{this.state.apiResponse}</div>

                         </div>
                 </form>
             );
    }
}

export default Inscription;