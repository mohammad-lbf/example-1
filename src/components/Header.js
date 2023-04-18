import React, { Component } from 'react';
import HeaderNavbar from './shared/HeaderNavbar';
import styles from '../styles/Header.module.css';

class Header extends Component {

    render() {
        return (
            <div className={`${styles.header} py-3 px-4`}>
                    <HeaderNavbar />
            </div>
        );
    }
}

export default Header;