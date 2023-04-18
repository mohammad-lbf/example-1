import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class HeaderNavbar extends Component {
    render() {
        return (
            <nav className='d-flex'>
                <Link to={"/"}>صفحه اصلی</Link>
                <Link to={"/callus"}>تماس با ما</Link>
                <Link to={"/aboutus"}>درباره ما</Link>
            </nav>
        );
    }
}

export default HeaderNavbar;