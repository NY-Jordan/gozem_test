import { TestimonialsActions } from "../actions/TestimonialsAction";

const initialState = {
    name: "tesimonials",
    testimonials : [],
    error : false,
    language :'',
    exercise : '',
    order : "newest_first",
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
            testimonials : action.payload.testimonials } 
    case TestimonialsActions.GET_TESTIMONIALS_ACTIONS_FAILED :
        return {...state, error :  true } 
    case TestimonialsActions.FILTER_TESTIMONIALS :
        console.log('====================================');
        console.log(action.payload.param );
        console.log('====================================');
        if (action.payload.param === "exercise") {
            return {...state, exercise : action.payload.exercise } 
        }
        if (action.payload.param === "page") {
            return {...state, current_page : action.payload.page } 
        }
        if (action.payload.param === "order") {
            console.log('====================================');
            console.log(action.payload.order);
            console.log('====================================');
            return {...state, order : action.payload.order } 
        }
    default:
        return {...state};
    }
};

export default TestimonialsReducer;