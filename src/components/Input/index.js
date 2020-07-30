import React, { Component } from 'react';
import './input.scss';

class Input extends Component {
    render(){
        return (
            <React.Fragment>
                {this.props.type && <input type={this.props.type} className={this.props.className} placeholder={this.props.placeholder} onChange={this.props.onChange} />}
            </React.Fragment>
        )
    }
}

Input.defaultProps = {
    type: '',
    className: '',
    placeholder: '',
    onChange: event => null, // passando uma função de retorno nulo, para evitar erros.
}

export default Input;
