import React from 'react'
import { FilterTestimonialsByPage } from '../../redux/actions/TestimonialsAction';
import { connect, useDispatch } from 'react-redux';

export  function PaginationButtonItems(props) {
  const dispatch  = useDispatch();

  const HandleChangePage =  () =>   dispatch(FilterTestimonialsByPage(props.index)) ;
  
  return ( <button  onClick={() => HandleChangePage()}  className={props.current_page === props.index ? "border-1  border-green-600 join-item btn mx-2 bg-green-200  btn-desabled" : "join-item btn mx-2 "}>{props.index}</button>)
}

function mapStateToProps(state) {

  const { testimonials } = state
  return { 
      current_page: testimonials.current_page,
      total_page: testimonials.totalPage 
  }
}

export default connect(mapStateToProps)(PaginationButtonItems)