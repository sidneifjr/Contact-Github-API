import React, { Component } from 'react';
// import Button from '../../components/Button';
import RepoDetails from '../../components/RepoDetails';

class RepoDetailsPage extends Component {
    // constructor(props) {
    //     super(props);

    //     this.goBack = this.goBack.bind(this);
    // }

    // goBack = (e) => {
    //     e.preventDefault();

        // console.log("Estes são os props de RepoDetailsPage: " + this.props);
    // }

    render(){
        // console.log(this);
    
        return (
            <div className="wrapper-md">
                <RepoDetails />
                {/* <Button link="" text="Voltar" onClick={this.goBack} /> */}
            </div>
        )
    }
}

export default RepoDetailsPage;
