import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './button.scss';

class Button extends Component {
    render(){
        return (
            <Link to={this.props.link} className="btn primary" onClick={this.props.onClick}>
                {this.props.text}
            </Link>
        )
    }
}

Button.defaultProps = {
    text: '',
    link: '',
    onClick: event => null
}

export default Button;
