import React, { Component } from 'react';

class Image extends Component {
    render(){
        return (
            <React.Fragment>
                {this.props.src && <img src={this.props.src} className={this.props.className} alt={this.props.alt} />}
            </React.Fragment>
        )
    }
}

Image.defaultProps = {
    src: '',
    alt: '',
    className: ''
}

export default Image;
