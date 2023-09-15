import axios from 'axios';
import { getTestimonialsFailed, getTestimonialsSuccess } from '../actions/TestimonialsAction';
import { useSelector } from 'react-redux';

export const getTestimonialsService= async (dispatch) => {
    await axios.get('/testimonials', 
    {
    })
        .then((response) => {
            const res = response.data;
            if (response.status === 200) {
                const testimonials = res.data;
                const totalPage = res.pagination.total_pages;
                const current_page = res.pagination.current_page;
                const total_count = res.pagination.total_count;
                dispatch(getTestimonialsSuccess(testimonials,  totalPage, current_page, total_count));
            } else {
                dispatch(getTestimonialsFailed(res.error));
            }    
        }).catch((e) => { 
                dispatch(getTestimonialsFailed(e.message));
        })   
};

export const FilterTestimonialsService= async (dispatch, TestimonialsState) => {
    await axios.get('/testimonials?page='+TestimonialsState.current_page+'&language='+TestimonialsState.language+'&exercise='+TestimonialsState.exercise+'&order='+TestimonialsState.order, 
    {
    })
        .then((response) => {
            const res = response.data;
            if (response.status === 200) {
                const testimonials = res.data;
                const totalPage = res.pagination.total_pages;
                const current_page = res.pagination.current_page;
                const total_count = res.pagination.total_count;
                dispatch(getTestimonialsSuccess(testimonials,  totalPage, current_page, total_count));
            } else {
                dispatch(getTestimonialsFailed(res.error));
            }    
        }).catch((e) => { 
                dispatch(getTestimonialsFailed(e.message));
        })   
};