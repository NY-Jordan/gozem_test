import { TestimonialsActions } from "../actions/TestimonialsAction";

export const initialState = {
    name: "tesimonials",
    testimonials : [],
    error : false,
    language :'',
    exercise : '',
    order : "newest_first",
    loading : false,
    totalPage : 0,
    current_page : 1,
    total_count : 0,
}

const  TestimonialsReducer = (state = initialState, action) => {
    switch (action.type) {
    case TestimonialsActions.GET_TESTIMONIALS_ACTIONS_SUCCESS :
        return {
            ...state, 
            totalPage : action.payload.totalPage,
            current_page :  action.payload.current_page,
            total_count : action.payload.total_count,
            testimonials : action.payload.testimonials
        } 
    case TestimonialsActions.GET_TESTIMONIALS_ACTIONS_FAILED :
        return {...state, error :  action.payload.error } 
    case TestimonialsActions.LOADING_TESTIMONIALS :
        return {...state, loading :  action.payload.loading } 
    case TestimonialsActions.FILTER_TESTIMONIALS :
        if (action.payload.param === "exercise") {
            return {...state, exercise : action.payload.exercise, current_page : 1 } 
        }
        if (action.payload.param === "page") {
            return {...state, current_page : action.payload.page } 
        }
        if (action.payload.param === "order") {
            return {...state, order : action.payload.order, current_page : 1 } 
        }
        if (action.payload.param === "language") {
            return {...state, language : action.payload.language, current_page : 1 } 
        }
    default:
        return {...state};
    }
};

export default TestimonialsReducer;