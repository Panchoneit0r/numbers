import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import saul from '../../shared/images/saul.jpg';
import './portafolio.css'

 class Portafolio extends Component {
  render() {
    return (
      <div className="portafolio" >
        <h1>Portafolio</h1> 
    <div className="cartas">  
    <div className="card">
        <img src={saul} alt="logo"/>
        <div className="cont">
         <h2>Animation</h2>   
         <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <Link to = {"/portafolio/animation"}>go to</Link>
        </div>
    </div>
    <div className="card">
        <img src={saul} alt="logo"/>
        <div className="cont">
         <h2>numbers</h2>   
         <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <Link to = {"/portafolio/numbers"}>go to</Link>
        </div>
    </div>
    <div className="card">
        <img src={saul} alt="logo"/>
        <div className="cont">
         <h2>calculator</h2>   
         <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <Link to = {"/portafolio/calculator"}>go to</Link>
        </div>
    </div>
    <div className="card">
        <img src={saul} alt="logo"/>
        <div className="cont">
         <h2>timer</h2>   
         <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <Link to = {"/portafolio/timer"}>go to</Link>
        </div>
    </div>
    <div className="card">
        <img src={saul} alt="logo"/>
        <div className="cont">
         <h2>crypto</h2>   
         <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <Link to = {"/portafolio/crypto"}>go to</Link>
        </div>
    </div>
    <div className="card">
        <img src={saul} alt="logo"/>
        <div className="cont">
         <h2>chart home</h2>   
         <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <Link to = {"/portafolio/charthome"}>go to</Link>
        </div>
    </div>
    <div className="card">
        <img src={saul} alt="logo"/>
        <div className="cont">
         <h2>guess my number</h2>   
         <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <Link to = {"/portafolio/guess"}>go to</Link>
        </div>
    </div>
    <div className="card">
        <img src={saul} alt="logo"/>
        <div className="cont">
         <h2>piedra papel y tijeras</h2>   
         <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <Link to = {"/portafolio/game"}>go to</Link>
        </div>
    </div>
    <div className="card">
        <img src={saul} alt="logo"/>
        <div className="cont">
         <h2>todo list</h2>   
         <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <Link to = {"/portafolio/todo"}>go to</Link>
        </div>
    </div>
    </div>  
      </div>
    )
  }
}

export default Portafolio;