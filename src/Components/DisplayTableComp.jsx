import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase";
import config from "./../js/config";

function validateName (name){
    return {
        name: name.length <= 1
    }
};

export class DisplayTableComp extends Component {
    constructor() {
        super();

        firebase.initializeApp(config);
    
        this.state = {
          teamColor: '',
          name: '',
          totalPlayers: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
      handleSubmit(e) {
        e.preventDefault();
        const playerCount = firebase.database().ref('players');
        const playerDetails = {
          teamColordb: this.state.teamColor,
          namedb: this.state.name
        }
        playerCount.push(playerDetails);
        this.setState({
          teamColor: '',
          name: ''
        });
        
        this.gameStatus();
      }
      componentDidUpdate( prevState) {
        console.log(this.state);
        if (prevState !== this.state) {
          this.gameStatus();
        }
      }
      componentDidMount() {
        const playerCount = firebase.database().ref('players');
        playerCount.on('value', (snapshot) => {
          let totalPlayers = snapshot.val();
          let updatedPlayersList = [];
          for (let playerDetails in totalPlayers) {
            updatedPlayersList.push({
              id: playerDetails,
              teamColordb: totalPlayers[playerDetails].teamColordb,
              namedb: totalPlayers[playerDetails].namedb
            });
          }
          this.setState({
            totalPlayers: updatedPlayersList
          });
        });
      }
      removeItem(thisPlayer) {
        const playerCount = firebase.database().ref(`/players/${thisPlayer}`);
        playerCount.remove();
        console.log("player removed");
      }
      
    
    
      getTodaysDate = () =>{
        let todayDate = new Date();
        let formatDate = (todayDate.getMonth() + 1) + '/' + todayDate.getDate() + '/' + todayDate.getFullYear();
        return formatDate ;
      };
      gameOnNotification = () =>{
        ReactDOM.render(
          <div dangerouslySetInnerHTML={{ __html: "Game On!" }} />,
          document.getElementById("setGameStatus")
        );
      };
      waitingNotification = () =>{
        ReactDOM.render(
          <div dangerouslySetInnerHTML={{ __html: "Waiting for players.." }} />,
          document.getElementById("setGameStatus")
        );
      };
      gameScheduledNotification = () =>{
        ReactDOM.render(
          <div dangerouslySetInnerHTML={{ __html: "Join the game" }} />,
          document.getElementById("gameDayStatus")
        );
      };
      gameNotScheduledNotification = () =>{
        ReactDOM.render(
          <div dangerouslySetInnerHTML={{ __html: "No game scheduled today.." }} />,
          document.getElementById("gameDayStatus")
        );
      };
    
      gameStatus = () =>{
        let gameScheduledYes = this.gameScheduledNotification;
        let gameScheduledNo = this.gameNotScheduledNotification;
        let todayDay = new Date().getDay();
        const isDayEnabled = (todayDay === 0 || todayDay === 2 || todayDay === 4 || todayDay === 5);
        if(isDayEnabled === true){
          gameScheduledNo();
        }else{
          gameScheduledYes();
        }
    
        let gameYes = this.gameOnNotification;
        let gameNo = this.waitingNotification;
        let playerCountStatus = this.state.totalPlayers;
        if(isDayEnabled === false && playerCountStatus.length >= 8){
          gameYes();
        }else{
          gameNo();
        }
      }; 
      
  render() {
    const { name } = this.state;
    const isEnabled = name.length > 0;
    let todayDay = new Date().getDay();
    const isDayEnabled = (todayDay === 0 || todayDay === 2 || todayDay === 4 || todayDay === 5);

    const errors = validateName(this.state.name);
    return (
        <div className="container bodyContent">
            <div className="row">
                <div className="col-xl-12">
                    <h1>Soccer Game Day - <span id="setDate">{this.getTodaysDate()}</span></h1>
                    <h2 id="setGameStatus">Players Count Status</h2>
                </div>
            </div>          
            <div className="row">
                <div className="col-xl-12">
                    <h3 id="gameDayStatus">Game Schedule Status</h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <input type="hidden" ref="uid" />
                            <div className="form-group col-md-6">
                                <label htmlFor="playerName">First Name</label>
                                <input
                                id="playerName"
                                type="text"
                                ref="name"
                                name="name"
                                className={errors.name ? "form-control error" : "form-control"}
                                placeholder="First Name"
                                pattern="[a-zA-Z]+"
                                value={this.state.name}
                                onChange={this.handleChange}
                                disabled={isDayEnabled}
                                autoFocus
                                autoComplete="off"
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Team<br/>
                                    <input type="radio" name="teamColor" required className="teamColorRadio"
                                    value="Any" checked={this.state.teamColor === "Any"}
                                    onChange={this.handleChange} disabled={isDayEnabled}/>Any
                                    <input type="radio" name="teamColor" className="teamColorRadio"
                                    value="White" checked={this.state.teamColor === "White"}
                                    onChange={this.handleChange} disabled={isDayEnabled}/>White
                                    <input type="radio" name="teamColor" className="teamColorRadio"
                                    value="Dark" checked={this.state.teamColor === "Dark"}
                                    onChange={this.handleChange} disabled={isDayEnabled}/>Dark
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={!isEnabled}>
                            Save
                        </button>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <table className="table-striped table-bordered playersList">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Team</th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.totalPlayers.map(playerDetails => (                 
                            <tr key={playerDetails.id}>
                                <td>{playerDetails.namedb}</td>
                                <td>{playerDetails.teamColordb}</td>
                                <td>
                                <button
                                    onClick={() => this.removeItem(playerDetails.id)}
                                    className="btn btn-link"
                                    >
                                    Delete
                                </button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>              
                </div>
            </div>
        </div>
    )
  }
}

export default DisplayTableComp;
