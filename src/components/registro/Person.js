import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Person.css';
import './Popup.css';


 class Conctato extends Component {
    constructor(){
        super();

        //initialState
        this.state = {
            name: '',
            last: '',
            email: '',
            phone: '',
            mesagge: '',
            errors: {
                name: false,
                last: false
            },
            open: false,
        };
    }

    handleOnChange = e => {
        const {target: {value,name}} = e;
        
        this.setState({
            [name]: value
        })
        console.log(value) 
    }

    handleOnSubmit = e => {
        e.preventDefault();
        
        const{name,last,email,phone,mesagge} = this.state;
        this.setState({
            
        })

        this.setState({
            errors:{
                name: name.trim() === '',
                last: last.trim() === '',
            }
        })

        if(name && last)
        {
            const data = {
                name, 
                last, 
                email, 
                phone,
                mesagge
            };

            this.setState({
                open: true
            })
            console.log('Data: ', data);
        }
        
        setTimeout(() => {
            this.setState({
                errors:{
                    name: false,
                    last: false,
                },
            }) 
        }, 3000)

    }

  render() {
    return (
        <div className="Person">
            <h1>Contacto</h1>
            <Popup open={this.state.open} modal nested>
            {close => (
                <div className="modal">
                <button className="close" onClick={() => {
                                    this.setState({
                                        open: false
                                    })
                                    close();
                                }}>
                    &times;
                </button>
                    <div className="header"> <h1>Data</h1> </div>
                        <div className="content">
                            <h1>First Name: <span>{this.state.name}</span><span>{this.state.last}</span></h1>
                            <h1>Telefono: <span>{this.state.phone}</span>  </h1>
                            <h1>Email: <span>{this.state.email}</span></h1>
                            <h2>Mensaje: <span>{this.state.mesagge}</span>  </h2>
                        </div>
                    </div>
                )}
            </Popup>
            <form onSubmit={this.handleOnSubmit}>
                <label><strong>First name: </strong> 
                    <input 
                        type="text" 
                        name="name" 
                        value = {this.state.name}
                        onChange={this.handleOnChange}
                        className={
                            this.state.errors.name ? 'error': ''
                        }
                        />
                    {
                        this.state.errors.name
                        && 
                        <div className= 'errorMessage'>Required name</div>
                    } 
                </label>    
                <br/>
                <label><strong>Last name: </strong>
                    <input 
                        type="text" 
                        name="last" 
                        value = {this.state.last}
                        onChange={this.handleOnChange}
                        className={
                            this.state.errors.last ? 'error': ''
                        }
                    />
                    {
                        this.state.errors.last
                        && 
                        <div className= 'errorMessage'>Required last name</div>
                    } 
                </label>    
                <br/>
                <label> <strong>Email: </strong>
                    <input 
                        type="email" 
                        placeholder="pablo@correo.com" 
                        name="email" 
                        value = {this.state.email}
                        onChange={this.handleOnChange}
                        required
                    />
                </label>
                <br/>
                <label> <strong>Phone: </strong>
                    <input 
                        type="tel" 
                        name="phone" 
                        placeholder="+5212346789" 
                        value = {this.state.phone}
                        onChange={this.handleOnChange}
                        />
                </label>   
                <br/> 
                <label><strong>mensaje: </strong> 
                    <input 
                        type="text" 
                        name="mesagge" 
                        value = {this.state.mesagge}
                        onChange={this.handleOnChange}
                        />
                </label>    
                <br/>
                <button type='submit'>Enviar</button>
            </form>
          
        </div>
    )
  }
}

export default Conctato;