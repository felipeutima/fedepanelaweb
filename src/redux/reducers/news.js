import {
    GET_NEWS_LIST_SUCCESS,
    GET_NEWS_LIST_FAIL,

} from '../actions/news/types'

const initialState = {
    news: null
}

export default function news(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_NEWS_LIST_SUCCESS:
            return {
                ...state,
            
                next: payload.next,
                previous: payload.previous,
                news: payload.results.posts
            }
        case GET_NEWS_LIST_FAIL:
            return {
                ...state,
                news: null,
         
                next: null,
                previous: null,
            }
        
        default:
            return state
    }
}