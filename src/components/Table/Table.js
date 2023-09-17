import React, { useEffect, useMemo, useState  } from 'react'
import language1 from './../../assets/images/m-languageIcon [exercism].png'
import ProfileIcon from './../../assets/images/icon/m-profileBit.png'
import arrowRight from './../../assets/images/Frame 612.png'
import arrowBottom from './../../assets/images/Group.png'
import DropdownItem from '../Navigation/DropdownItem'
import searchIcon from './../../assets/images/icon/Group.png'
import Image404 from './../../assets/images/404.png'
import { FilterTestimonialsService } from '../../redux/service/testimonialsServices'
import { FilterTestimonialsByExercise, FilterTestimonialsByOrder } from '../../redux/actions/TestimonialsAction'
import { connect, useDispatch, useSelector } from 'react-redux'
import Pagination from './Pagination'
import { useDebounce } from 'use-debounce'
import moment from 'moment'
import  loadImage from "./../../assets/images/loader-outline-svgrepo-com.svg"



export  function Table(props) {

    const languagesSate = useSelector(state => state.languages);

    const TestimonialsState = useSelector(state => state.testimonials);
    const dispatch  = useDispatch();
    const [ExerciseValue, setExerciseValue] = useState('');
    const  [DebounceExerciseValue] =  useDebounce(ExerciseValue, 3000)

    const handleChangeOrder  = (value) => {
        dispatch(FilterTestimonialsByOrder(value));
    }

    const filterbyexercise = (value) => {
        setExerciseValue(value)
    }

    useEffect(() => {
        dispatch(FilterTestimonialsByExercise(DebounceExerciseValue));
    }, [DebounceExerciseValue])

    return (
        <div className=" mx-8 mb-10  ">
            
            <table className="table mt-5  border-1 border-gray-600 rounded-xl px-4 py-2 shadow-2xl">
            <img class={props.loading ? "w-20 h-20 animate-spin spin-loader-position "  : "hidden"} src={loadImage} alt="Loading icon"></img>
                <thead>
                    <tr>
                        <th className='lg:w-40 xl:w-40 py-0 font-normal '>
                            <div className="dropdown  flex items-center ">
                                <div>
                                    <img src={language1}   />
                                </div>
                                <div>
                                    <label tabIndex={0} className="btn m-1  bg-white border-none">
                                        <img src={arrowBottom}   />
                                    </label>
                                    <ul tabIndex={0} className="dropdown-content   h-60 none overflow-y-auto overflow-x-auto  menu p-2 w-auto shadow bg-base-100 rounded-box ">
                                        {languagesSate.languages && languagesSate.languages.map((language, key) => 
                                             <DropdownItem  key={key} icon={language.icon_url}  title={language.title} slug={language.slug} num_exercises={language.num_exercises}/> 
                                        )  }
                                    </ul>
                                </div>
                            </div>
                        </th>
                        <th className='xl:w-120 lg:w-120 flex pl-0 font-normal' >
                            <div className='bg-gray-200 rounded-l-lg  flex p-2 justify-end items-center'> <img src={searchIcon}   /></div>
                            <input type="text" onChange={e => filterbyexercise(e.target.value)} placeholder="Filter by exercise title" className="input focus:outline-none rounded-r-lg rounded-l-none pl-0  w-full bg-gray-200 " />
                        </th>
                        <th className='lg:w-50'>

                        </th>
                        <th>
                            <select className="select w-full bg-gray-200 max-w-xs font-normal" onChange={(e) => handleChangeOrder(e.target.value)}>
                                <option disabled >Sort by most recent</option>
                                <option value='oldest_first'   >oldest ﬁrst</option>
                                <option value="newest_first" selected >newest ﬁrst</option>
                                
                            </select>
                        </th>
                    </tr>
                </thead>
                
                <tbody className={ props.loading === true ? "opacity-25" : "" } >

                {TestimonialsState.total_count > 0 && TestimonialsState.testimonials?.map((testimonial, key) => 
                    <tr key={key} >
                        <th className='flex space-x-2  justify-between p-6 w-50 '> 
                            <img src={testimonial.language.icon_url} width={40} height={40}  />
                            <img src={ProfileIcon} />
                        </th>
                        <td>
                            <p className='text-lg'> {testimonial.mentor}</p>
                            <p className='text-sm'>{testimonial.exercise.slug}</p>
                        </td>
                        <td>{ testimonial.content.length > 100 ? testimonial.content.substr(0, 5)+'...' :testimonial.content }</td>
                        <td className='flex justify-between items-center'>
                            <p>{ moment(testimonial.created_at).fromNow() }</p> 
                            <img src={arrowRight}   />
                        </td>
                    </tr>
                ) } 
                
                    
                { TestimonialsState.total_count === 0 &&  TestimonialsState.loading === false ?
                    <tr >
                    <td className=''> </td>
                    <td > </td>

                    <td><img src={Image404}  className='mr-0'  /></td>
                    
                    <td > </td>
                    <td> </td>
                </tr> : <></>
                }
                
                </tbody>
                <tfoot>
            <Pagination  />
                </tfoot>
            </table>
            
            
        </div>
    )
}

function mapStateToProps(state) {

    const { testimonials } = state
    return { loading: testimonials.loading }
}


export default connect(mapStateToProps)(Table)