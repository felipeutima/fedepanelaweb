import axios from "axios"

import {

    GET_DIRECTORIO_SUCCESS,
    GET_DIRECTORIO_FAIL,

    GET_TECNICA_SUCCESS,
    GET_TECNICA_FAIL,

    GET_RECAUDO_SUCCESS,
    GET_RECAUDO_FAIL,




} from "./types"


export const get_directorio = () => async dispatch => {
    const config = {
        Headers: {
            'Accept': " application/json"
        }


    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/tablas/directorio`, config)

        if (res.status === 200) {
            dispatch({
                type: GET_DIRECTORIO_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_DIRECTORIO_FAIL
            });
        }

    } catch (err) {
        dispatch({
            type: GET_DIRECTORIO_FAIL
        });

    }
}
export const get_tecnica = () => async dispatch => {
    const config = {
        Headers: {
            'Accept': " application/json"
        }


    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/tablas/tecnica`, config)

        if (res.status === 200) {
            dispatch({
                type: GET_TECNICA_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_TECNICA_FAIL
            });
        }

    } catch (err) {
        dispatch({
            type: GET_TECNICA_FAIL
        });

    }
}
export const get_recaudo = () => async dispatch => {
    const config = {
        Headers: {
            'Accept': " application/json"
        }


    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/tablas/recaudo`, config)

        if (res.status === 200) {
            dispatch({
                type: GET_RECAUDO_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_RECAUDO_FAIL
            });
        }

    } catch (err) {
        dispatch({
            type: GET_RECAUDO_FAIL
        });

    }
}






