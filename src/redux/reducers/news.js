import {
    GET_NEWS_LIST_SUCCESS,
    GET_NEWS_LIST_FAIL,
    GET_NEWS_HOME_SUCCESS,
    GET_NEWS_HOME_FAIL,
    GET_NEW_DETAIL_SUCCESS,
    GET_NEW_DETAIL_FAIL,
    GET_FILTERED_SUCCESS,
    GET_FILTERED_FAIL,

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
                newshome: null,

                next: null,
                previous: null,
            }


        case GET_NEWS_HOME_SUCCESS:
            return {
                ...state,

                newshome: payload.posts
            }
        case GET_NEWS_HOME_FAIL:
            return {
                ...state,
                newshome: null,


            }

        case GET_NEW_DETAIL_SUCCESS:
            return {
                ...state,
                post: payload.post
            }
        case GET_NEW_DETAIL_FAIL:
            return {
                ...state,
                post: null
            }

        case GET_FILTERED_SUCCESS:
            return {
                ...state,
                filtered: payload.results
            }
        case GET_FILTERED_FAIL:
            return {
                ...state,
                filtered: null
            }

        default:
            return state
    }
}