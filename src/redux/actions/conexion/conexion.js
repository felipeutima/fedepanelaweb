import axios from "axios"

import {

    GET_CONEXION_SUCCESS,
    GET_CONEXION_FAIL,
 


} from "./types"


export const get_conexion = () => async dispatch => {
    const config = {
        Headers: {
            'Accept': " application/json"
        }


    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/conexion/list`, config)

        if (res.status === 200) {
            dispatch({
                type: GET_CONEXION_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_CONEXION_FAIL
            });
        }

    } catch (err) {
        dispatch({
            type: GET_CONEXION_FAIL
        });

    }
}






