import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ResultsPage from '../ResultsPage';

import Button from '../../components/Button';

import '../../styles/home.scss';

class HomePage extends Component {
    constructor(props){
        super(props);

        this.callToAction = this.callToAction.bind(this);
    }

    callToAction = (e) => {
        e.preventDefault();

        this.props.history.push('/search');
    }

    render(){
        console.log(this);

        return (
            <div className="wrapper-md">
                <div className="home">
                    <div className="home-title">
                        <h1>Contact Github API</h1>
                        <p>Encontre os usuários que você deseja, com facilidade e comodidade!</p>
                    </div>

                    <Button link="" text="Começar" onClick={this.callToAction} />
                </div>

                <Route path='/search' component={ResultsPage} />
            </div>
        )
    }
}

export default HomePage;
