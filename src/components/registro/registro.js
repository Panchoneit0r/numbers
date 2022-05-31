import React, { Component } from 'react';
import './resgitro.css';

 class Registro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            apellido: "",
            email: "",
            numero: 0
        }
    }
    
    handleOnChange = e => {
        const {target: {value, name}} = e;

        const val = name === 'numero' ? Number(value) : (value);

        this.setState({
            [name]: val
        });
        
    }

  render() {
    const { nombre, apellido, email, numero } = this.state;
    return (
        <div className="registro">
        <form>
            <label onChange={this.handleOnChange}>
                Nombre:
                <input type="text" name ="nombre" value={nombre}/>
                Apellido:
                <input type="text" name ="apellido" value={apellido}/>
                <br/>
                Email:
                <input type="text" name ="email" value={email}/>
                Telefono:               
                <input type="text name" name ="numero" value={numero}/>
            </label>
        </form>
        <h1>Nombre: {nombre}</h1>
        <h1>Apellido: {apellido}</h1>
        <h1>Email: {email}</h1>
        <h1>Telefono: {numero}</h1>
        </div>
    )
  }
}

export default Registro;