import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveUsername, saveUser, saveRepos, saveRepoData } from '../../actions';
import { getUserProfile, getUserRepos, getRepoData } from '../../request';

import Title from '../Title';
import Input from '../Input';
import Select from '../Select'; 
import Profile from '../Profile';
import Repos from '../ReposList';

import './resultsItem.scss';

const selectOptions = [
    {
        name: "Mais populares",
        label: "Mais populares",
        key: 1,
        sorting: 'stars'
    },
    {
        name: "Mais recentes",
        label: "Mais recentes",
        key: 2,
        sorting: 'date'
    },
    {
        name: "Alfabética",
        label: "Alfabética",
        key: 3,
        sorting: 'A-Z'
    }
];

class ResultsItem extends Component {
    state = {
        activeFilter: selectOptions[0],
        loaded: false,
        // userExists: false,
        hasSearchedUser: false
    }

    constructor(props) {
        super(props);

        this.getSelectedItem = this.getSelectedItem.bind(this);
    }

    findUser(event) {
        event.preventDefault();

        this.setState({
            loaded: true
        });

        const userSearched = this.props.search;

        getUserProfile(userSearched)
            .then(
                ({ data }) => {
                    this.props.saveUser(data);

                    // this.setState({
                    //     userExists: true
                    // });

                    // console.log(this.state.userExists);
                }
            ).catch(error => {
                this.setState({
                    // userExists: false,
                    hasSearchedUser: true
                });

                // console.log(this.state.userExists);
                // console.log(error);
            });

        getUserRepos(userSearched)
            .then(
                ({ data }) => {
                    this.props.saveRepos(data);
                    // console.log(data);

                    data.map(elem => {
                        const repoName = elem.name;

                        return getRepoData(userSearched, repoName).then(
                            ({ data }) => {
                                this.props.saveRepoData(data);
                                // console.log(data);
                            }
                        )
                    })
                }
            )
    }

    getSelectedItem(item){
        this.setState({
            activeFilter: item
        });
    }

    getReposSorted(){
        switch (this.state.activeFilter.sorting) {
            case 'date':
                return this.sortByDate();

            case 'A-Z':
                return this.sortByName();

            case 'stars':
            default:
                return this.sortByStars();
        }
    }

    sortByStars(){
        return this.props.repos.sort((a, b) => {
            if (a.stargazers_count > b.stargazers_count) {
                return -1;
            }

            else if (a.stargazers_count < b.stargazers_count) {
                return 1;
            }

            else {
                return 0;
            }
        }) || [];
    }

    sortByDate(){
        return this.props.repos.sort((a, b) => {
            if (a.created_at > b.created_at) {
                return -1;
            }

            else if (a.created_at < b.created_at) {
                return 1;
            }

            else {
                return 0;
            }
        }) || [];
    }

    sortByName(){
        return this.props.repos.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }

            else if (a.name > b.name) {
                return 1;
            }

            else {
                return 0;
            }
        }) || [];
    }

    render(){
        const { user, repos } = this.props;
        // const { userExists } = this.state;
        const { hasSearchedUser } = this.state;

        return (
            <form className="search" onSubmit={event => this.findUser(event)}>
                <Input
                    type="search"
                    placeholder="Search here!"
                    value={this.props.search}
                    onChange={(e) =>
                        { this.props.saveUsername(e.target.value) }
                    }
                />

                {!user ?
                    <div className={"search-area " + (hasSearchedUser ? 'not-found' : '')}>
                        <Title tag="h3">
                            { hasSearchedUser ? 'Lamentamos, mas não encontramos nenhum usuário com esse nome ou login. Tente novamente.' : 'Seus resultados serão exibidos aqui!'}
                        </Title>
                    </div> : null
                }

                {user ? (
                    <ul className="search-results">
                        <Profile user={user} />
                    </ul>) : null}

                {repos.length ? (
                    <div className="repo-results">
                        <Select label="Ordenar por: " itemClicked={this.getSelectedItem}>
                            { selectOptions }
                        </Select>

                        <ul className="user-repos">
                            {
                                repos && this.getReposSorted().map(repo =>
                                    <Repos
                                        key={repo.name}
                                        repo={repo}
                                    />
                                )
                            }
                        </ul>
                    </div>
                ) : null}
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);

    return {
        user: state.user,
        search: state.search,
        repos: state.repos,
        repoData: state.repoData,
        repoLanguages: state.RepoLanguages
    }
}

const mapDispatchToProps = dispatch => 
    bindActionCreators({ saveUsername, saveUser, saveRepos, saveRepoData}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ResultsItem);
