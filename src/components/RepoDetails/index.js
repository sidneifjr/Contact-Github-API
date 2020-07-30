import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveRepoData, saveRepoLanguages } from '../../actions';

import Title from '../Title';
import Image from '../Image';
import Tags from '../Tags';

import './repoDetails.scss';

class RepoDetails extends Component {
    render(){
        const repoFiles = [
            {
                fileName: "test1",
                key: 1
            },

            {
                fileName: "test2",
                key: 2
            },

            {
                fileName: "test3",
                key: 3
            },

            {
                fileName: "test4",
                key: 4
            },

            {
                fileName: "test5",
                key: 5
            },

            {
                fileName: "test6",
                key: 6
            },

            {
                fileName: "test7",
                key: 7
            },

            {
                fileName: "test8",
                key: 8
            },

            {
                fileName: "test9",
                key: 9
            },

            {
                fileName: "test10",
                key: 10
            },

            {
                fileName: "test11",
                key: 11
            },

            {
                fileName: "test12",
                key: 12
            },

            {
                fileName: "test13",
                key: 13
            },

            {
                fileName: "test14",
                key: 14
            },

            {
                fileName: "test15",
                key: 15
            },

            {
                fileName: "readme",
                key: 16
            },
        ]

        const activityLog = [
            {
                requestNumber: '#000',
                hoursAgo: '2',
                whoMadeIt: 'mariaif',
                key: 1
            },

            {
                requestNumber: '#798',
                hoursAgo: '3',
                whoMadeIt: 'JohnDoe',
                key: 2
            },

            {
                requestNumber: '#125',
                hoursAgo: '6',
                whoMadeIt: 'groundjim',
                key: 3
            },

            {
                requestNumber: '#224',
                hoursAgo: '4',
                whoMadeIt: 'sidneifjr',
                key: 4
            }
        ]

        const { repoData } = this.props;
        console.log(repoData);
        // console.log(repoData.language);

        return (
            <section className="single-repo">
                <header className="repo-header">
                    <div className="repo-header-main-info">
                        <div className="repo-header-main-info-title">
                            <Image src="/images/book.svg" alt="star" />

                            <Title titleClass="repo-title" tag="h3">
                                {repoData.owner.login ? repoData.owner.login : 'owner-name'} / <strong>{repoData.name ? repoData.name : 'repo-name'}</strong>
                            </Title>
                        </div>

                        <Tags>{repoData.language}</Tags>
                    </div>
 
                    <div className="repo-header-side-info">
                        <div className="starred">
                            <div className="star">
                                <Image src="/images/star-full.svg" alt="star" />
                                <span> Stars </span>
                            </div>

                            <p>
                                { repoData.stars ? <span> { repoData.stars } </span> : <span> 0 </span> }
                            </p>
                        </div>
                    </div>

                    <div className="repo-header-description">
                        { repoData.description ? <p> { repoData.description } </p> : <p> This is a description for the repository.</p> }
                        { repoData.link ? <a href={repoData.link} rel="noopener noreferrer"> {repoData.link} </a> : <a href="/#" rel="noopener noreferrer">website_example.com.br</a> }
                    </div>
                </header>

                <section className="repo-content">
                    <aside className="file-list">
                        <Title titleClass="list-title" tag="h5">Files</Title>

                        <ul className="files">
                            {
                                repoFiles.map(repoFile => {
                                    return (
                                        <li className="files-item" key={repoFile.key}>
                                            <Image src="/images/folder.svg" alt="folder" />
                                            <p> {repoFile.fileName} </p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </aside>

                    <div className="activity-list">
                        <Title titleClass="list-title" tag="h5">Activity</Title>

                        <ul className="activity">
                            {
                                activityLog.map(activityItem => {
                                    return (
                                        <li className="activity-item" key={activityItem.key}>
                                            <Image src="https://via.placeholder.com/75x75.jpg" alt="folder" />

                                            <div className="activity-item-details">
                                                <Title tag="h3">
                                                    Merge pull request { activityItem.requestNumber }
                                                </Title>

                                                <p>{ activityItem.hoursAgo } hours ago by <strong><a href="/#" rel="noopener noreferrer">@{activityItem.whoMadeIt}</a></strong></p>

                                                <span className="tag purple">branch</span>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </section>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);

    return {
        repoData: state.getSelectedRepo.data
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ saveRepoData, saveRepoLanguages }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepoDetails);
