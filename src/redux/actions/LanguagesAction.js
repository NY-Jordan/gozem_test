

export const  LanguagesActions = {
    GET_LANGUAGES_ACTIONS_SUCCESS : "GET_LANGUAGES_ACTIONS" ,
    GET_LANGUAGES_ACTIONS_FAILED : "GET_LANGUAGES_ACTIONS" ,
   
}



export const getLanguagesSuccess = (languages) => ({
    type : LanguagesActions.GET_LANGUAGES_ACTIONS_SUCCESS,
    payload : {languages : languages}
});

export const getLanguagesFailed = (error) => ({
    type : LanguagesActions.GET_LANGUAGES_ACTIONS_FAILED,
    payload : {error : error}
});