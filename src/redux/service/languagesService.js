import { getLanguagesFailed, getLanguagesSuccess } from '../actions/LanguagesAction';
import axios from 'axios';

export const getLanguagesService= async (dispatch) => {
    axios.get('/languages', 
    {
    })
        .then((response) => {
            const res = response.data;
            if (response.status === 200) {
                const languages = res.data;
                dispatch(getLanguagesSuccess(languages));
            } else {
                dispatch(getLanguagesFailed(res.error));
            }    
        }).catch((e) => { 
                dispatch(getLanguagesFailed(e.message));
        })   
};

