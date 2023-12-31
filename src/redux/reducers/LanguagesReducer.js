import { LanguagesActions } from "../actions/LanguagesAction";

export const initialState = {
    name: "languages",
    languages : [],
    error : false,
}

const  LanguagesReducer = (state = initialState, action) => {
    switch (action.type) {
    case LanguagesActions.GET_LANGUAGES_ACTIONS_SUCCESS :
        return {...state, languages : action.payload.languages } 
    case LanguagesActions.GET_LANGUAGES_ACTIONS_FAILED :
        return {name: "languages",languages : [], error : action.payload.error } 
    default:
        return {...state};
    }
};

export default LanguagesReducer;