

export const  TestimonialsActions = {
    GET_TESTIMONIALS_ACTIONS_SUCCESS : "GET_TESTIMONIALS_ACTIONS" ,
    GET_TESTIMONIALS_ACTIONS_FAILED : "GET_TESTIMONIALS_ACTIONS" ,
    FILTER_TESTIMONIALS : "FILTER_TESTIMONIALS_BY_EXERCISE" ,
    LOADING_TESTIMONIALS : "LOADING_TESTIMONIALS"
   
}

export const getTestimonialsSuccess = (testimonials, totalPage, current_page, total_count) => ({
    type : TestimonialsActions.GET_TESTIMONIALS_ACTIONS_SUCCESS,
    payload : {
        testimonials : testimonials, 
        totalPage : totalPage,
        current_page : current_page,
        total_count : total_count
    }
});

export const getTestimonialsFailed = (error) => ({
    type : TestimonialsActions.GET_TESTIMONIALS_ACTIONS_FAILED,
    payload : {error : error}
});


export const FilterTestimonialsByExercise = (exercise) => ({
    type : TestimonialsActions.FILTER_TESTIMONIALS,
    payload : {param : "exercise", exercise : exercise}
});

export const FilterTestimonialsByPage = (page) => ({
    type : TestimonialsActions.FILTER_TESTIMONIALS,
    payload : {param : "page", page : page}
});

export const FilterTestimonialsByOrder = (order) => ({
    type : TestimonialsActions.FILTER_TESTIMONIALS,
    payload : {param : "order", order : order}
});

export const FilterTestimonialsByLanguage= (language) => ({
    type : TestimonialsActions.FILTER_TESTIMONIALS,
    payload : {param : "language", language : language}
});

export const LoadingTestimonials= (loading) => ({
    type : TestimonialsActions.LOADING_TESTIMONIALS,
    payload : { loading : loading}
});