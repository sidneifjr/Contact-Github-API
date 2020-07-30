import React, { Component } from 'react';

import './title.scss';

class Title extends Component {
    render(){
        const CustomTag = `${this.props.tag}`;

        return (
            <CustomTag className={this.props.titleClass}>
                {this.props.children}
            </CustomTag>
        )
    }
}

Title.defaultProps = {
    tag: '',
    titleClass: ''
}

export default Title;
