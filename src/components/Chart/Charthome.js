import React, {Component} from 'react';
import Chart from './Chart';

class Charthome extends Component {

    constructor(props) {
        super(props);
        this.state = {chartType : 'line'};

        this.columns = [
            ['BTC', 3000,6000,10000,15000,13000,1100],
            ['ETH',2000,3000,5000,4000,3000,940],
            ['XRP',100,200,300,500,400,300]
        ]
    };

    setBarChart = () =>{
        this.setState({
            chartType : 'bar'
        })
    }

    setLineChart = ()=>{
        this.setState({
            chartType : 'line'
        })
    }

    render(){
        return (
            <div>
                <Chart
                    columns={this.columns}
                    chartType={this.state.chartType}
                />
                <p> 
                    chart type <br/>
                    <button onClick={this.setBarChart}> Bar </button>
                    <button onClick={this.setLineChart}> Line </button>
                </p>
            </div>
        );
    }
}

export default Charthome;