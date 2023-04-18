import React, { Component } from 'react';
import axios from 'axios';


class Fetch extends Component {
    constructor(){
        super();
        this.state={
            usersData: []
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => this.setState({
            usersData:res.data
        }))
        .then(console.log(this.state.usersData))
    }
    componentDidUpdate(){
        console.log(this.state)
    }

    render() {
        return (
            <div>
                {this.state.usersData.length > 0 && 
                <div>
                    {this.state.usersData.map(item => <p key={item.id}>{item.title}</p>)}
                </div>
                
                }
            </div>
        );
    }
}

export default Fetch;