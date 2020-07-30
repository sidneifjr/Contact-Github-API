import React, { Component } from 'react';

import './tags.scss';

class Tags extends Component {
    render(){
        const { children } = this.props;
        console.log(children);

        return (
            <div className="tags">
                <span className="tag purple">{children ? children : 'none'} </span>
            </div>
        )
    }
}

export default Tags;
