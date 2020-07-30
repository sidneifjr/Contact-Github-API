import React, { Component } from 'react';
import ResultsItem from '../../components/ResultsItem/index';

class ResultsPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            searchLoaded: false
        }

        this.updateSearchState = this.updateSearchState.bind(this);
    }

    // A url da página deverá ser alterada para '/user' quando o componente for carregado.
    // componentDidMount() {
    //     console.log("Estes são os props de ResultsPage: " + this.props);
    // }

    componentDidUpdate() {
        this.updateSearchState();
    }

    updateSearchState = () => {
        this.setState({
            searchLoaded: true
        });

        this.props.history.push('/search/user');
    }

    render(){
        console.log(this);

        // const resultsItemConstant = <ResultsItem />;
        // console.log(resultsItemConstant, resultsItemConstant.state);

        // const { searchLoaded } = this.state;
        // console.log(searchLoaded);

        const { history } = this.props;
        console.log(history);

        return (
            <div className="wrapper-md">
                <ResultsItem />
                {/* { this.updateSearchState() } */}

                {/* As funções nem ao menos rodam!!! */}
                {/* <ResultsItem loaded={this.state.loaded ? (() => { console.log("YEAHAAAAAG!") }) : (() => { console.log("NOOOOOOOOOOOWSA!") }) } /> */}

                {/* <ResultsItem
                    loaded={this.state.loaded ? () => this.setState({
                        searchLoaded: true,
                    }) : '' }
                /> */}
            </div>
        )
    }
}

export default ResultsPage;
