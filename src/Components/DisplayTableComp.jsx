import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Firebase from "firebase";
import config from "./../js/config";

function validateName (name){
    return {
        name: name.length <= 1
    }
};

export class DisplayTableComp extends Component {
    constructor(props) {
        super(props);
        Firebase.initializeApp(config);
    
        this.state = {
          setTeamValue: '',
          name: '',
          developers: []
        };
      }
    
      componentDidMount() {
        this.getUserData();
        this.removeAllData();
      }
    
      componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
          this.writeUserData();
          this.gameStatus();
        }
      }
    
      writeUserData = () => {
        Firebase.database()
          .ref("/")
          .set(this.state);
        console.log("DATA SAVED");
      };
    
      getUserData = () => {
        let ref = Firebase.database().ref("/");
        ref.on("value", snapshot => {
          const state = snapshot.val();
          this.setState(state);
        });
      };
    
      
      
    
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
    
      gameStatus = developers =>{
        let gameScheduledYes = this.gameScheduledNotification;
        let gameScheduledNo = this.gameNotScheduledNotification;
        let todayDay = new Date().getDay();
        const isDayEnabled = (todayDay === 0 || todayDay === 2 || todayDay === 4 || todayDay === 6);
        if(isDayEnabled === true){
          gameScheduledNo();
        }else{
          gameScheduledYes();
        }
    
        let gameYes = this.gameOnNotification;
        let gameNo = this.waitingNotification;
        let playerCountStatus = this.state.developers;
        if(isDayEnabled === false && playerCountStatus.length >= 8){
          gameYes();
        }else{
          gameNo();
        }
      };
    
      handleNameChange = event => {
        this.setState({ 
          name: event.target.value 
        });
      };
      handleTeamValue = event =>{
        this.setState({
          setTeamValue: event.target.value
        });
      };
      handleSubmit = event => {
        event.preventDefault();
        let name = this.refs.name.value;
        let teamColor = this.state.setTeamValue;
        let uid = this.refs.uid.value;
    
        if (uid && name && teamColor) {
          const { developers } = this.state;
          const devIndex = developers.findIndex(data => {
            return data.uid === uid;
          });
          developers[devIndex].name = name;
          developers[devIndex].teamColor = teamColor;
          this.setState({ developers });
        } else if (name && teamColor) {
          const uid = new Date().getTime().toString();
          const { developers } = this.state;
          developers.push({ uid, name, teamColor });
          this.setState({ developers });
        }
        //this.refs.name.value = "";
        this.setState({ 
          name: '' 
        });
        this.refs.uid.value = "";
      };
    
      
    
      removeData = developer => {
        const { developers } = this.state;
        const newState = developers.filter(data => {
          return data.uid !== developer.uid;
        });
        this.setState({ developers: newState });
      };
      removeAllData = () =>{    
        let stopTime = new Date().getHours();
        if(stopTime >= 14){
          Firebase.database().ref("/").set(null);
          Firebase.database().ref("/").set(this.state);
          this.setState({
            setTeamValue: '',
            name: '',
            developers: []
          });
        }else{
          console.log("time is not 2pm yet");
        }
      };
  render() {
    const { developers } = this.state;
    const { name } = this.state;
    const isEnabled = name.length > 0;
    let todayDay = new Date().getDay();
    const isDayEnabled = (todayDay === 0 || todayDay === 2 || todayDay === 4 || todayDay === 6);

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
                                className={errors.name ? "form-control error" : "form-control"}
                                placeholder="First Name"
                                pattern="[a-zA-Z]+"
                                value={this.state.name}
                                onChange={this.handleNameChange}
                                disabled={isDayEnabled}
                                autoFocus
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Team<br/>
                                    <input type="radio" name="teamColor" required className="teamColorRadio"
                                    value="Any" checked={this.state.setTeamValue === "Any"}
                                    onChange={this.handleTeamValue} disabled={isDayEnabled}/>Any
                                    <input type="radio" name="teamColor" className="teamColorRadio"
                                    value="White" checked={this.state.setTeamValue === "White"}
                                    onChange={this.handleTeamValue} disabled={isDayEnabled}/>White
                                    <input type="radio" name="teamColor" className="teamColorRadio"
                                    value="Dark" checked={this.state.setTeamValue === "Dark"}
                                    onChange={this.handleTeamValue} disabled={isDayEnabled}/>Dark
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
                            {developers.map(developer => (                 
                            <tr key={developer.uid}>
                                <td>{developer.name}</td>
                                <td>{developer.teamColor}</td>
                                <td>
                                <button
                                    onClick={() => this.removeData(developer)}
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
