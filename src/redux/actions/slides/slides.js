import axios from "axios"

import {

    GET_SLIDES_SUCCESS,
    GET_SLIDES_FAIL,
    
} from "./types"


export const get_slides = () => async dispatch => {
    const config = {
        Headers: {
            'Accept': "application/json"
        }


    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/slides/list`, config)

        if (res.status === 200) {
            dispatch({
                type: GET_SLIDES_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_SLIDES_FAIL
            });
        }

    } catch (err) {
        dispatch({
            type: GET_SLIDES_FAIL
        });

    }

}


