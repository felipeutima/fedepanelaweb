import axios from "axios"

import {

    GET_BOLETINES_TENDENCIAS_SUCCESS,
    GET_BOLETINES_TENDENCIAS_FAIL,
    GET_BOLETINES_NEWS_SUCCESS,
    GET_BOLETINES_NEWS_FAIL,
    GET_BOLETINES_HOME_SUCCESS,
    GET_BOLETINES_HOME_FAIL,



} from "./types"


export const get_tendencias = () => async dispatch => {
    const config = {
        Headers: {
            'Accept': " application/json"
        }


    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/boletines/tendencias`, config)

        if (res.status === 200) {
            dispatch({
                type: GET_BOLETINES_TENDENCIAS_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_BOLETINES_TENDENCIAS_FAIL
            });
        }

    } catch (err) {
        dispatch({
            type: GET_BOLETINES_TENDENCIAS_FAIL
        });

    }
}
export const get_news = () => async dispatch => {
    const config = {
        Headers: {
            'Accept': " application/json"
        }


    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/boletines/news`, config)

        if (res.status === 200) {
            dispatch({
                type: GET_BOLETINES_NEWS_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_BOLETINES_NEWS_FAIL
            });
        }

    } catch (err) {
        dispatch({
            type: GET_BOLETINES_NEWS_FAIL
        });

    }
}


export const get_boletines_home = () => async dispatch => {
    const config = {
        Headers: {
            'Accept': " application/json"
        }


    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/boletines/first`, config)

        if (res.status === 200) {
            dispatch({
                type: GET_BOLETINES_HOME_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_BOLETINES_HOME_FAIL
            });
        }

    } catch (err) {
        dispatch({
            type: GET_BOLETINES_HOME_FAIL
        });

    }
}


