import { FilterTestimonialsByExercise, FilterTestimonialsByLanguage, FilterTestimonialsByOrder, FilterTestimonialsByPage, LoadingTestimonials, getTestimonialsFailed, getTestimonialsSuccess } from "../actions/TestimonialsAction";
import TestimonialsReducer, { initialState } from "../reducers/TestimonialsReducer";

const testimonials =  {
        "id": "64df354bc5c5aa54dd5f93c1",
        "created_at": "2020-08-12T15:02:31.000Z",
        "language": {
            "title": "Rust",
            "icon_url": "https://dg8krxphbh767.cloudfront.net/tracks/rust.svg",
            "slug": "rust"
        },
        "exercise": {
            "title": "Gigasecond",
            "icon_url": "https://dg8krxphbh767.cloudfront.net/exercises/gigasecond.svg",
            "slug": "gigasecond"
        },
        "content": "Great advice ... very useful ... I like it",
        "mentor": "Lisa Wisozk PhD"
    
};

describe("Testimonials reducer", () => {

    it('return initial state', () => {
        const actual  = TestimonialsReducer(undefined, {});
        const expected = initialState;
        expect(actual).toEqual(expected);
    });

    it('get testimonials failed', () => {
        const actual  = TestimonialsReducer(initialState, getTestimonialsFailed("an error occurred"));
        const expected = {...initialState, error  : "an error occurred"};
        expect(actual).toEqual(expected);
    });

    it('get testimonials success', () => {
        const actual  = TestimonialsReducer(initialState, getTestimonialsSuccess(testimonials, 1, 1, 1));
        const expected = {...initialState, 
            testimonials : testimonials, 
            totalPage : 1, 
            current_page :  1,
            total_count : 1,
        };
        expect(actual).toEqual(expected);
    });


    it('filter testimonials by exercise', () => {
        const actual  = TestimonialsReducer(initialState, FilterTestimonialsByExercise("anagram"));
        const expected = {...initialState, exercise : "anagram"};
        expect(actual).toEqual(expected);
    });

    it('filter testimonials by languages', () => {
        const actual  = TestimonialsReducer(initialState, FilterTestimonialsByLanguage("python"));
        const expected = {...initialState, language : "python"};
        expect(actual).toEqual(expected);
    });

    it('filter testimonials by order', () => {
        const actual  = TestimonialsReducer(initialState, FilterTestimonialsByOrder("oldest_first"));
        const expected = {...initialState, order : "oldest_first"};
        expect(actual).toEqual(expected);
    });

    it('pagination', () => {
        const actual  = TestimonialsReducer(initialState, FilterTestimonialsByPage(2));
        const expected = {...initialState, current_page :2};
        expect(actual).toEqual(expected);
    });

    it('testimonials loading', () => { 
        const actual  = TestimonialsReducer(initialState, LoadingTestimonials(true));
        const expected = {...initialState, loading : true};
        expect(actual).toEqual(expected);
    });
})
   
