import {
    GET_EVENTS_SUCCESS,
    GET_EVENTS_FAIL,


} from '../actions/events/types'

const initialState = {
    events: null
}

export default function events(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_EVENTS_SUCCESS:
            return {
                ...state,
            
  
                events: payload.events
            }
        case GET_EVENTS_FAIL:
            return {
                ...state,
                events: null,
    
            }
        
        
        default:
            return state
    }
}