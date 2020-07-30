import { combineReducers } from 'redux';

import user from './user';
import repos from './repos';
import search from './search';
import getSelectedRepo from './getSelectedRepo';

const mainReducer = combineReducers({
    user,
    repos,
    search,
    getSelectedRepo
});

export default mainReducer;
