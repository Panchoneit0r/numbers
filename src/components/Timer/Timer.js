import React, { Component } from 'react';
import './Timer.css'

class Timer extends Component {
  
    constructor() {
        super();

        this.state ={
            alert:{
                type:'',
                message:'',
            },
            time: 0,
        };

        this.times = {
            defaultTime: 1500, //25min
            shortBreak: 300, //5min
            longBreak: 900, //15min
        }
    }

    componentDidMount(){
        //Establece tiempo por defecto cuando el componente sea montado
        this.setDefaultTime()
    }

    setDefaultTime(){
        this.setState({
            time: this.times.defaultTime
        })
    }

    //Butons
    setTimeForWord = ()=>{
        this.setState({
            alert:{
                type: 'work',
                message: 'Chambea'
            }
        })    

        this.setTime(this.times.defaultTime);
    }
    
    setTimeForShort = ()=>{
        this.setState({
            alert:{
                type: 'shortBreak',
                message: 'toma tu descansito'
            }
        })    
        this.setTime(this.times.shortBreak);
    }

    setTimeForLong = ()=>{
        this.setState({
            alert:{
                type: 'longBreak',
                message: 'toma tu descansote'
            }
        })   
        this.setTime(this.times.longBreak); 
    }

    setTime =(newTime) =>{
        this.restartInterval();
               this.setState({
            time: newTime,
        })
    }

    countDown = ( )=>{
        if(this.state.time === 0){
            this.setState({
                alert: {
                    type: 'Beep',
                    message: 'Beeeeeeeeeeep',
                }
            })
        }
        else{
            this.setState({
                time : this.state.time -1
            });
        }
    }

    restartInterval = () =>{
        clearInterval(this.interval);
        this.interval = setInterval(this.countDown, 1000);

    }

    displayTimer(Time) {
        let minute = Math.floor((Time / 60) % 60);
        minute = (minute < 10)? '0' + minute : minute;
        let second = Time % 60;
        second = (second < 10)? '0' + second : second;
        return `${minute}:${second}` 

    
    }
    
    render() {

        const {alert: {message, type}, time} = this.state;

        return (
        <div className="Pomodoro">
            <div className={`alert ${type}`}>
                {message}
            </div>

            <div className="timer">
                {this.displayTimer(time)}
            </div>

            <div className="types">
                <button className="start"
                        onClick= {this.setTimeForWord}
                >
                    Comenzar a chambiar
                </button> 
                <button className="short"
                        onClick= {this.setTimeForShort}
                >
                    Descansito
                </button>      
                <button className="long"
                        onClick= {this.setTimeForLong}
                >
                    Descansote
                </button>     
            </div>
        </div>
        )
    }
}

export default Timer;