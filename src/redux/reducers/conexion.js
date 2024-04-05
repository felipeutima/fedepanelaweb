import {
    GET_CONEXION_SUCCESS,
    GET_CONEXION_FAIL,


} from '../actions/conexion/types'

const initialState = {
    conexion: null
}

export default function conexion(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_CONEXION_SUCCESS:
            return {
                ...state,
            
  
                conexion: payload.conexion
            }
        case GET_CONEXION_FAIL:
            return {
                ...state,
                conexion: null,
    
            }
        
        default:
            return state
    }
}