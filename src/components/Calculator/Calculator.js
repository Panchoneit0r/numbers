import React, { Component } from 'react';
import './Calculator.css';

 class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number1: 0,
            number2: 0,
            resultado: 0,
            operacion: ''
        }
    }

    handleOnClick = () =>{ 
        const num1 = this.state.number1;
        const num2 = this.state.number2;
        const operacion = this.state.operacion;
        let res;

        if(operacion === '+'){
            res = num1 + num2;
        }

        else if(operacion === '-'){
            res = num1 - num2;
        }

        else if(operacion === '*'){
            res = num1 * num2;
        }
        else if(operacion === '/'){
            res = num1 / num2;
        }
    
        this.setState({
            resultado: res.toFixed(2)
        })
    }

    handleNumberChange1 = e =>{
        const {target: {value, name, type}} = e;

        const val = type === 'text' ? Number(value) : (value);

        this.setState({
            [name]: val
        });
    }


    procedimiento = ()=>{

    }

    render() {
        const { number1, number2,resultado, operacion } = this.state;
        return (
            <div className="calculator">
                <div className="inputs">
                <input 
                    type = "text"
                    name = "number1"
                    value = {number1}
                    onChange = {this.handleNumberChange1}
                />

                <form>
                    <label>
                        <select name = "operacion" value ={operacion} onChange={this.handleNumberChange1}>
                            <option value = "+"> + </option>
                            <option value = "-"> - </option>
                            <option value = "*"> x </option>
                            <option value = "/"> / </option>
                        </select>
                    </label>
                </form>

                <input 
                    type = "text"
                    name = "number2"
                    value = {number2}
                    onChange = {this.handleNumberChange1}
                />
                </div>
                <p>Resultado: {resultado}</p>
                <button onClick={this.handleOnClick}>Calcular</button>
            </div>
        )
    }
}

export default Calculator;
