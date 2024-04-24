import axios from "axios"

import {

    GET_EVENTS_SUCCESS,
    GET_EVENTS_FAIL,


} from "./types"


export const get_events = () => async dispatch => {
    const config = {
        Headers: {
            'Accept': " application/json"
        }


    };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/events/list`, config)

        if (res.status === 200) {
            dispatch({
                type: GET_EVENTS_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_EVENTS_FAIL
            });
        }

    } catch (err) {
        dispatch({
            type: GET_EVENTS_FAIL
        });

    }
}