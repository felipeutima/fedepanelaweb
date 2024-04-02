import { combineReducers } from 'redux';
import news from './news';
import categories from './categories';
import boletines from './boletines';
import tablas from './tablas';

export default combineReducers({
    news,
    categories,
    boletines,
    tablas

})