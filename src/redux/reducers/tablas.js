import {
    GET_DIRECTORIO_SUCCESS,
    GET_DIRECTORIO_FAIL,
    GET_RECAUDO_SUCCESS,
    GET_RECAUDO_FAIL,
    GET_TECNICA_SUCCESS,
    GET_TECNICA_FAIL,


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

        
        case GET_RECAUDO_SUCCESS:
            return {
                ...state,
            
  
                recaudo: payload.recaudo
            }
        case GET_RECAUDO_FAIL:
            return {
                ...state,
                recaudo: null,
    
            }
        case GET_TECNICA_SUCCESS:
            return {
                ...state,
            
  
                tecnica: payload.tecnica
            }
        case GET_TECNICA_FAIL:
            return {
                ...state,
                tecnica: null,
    
            }

        
        default:
            return state
    }
}