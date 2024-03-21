import { combineReducers } from 'redux';
import news from './news';
import categories from './categories';

export default combineReducers({
    news,
    categories
})