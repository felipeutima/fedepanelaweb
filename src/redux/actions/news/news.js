import axios from "axios"

import {

    GET_NEWS_LIST_SUCCESS,
    GET_NEWS_LIST_FAIL

}from "./types"


export const get_news =()=> async dispatch => {
    const config= {
        Headers: {
            'Accept':" application/json"
        }


    };
    try{
        const res= await axios.get( `${process.env.REACT_APP_API_URL}/api/news/list`, config)

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

    }catch(err){
        dispatch({
            type:GET_NEWS_LIST_FAIL
        });

    }
}