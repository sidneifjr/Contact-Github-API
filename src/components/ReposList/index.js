import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveRepoData } from '../../actions';

import Title from '../Title';
import Image from '../Image';

import './reposList.scss';

class ReposList extends Component {
    constructor(props){
        super(props);

        this.getRepoClicked = this.getRepoClicked.bind(this);
    }

    getRepoClicked(repo) {
        this.props.saveRepoData(repo);
    }

    render(){
        const { repo } = this.props;
        const { id, name, description, stargazers_count, language } = repo;

        return (
            <li className="user-repos-item"
                key={id}
                onClick={() => this.getRepoClicked(repo)}>

                <Link to={"/repos/" + id}>
                    <div className="repo-data">
                        <Title tag="h3" titleClass="data-title">
                            {name}
                        </Title>

                        <p className="data-description">
                            {description ? description : 'Not available'}
                        </p>
                    </div>

                    <div className="repo-rating">
                        <div className="rated">
                            <Title tag="h4">
                                {stargazers_count}
                            </Title>

                            <Image src={"images/star.svg"} alt="stars" />
                        </div>

                        {language && <p> { language } </p>}
                    </div>
                </Link>
            </li>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        repoData: state.data
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ saveRepoData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ReposList);
