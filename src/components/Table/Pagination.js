import React, { useEffect, useState } from 'react'
import arrowRight2 from './../../assets/images/icon/arrow-right.png'
import arrowLeft from './../../assets/images/icon/arrow-left.png'
import { FilterTestimonialsByPage } from '../../redux/actions/TestimonialsAction';
import { FilterTestimonialsService } from '../../redux/service/testimonialsServices';
import { useDispatch, useSelector } from 'react-redux';


export default function Pagination() {
    const dispatch  = useDispatch();
  
    //ge  Testimonials state
    const TestimonialsState = useSelector(state => state.testimonials);
    //initial pagination state
    const [current_page, setCurrentPage] = useState(TestimonialsState.current_page);

    const prev_button_state = TestimonialsState.current_page === 1 && "btn-disabled";
    const next_button_state = TestimonialsState.current_page === TestimonialsState.totalPage && "btn-disabled";

    const HandleClickNext =  () =>   dispatch(FilterTestimonialsByPage(current_page + 1)) ;

    const HandleClickPrev =  () =>   dispatch(FilterTestimonialsByPage(current_page - 1)) ;
   
    
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
                        TestimonialsState.totalPage > 8 &&
                        <>
                            
                            <button className="join-item btn">1</button>
                            <button className="join-item btn">2</button>
                            <button className="join-item btn">3</button>
                            <button className="join-item btn btn-disabled">...</button>
                            <button className="join-item btn">{TestimonialsState.totalPage -3}</button>
                            <button className="join-item btn">{TestimonialsState.totalPage -2}</button>
                            <button className="join-item btn">{TestimonialsState.totalPage -1}</button>
                        </> 
                        
                    }

                  
                    
                </div>
            </th>
            <th className='flex justify-end'>
                <button className={"join-item btn btn-outline "+next_button_state} onClick={HandleClickNext}>Next <img src={arrowRight2}  width={15} height={15}  /></button>
            </th>
        </tr>
  )
}
