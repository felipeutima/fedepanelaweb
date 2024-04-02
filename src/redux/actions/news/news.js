import axios from "axios"

import {

    GET_NEWS_LIST_SUCCESS,
    GET_NEWS_LIST_FAIL,
    GET_NEWS_HOME_SUCCESS,
    GET_NEWS_HOME_FAIL,
    GET_NEW_DETAIL_SUCCESS,
    GET_NEW_DETAIL_FAIL


} from "./types"


export const get_news = () => async dispatch => {
    const config = {
        Headers: {
            'Accept': " application/json"
        }


    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/news/list`, config)

        if (res.status === 200) {
            dispatch({
                type: GET_NEWS_LIST_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_NEWS_LIST_FAIL
            });
        }

    } catch (err) {
        dispatch({
            type: GET_NEWS_LIST_FAIL
        });

    }
}


export const get_news_home = () => async dispatch => {
    const config = {
        Headers: {
            'Accept': " application/json"
        }


    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/news/listHome`, config)

        if (res.status === 200) {
            dispatch({
                type: GET_NEWS_HOME_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_NEWS_HOME_FAIL
            });
        }

    } catch (err) {
        dispatch({
            type: GET_NEWS_HOME_FAIL
        });

    }
}



export const get_new = (slug) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/news/detail/${slug}`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_NEW_DETAIL_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_NEW_DETAIL_FAIL,
            });
        }
    } catch (err) {
        dispatch({
            type: GET_NEW_DETAIL_FAIL,
        });
    }
}
