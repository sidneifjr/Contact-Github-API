import axios from 'axios';
import { GITHUB_URL, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, GITHUB_COUNT } from '../constants';

const createGithubUrl = (url, parameters) => {
    let base_url = `${GITHUB_URL}/${url}?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}`

    if (parameters) {
        for(var key in parameters) {
            base_url += '&' + key + '=' + parameters[key]
        }
    }

    return base_url;
}

export function getUserProfile(username) {
    let url = createGithubUrl(`users/${username}`);

    return axios.get(url);
}

export function getUserRepos(username) {
    let url = createGithubUrl(`users/${username}/repos`, {
        per_page: GITHUB_COUNT,
    });

    return axios.get(url);
}

export function getRepoData(username, reponame) {
    let url = createGithubUrl(`repos/${username}/${reponame}`);

    return axios.get(url);
}
