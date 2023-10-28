import React, { useState } from 'react';
import { About, News } from './components';

function App() {
  const [newsCount, setNewsCount] = useState(9);
  const [loading, setLoading] = useState(false);

  const handleShowMoreClick = () => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
      setNewsCount(newsCount + 9);
      setShowMore(true);
    },1000);
  };

  return (
    <main className="app transition-all ease-in">
      <About />
      <News offset={2} n={newsCount} topic={'finance'} />
      <div className="flex justify-center items-center mt-2 ">
        <button onClick={handleShowMoreClick} className='rounded-md bg-green-400 p-2
         hover:bg-stone-800 hover:border-2 hover:text-green-400'>
          <p style={{fontFamily:"sans-serif"}}>Show More</p>
          {/* {loading && <LoadingIcon />} */}
        </button>
      </div>


    </main>
  );
}

export default App;
