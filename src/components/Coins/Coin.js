import React, { Component } from 'react';
import "./Coins.css";

 class Coin extends Component {
constructor(){
    super()
    this.state = {
        dolares: 0,
        coins: 0,
        message: "",
        type: "",

    }
}

handleOnChange = e => {
    //const value = e.target.value
    const {target: {value}} = e;

    console.log(value);

    //Evito que la página se recargue presionando enter
    if(e.keyCode === 13) {
        e.preventDefault();
    }
        this.setState({
            dolares: value
        });
}   

handleOnClick = () =>{
    const dolar = this.state.dolares;
    let texto = this.state.message;
    let clase = this.state.type;

    let coin = dolar/10;
    
    if (dolar%10 === 0 && dolar > 0){
        texto = "";
        clase = "";
    }
    else{
        coin = 0;
        texto = "Ese no es un numero valido";
        clase = "Error";

    }

    this.setState({
        coins: coin,
        message: texto,
        type: clase
    })

}


  render() {
    return (
       
      <div className="Coin">
        <h1>Compra Crypto Coins</h1>
        <p/>
        <h2>Dolares a invertir</h2>
        <input
            type="number"
            value = {this.state.dolares}
            onChange = {this.handleOnChange}
        />
        <button onClick={this.handleOnClick}>Calcular</button>
        <h2>Precio de Cripto moneda: $10</h2>
        <h2>Puedes comprar: {this.state.coins} Crypto coins </h2>
        <h2 className={`type ${this.state.type}`}>{this.state.message} </h2>
      </div>
      
    )
  }
}

export default Coin;