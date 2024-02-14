import {
    GET_NEWS_LIST_SUCCESS,
    GET_NEWS_LIST_FAIL,

} from '../actions/contacts/types'

const initialState = {
    contacts: null
}

export default function contacts(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_NEWS_LIST_SUCCESS:
            return {
                ...state,
                count: payload.count,
                next: payload.next,
                previous: payload.previous,
                contacts: payload.results.contacts
            }
        case GET_NEWS_LIST_FAIL:
            return {
                ...state,
                contacts: null,
                count: null,
                next: null,
                previous: null,
            }
        
        default:
            return state
    }
}