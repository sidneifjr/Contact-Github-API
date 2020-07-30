// O action retorna um novo objeto, baseado no anterior (no caso, o state).
// Usar o setState como no exemplo abaixo irá alterar o state original! Isso é péssimo, lembre do conceito de imutabilidade.
const getSelectedRepo = (state = '', action) => {
    switch(action.type){
        case "SAVE_REPO_INFO":
            console.log(action);

            return {
                data: {
                    id: action.payload.id,
                    name: action.payload.name,
                    description: action.payload.description,
                    stars: action.payload.stargazers_count,
                    language: action.payload.language,
                    link: action.payload.html_url,
                    owner: action.payload.owner
                }
            }

        default:
            return state;
    }
}

export default getSelectedRepo;
