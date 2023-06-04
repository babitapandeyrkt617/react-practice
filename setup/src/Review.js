import React, { useState } from 'react';
import people from './data';
//font awesome in react lib..
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    //aaary index start with 0
  const[index, setIndex]=useState(0);       
  // console.log(people);
  const{name,job,image,text}=people[index]

  //if the no is biger when the last item in arry than return 0 if this no 
  //lass than 0 then return thelast item in the aay
  const checkNumber=(Number)=>{
if(Number>people.length-1){
  return 0;
}
if(Number< 0){
return people.length-1
}
return Number;
  }
//btn fun
  const nextPerson=()=>{
    setIndex((index)=>{
      let newIndex= index +1;
      return checkNumber(newIndex);
    })
  }

  
  const prevPerson=()=>{
    setIndex((index)=>{
      let newIndex= index -1;
      return checkNumber(newIndex);
    })
  }
  //randam btn
  const randomPerson=()=>{
    // console.log(Math.random())
    let randomNumber= Math.floor (Math.random()*people.length);
    if(randomNumber===index){
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
    // console.log(randomNumber)
  }




  return( <article className="review">
    <div className='img-container'>
      <img src={image} className='person-img'/>
      <span className='quote-icon'>
        <FaChevronRight/>
      </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft/>
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight/>
        </button>
        </div>
        <button className='random-btn' onClick={randomPerson}>
         surprise me
        </button>
     
   
  </article>
  )
};

export default Review;
