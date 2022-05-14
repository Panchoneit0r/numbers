import React, { Component } from 'react';
import './Animation.css';

 class Animation extends Component {
  constructor(props) {
      super(props);
      this.state = {
          show: false,
          gira: false,
      }
  }       

  componentDidUpdate(nextProps, newState){
      if(!newState.show){
          document.getElementById('fade').style = 'color: blue';
      }
      else {
        document.getElementById('fade').style = 'color: gray';
      }
  }

  toggleCollapse = () => {
    this.setState({
        show: !this.state.show,
        gira: !this.state.gira
    })
  }

  render() {
    return (
      <div className="Animation">
          <button onClick={this.toggleCollapse}>
              {this.state.show ? 'Collapse' : 'Expand'}
          </button>
          <div
            id="fade"
            className=
            {this.state.show? 'transition show':'transition'}
          > <p className=
          {this.state.gira? 'girado':'giradont'}>
            Este texto va a girar </p>
          </div>
      </div>
    );
  }
}

export default Animation;