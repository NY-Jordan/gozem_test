import React, { useEffect, useState } from 'react'
import { FilterTestimonialsByLanguage } from '../../redux/actions/TestimonialsAction';
import { useDispatch, useSelector } from 'react-redux';
import { FilterTestimonialsService } from '../../redux/service/testimonialsServices';

export default function DropdownItem({icon, title, slug, num_exercises}) {
    const dispatch  = useDispatch();
    const TestimonialsState = useSelector(state => state.testimonials);
    const [language, setLanguage] = useState('');
    const handleChange = (value) => setLanguage(value);

    useEffect(() => {
        dispatch(FilterTestimonialsByLanguage(language))
    }, [language])

  return (
   
        <li>
            <div className='flex flex-row justify-between  items-center w-64 pr-2 hover:bg-slate-200	'>
                <div className='flex flex-row  items-center space-x-4'>
                    <input type="radio" name='language'   onClick={(e) => handleChange(e.target.value)} value={slug} class="d-block block  w-4 h-4 border-green-600 bg-green-600" />
                    <img src={icon} className='color-green' width={30} height={30}/>
                    <div className=''>{title}</div>
                </div>
                <div className=' border-solid border border-green-600 rounded-full h-8  pt-1 px-2 w-auto ' >
                    {num_exercises}
                </div>
            </div>
        </li>
  )
}
