import {
    GET_DIRECTORIO_SUCCESS,
    GET_DIRECTORIO_FAIL,


} from '../actions/tablas/types'

const initialState = {
    tablas: null
}

export default function tablas(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_DIRECTORIO_SUCCESS:
            return {
                ...state,
            
  
                directorio: payload.directorio
            }
        case GET_DIRECTORIO_FAIL:
            return {
                ...state,
                directorio: null,
    
            }

        
        default:
            return state
    }
}