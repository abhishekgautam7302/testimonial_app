
import './App.css';
import React from 'react';
import reviews from "./data";
import Testimonial from './component/Testimonial';

function App() {
  return (
    <div className='flex flex-col w-[100vw] h-[100vh] justify-center item-center bg-gray-200 rounded-md'>

      <div className="text-center">
        <h1 className='text-4xl font-bold'>Our Testimonials</h1>
        <div className='bg-violet-400 h-[4px] 
        w-1/6 mt-1 mx-auto '></div>

        <Testimonial reviews={reviews} />
      </div>

    </div>
  );
}

export default App;
