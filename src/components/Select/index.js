import React, { Component } from 'react';

import './select.scss';

class Select extends Component {
    constructor(props){
        super(props);

        this.state = {
            open: false,
            selected: false,
            itemSelected: 'Mais populares',
        };

        this.documentEventClickOut = this.documentEventClickOut.bind(this);
    }

    componentDidUpdate(props, state) {
        if(this.state.open) {
            document.addEventListener('click', this.documentEventClickOut);
        }
    }

    documentEventClickOut() {
        this.setState({
            open: false,
        });

        document.removeEventListener('click', this.documentEventClickOut);
    }

    render(){
        return (
            <div
                className="custom-select"
                onClick={event =>
                    {
                        this.setState({
                            open: !this.state.open,
                        });
                    }
                }>

                <p>{this.props.label} {this.state.itemSelected && <span>{this.state.itemSelected}</span>} </p>

                <ul className = {this.state.open ? "show" : ""}>
                    {
                        this.props.children.map(option => {
                            return (
                                <li
                                    key={option.key}
                                    onClick={event => {
                                        this.props.itemClicked(option)

                                        this.setState({
                                            selected: true,
                                            itemSelected: option.label
                                        });
                                    }}>

                                    { option.name }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

Select.defaultProps = {
    label: 'Escolha a opção',
    itemClicked: ''
}

export default Select;
