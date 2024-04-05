import { combineReducers } from 'redux';
import news from './news';
import categories from './categories';
import boletines from './boletines';
import tablas from './tablas';
import programas from './programas';
import slides from './slides';
import conexion from './conexion';

export default combineReducers({
    news,
    categories,
    boletines,
    tablas,
    programas,
    slides,
    conexion

})