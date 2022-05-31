import React, { Component } from 'react';
import './Numbers.css';

class Numbers extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            numbers: '',
            results: []
        }
    }

    handleNumberChange = e => {
        const {target: {value}} = e;

        const numbers = Array.from(value);
        const result = numbers.reduce((a, b) => Number(a) + Number(b), 0);

        this.setState({
            numbers: value,
            results: [...this.state.results, result]
        })
    }
    
    render() {
        const {results, numbers} = this.state;

        return (
            <div className="Numbers">
                <input 
                    type = "number"
                    value = {numbers}
                    onChange = {this.handleNumberChange}
                />
                
                <ul>
                    {
                        results.map((result, i) => (
                            <li key = {i}>{result}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default Numbers;