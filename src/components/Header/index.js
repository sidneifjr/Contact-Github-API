import React, { Component } from 'react';
import Logo from '../Logo';
import Form from '../Form';

import './header.scss';

class Header extends Component {
    render(){
        return (
            <header id="header">
                <div className="header-wrapper">
                    <Logo />

                    <Form className="header-search" />
                </div>
            </header>
        )
    }
}

export default Header;
