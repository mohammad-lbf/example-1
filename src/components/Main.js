import React, { Component } from 'react';
import Fetch from './Fetch';

class Main extends Component {
    constructor(){
        super();
        this.state={
            number:0
        }
    }
    clickHandler = ()=>{
        this.setState(prevState => ({
            number: prevState.number + 1
        }))
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>
                    click!
                </button>
                <p>{this.state.number}</p>
                <p>
                {this.state.number % 2 == 0 && <span>even</span>}
                </p>
                <Fetch />
            </div>
        );
    }
}

export default Main;