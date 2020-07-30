import React from 'react';
import Image from '../Image';
import Title from '../Title';

const Profile = ({ user }) => {
    return (
        <li className="search-results-item" key={user.id}>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                <div className="img">
                    <Image src={user.avatar_url} alt="thumbnail" />
                </div>

                <div className="data">
                    <div className="title">
                        <Title tag="h3" titleClass="data-title">
                            {user.name ? user.name : 'Username not provided'}
                        </Title>

                        <div className="social-status">
                            <p className="data-description"> Segue: {user.followers} </p>
                            <p className="data-description"> Seguidores: {user.following} </p>
                        </div>
                    </div>

                    <span className="data-subtitle"> @{user.login} </span>

                    <p className="bio">
                        <strong> Bio: </strong>
                        { user.bio ? user.bio : 'Not available'}
                    </p>

                    <p className="email">
                        {user.email && user.email }
                    </p>
                </div>

                <div className="repositories-amount">
                    <h4> {user.public_repos} repos </h4>
                </div>

                <p className="openProfile"> Acessar perfil </p>
            </a>
        </li>
    )
}

export default Profile;
