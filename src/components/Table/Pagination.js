import React, { useEffect, useState } from 'react'
import arrowRight2 from './../../assets/images/icon/arrow-right.png'
import arrowLeft from './../../assets/images/icon/arrow-left.png'
import { FilterTestimonialsByPage } from '../../redux/actions/TestimonialsAction';
import { FilterTestimonialsService } from '../../redux/service/testimonialsServices';
import { connect, useDispatch, useSelector } from 'react-redux';


export  function Pagination(props) {
    const dispatch  = useDispatch();
  
    //ge  Testimonials state
    const TestimonialsState = useSelector(state => state.testimonials);
    //initial pagination state
    const [current_page, setCurrentPage] = useState(TestimonialsState.current_page);

    const prev_button_state = TestimonialsState.current_page === 1 && "btn-disabled";
    const next_button_state = TestimonialsState.current_page === TestimonialsState.totalPage && "btn-disabled";

    const HandleClickNext =  () =>   dispatch(FilterTestimonialsByPage(props.current_page + 1)) ;

    const HandleClickPrev =  () =>   dispatch(FilterTestimonialsByPage(props.current_page - 1)) ;

    const HandleChangePage =  () =>   dispatch(FilterTestimonialsByPage(current_page)) ;
   
   
    const Breakpoint = TestimonialsState.totalPage > 10 ? true  : false 

    let firstBreakPoint = (props.current_page >= 3 || TestimonialsState.totalPage > 10)  ?? (Breakpoint ? [props.current_page+1, props.current_page+2] : false ) ;
    
    let firstBreakPointState = (props.current_page >= 3 && TestimonialsState.totalPage > 10)  ?  [props.current_page+1, props.current_page+2] : false ;
    
    let first_part_pagination =  [];
    let last_part_pagination =  [];
    //first pasrt logic
    for (let i = 1; i <=  3 ; i++){
        if (props.current_page > 3) {
            first_part_pagination.push(props.current_page-i);
        } else 
            first_part_pagination.push(i)
    }

    if (props.current_page > 3) {
        first_part_pagination.reverse();
        first_part_pagination.push(props.current_page);
    }
    //last pasrt logic
    for (let i = 0; i <=  2; i++){
        last_part_pagination.push(TestimonialsState.totalPage-i);
    }
    last_part_pagination.reverse();

    

    //without breakpoints
    let page = [];
    for (let i = 1; i <= TestimonialsState.totalPage; i++){page.push(i)}

    
    useEffect(() => {
       
        FilterTestimonialsService(dispatch, TestimonialsState);
        setCurrentPage(TestimonialsState.current_page)
    }, [TestimonialsState.current_page])
    
 
  return (
       <tr>
            <th className='lg:w-40 xl:w-40 py-0'>
                <button className={"join-item btn btn-outline "+prev_button_state} onClick={HandleClickPrev}> <img src={arrowLeft}  width={15} height={15}  /> 
                Previous
                </button>
            </th>
            <th className='xl:w-120 lg:w-120 flex pl-0'>
                
            </th>
            <th className='lg:w-50'>
                <div className="join">
                    { 
                        Breakpoint  &&
                        first_part_pagination.map((index, key) => {
                            return  <button onClick={
                                () => {
                                    setCurrentPage(index); 
                                    HandleChangePage()
                                }
                                } 
                                className={props.current_page === index ? "join-item btn mx-2 border-2  btn-desabled" : "join-item btn mx-2 border-2 bg-white"}>{index}</button>
                         })                        
                    }
                    {
                        firstBreakPointState ?  firstBreakPointState.map((index, key) => {
                            return  <button
                                        onClick={
                                            () => {
                                                setCurrentPage(index); 
                                                HandleChangePage()
                                            }} 

                                        className={props.current_page === index ? "join-item btn mx-2 border-2  btn-desabled" : "join-item btn mx-2 border-2 bg-white"}>{index}</button>
                         })                        
                   : <></> }

                    {firstBreakPoint &&   <button className="join-item btn mx-2 border-2 btn-desabled">...</button>}
                    
                    {
                        Breakpoint && last_part_pagination.map((index, key) => {
                            return  <button onClick={
                                () => {
                                    setCurrentPage(index); 
                                    HandleChangePage()
                                }} 
                                className={props.current_page === index ? "join-item btn mx-2 border-2  btn-desabled" : "join-item btn mx-2 border-2 bg-white"}>{index}</button>
                         })                   
                    }

                   
                    {
                        !Breakpoint  && page.map((index, key) => {
                           return  <button  onClick={
                            () => {
                                setCurrentPage(index); 
                                HandleChangePage()
                            }
                            }  className={props.current_page === index ? "join-item btn mx-2 border-2 btn-desabled" : "join-item btn mx-2 border-2 bg-white"}>{index}</button>
                        })
                    }
                    
                </div>
            </th>
            <th className='flex justify-end'>
                <button  className={"join-item btn btn-outline "+next_button_state} onClick={HandleClickNext}>Next <img src={arrowRight2}  width={15} height={15}  /></button>
            </th>
        </tr>
  )
}
function mapStateToProps(state) {

    const { testimonials } = state
    return { 
        current_page: testimonials.current_page ,
        total_page: testimonials.totalPage 
    }
}

export default connect(mapStateToProps)(Pagination)