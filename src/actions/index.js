export const saveUsername = (search) => {
    return {
        type: 'SAVE_USERNAME',
        payload: search // payload segurando os dados
    }
}

export const saveUser = (user) => {
    return {
        type: 'SAVE_USER',
        payload: user
    }
}

export const saveRepos = (repos) => {
    return {
        type: 'SAVE_REPOS',
        payload: repos
    }
}

export const saveRepoData = (repoData) => {
    console.log(repoData);

    return {
        type: 'SAVE_REPO_INFO',
        payload: repoData,
    }
}

export const saveRepoLanguages = (repoLanguages) => {
    return {
        type: 'GET_REPO_LANGUAGES',
        payload: repoLanguages
    }
}
