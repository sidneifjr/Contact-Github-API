import React, { Component } from 'react';
import Input from '../Input';
import './form.scss';

class Form extends Component {
    render(){
        return (
            <form className={this.props.className} onSubmit={this.props.onSubmit}>
                <Input type="text" className="search" placeholder="Encontre seu dev!" />
            </form>
        )
    }
}

Form.defaultProps = {
    className: '',
    onSubmit: event => null,
}

export default Form;
