import React from 'react';
import Review from './Review';
//react icon component
// import { FaGithubSquare } from 'react-icons/fa';
function App() {
  // return <h2>reviews project setup
  {/* //react component icon component github */}
  {/* <FaGithubSquare className='icon'/>          */}
  // </h2>
  return (
    <main>
    <section className='container'>
     <div className='title'>
      <h2>Our Reviews</h2>
      <div className='underLine'></div>
     </div>
     <Review/>
    </section>
    </main>
  )
}

export default App;
