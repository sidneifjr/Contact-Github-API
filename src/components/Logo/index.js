import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image';

import './logo.scss';

class Logo extends Component {
    render(){
        return (
            <Link to="/" className="logo">
                <Image 
                    src={"images/logo.png"}
                    alt="logo"
                    className={this.props.className}
                    />

            </Link>
        )
    }
}

Logo.defaultProps = {
    className: ''
}

export default Logo;
