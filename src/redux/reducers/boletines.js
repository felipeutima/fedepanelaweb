import {
    GET_BOLETINES_TENDENCIAS_SUCCESS,
    GET_BOLETINES_TENDENCIAS_FAIL,
    GET_BOLETINES_NEWS_SUCCESS,
    GET_BOLETINES_NEWS_FAIL,
    GET_BOLETINES_HOME_SUCCESS,
    GET_BOLETINES_HOME_FAIL,

} from '../actions/boletines/types'

const initialState = {
    boletines: null
}

export default function boletines(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_BOLETINES_TENDENCIAS_SUCCESS:
            return {
                ...state,
            
  
                tendencias: payload.tendencias
            }
        case GET_BOLETINES_TENDENCIAS_FAIL:
            return {
                ...state,
                tendencias: null,
    
            }
        case GET_BOLETINES_NEWS_SUCCESS:
            return {
                ...state,
            
  
                news: payload.news
            }
        case GET_BOLETINES_NEWS_FAIL:
            return {
                ...state,
                news: null

            }


        case GET_BOLETINES_HOME_SUCCESS:
            return {
                ...state,
 
                boletineshome: payload.boletines
            }
        case GET_BOLETINES_HOME_FAIL:
            return {
                ...state,
                boletineshome: null,
         
          
            }
        
        default:
            return state
    }
}