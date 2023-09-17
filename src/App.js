import React, { useEffect, useMemo } from 'react'
import Navbar from "./components/Navigation/Navbar";
import Header from './components/Header';
import Table from './components/Table/Table';
import { createStoreHook, useDispatch, useSelector } from 'react-redux';
import { getLanguagesService } from './redux/service/languagesService';
import { FilterTestimonialsService, getTestimonialsService } from './redux/service/testimonialsServices';
import { createSelector } from 'reselect'

function App() {
 

  const dispatch = useDispatch();
  const TestimonialsState = useSelector(state => state.testimonials);

  useMemo(() => 
    getLanguagesService(dispatch)
  , [])

  useEffect(() => {
    FilterTestimonialsService(dispatch, TestimonialsState);
  }, [TestimonialsState.order, TestimonialsState.language, TestimonialsState.exercise, TestimonialsState.current_page])

 


  return (
    <>
      <Navbar  />
      <Header />
      <Table />
    </>
  );
}

export default App;
