import {
    GET_PROGRAMAS_SUCCESS,
    GET_PROGRAMAS_FAIL,


} from '../actions/programas/types'

const initialState = {
    programas: null
}

export default function programas(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_PROGRAMAS_SUCCESS:
            return {
                ...state,
            
  
                programas: payload.programas
            }
        case GET_PROGRAMAS_FAIL:
            return {
                ...state,
                programas: null,
    
            }
        
        default:
            return state
    }
}