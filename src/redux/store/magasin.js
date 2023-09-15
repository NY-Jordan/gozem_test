import { combineReducers, } from "redux"
import LanguagesReducer from "../reducers/LanguagesReducer";
import TestimonialsReducer from "../reducers/TestimonialsReducer";



 const RootReducer = 
    combineReducers({
        languages : LanguagesReducer,
        testimonials : TestimonialsReducer  
    });


export default RootReducer;