import React, { Component } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
                HomePage
                <Main />
            </div>
        );
    }
}

export default HomePage;