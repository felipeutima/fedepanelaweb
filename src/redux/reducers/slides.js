import {
    GET_SLIDES_SUCCESS,
    GET_SLIDES_FAIL,


} from '../actions/slides/types'

const initialState = {
    slides: null
}

export default function slides(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_SLIDES_SUCCESS:
            return {
                ...state,
            
                slides: payload.slides
            }
        case GET_SLIDES_FAIL:
            return {
                ...state,
                slides: null,
    
            }
        
        default:
            return state
    }
}