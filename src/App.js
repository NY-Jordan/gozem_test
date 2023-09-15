import React, { useEffect } from 'react'
import Navbar from "./components/Navigation/Navbar";
import Header from './components/Header';
import Table from './components/Table/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getLanguagesService } from './redux/service/languagesService';
import { getTestimonialsService } from './redux/service/testimonialsServices';

function App() {
  const dispatch  = useDispatch();

  useEffect(() => {
      getLanguagesService(dispatch)
      getTestimonialsService(dispatch)
  }, [dispatch])

  
    const LanguagesState = useSelector(state => state.languages);
    const TestimonialsState = useSelector(state => state.testimonials);

  return (
    <>
      <Navbar languages={LanguagesState.languages} />
      <Header />
      <Table languages={LanguagesState.languages} TestimonialsState={TestimonialsState}/>
    </>
  );
}

export default App;
