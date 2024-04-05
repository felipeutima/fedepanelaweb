import axios from "axios"

import {

    GET_PROGRAMAS_SUCCESS,
    GET_PROGRAMAS_FAIL,



} from "./types"


export const get_programas = () => async dispatch => {
    const config = {
        Headers: {
            'Accept': " application/json"
        }


    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/programas/list`, config)

        if (res.status === 200) {
            dispatch({
                type: GET_PROGRAMAS_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_PROGRAMAS_FAIL
            });
        }

    } catch (err) {
        dispatch({
            type: GET_PROGRAMAS_FAIL
        });

    }

}


