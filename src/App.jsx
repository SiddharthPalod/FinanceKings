import React, { useState } from 'react';
import { About, News } from './components';
import { Icon } from '@iconify/react';

function App() {
  const [newsCount, setNewsCount] = useState(9);
  const [loading, setLoading] = useState(false);

  const handleShowMoreClick = () => {
    setLoading(true);
    setTimeout(() => {
      setNewsCount(newsCount + 9);
      setLoading(false);
    }, 1000);
  };

  return (
    <main className="app transition-all ease-in">
      <About />
      <News offset={2} n={newsCount} topic={'finance'} />
      <div className="flex justify-center space-x-3 items-center mt-2 ">
        <button onClick={handleShowMoreClick} className='rounded-md bg-green-400 p-2 hover:bg-stone-800 hover:border-2 hover:text-green-400'>
          <p style={{ fontFamily: "sans-serif" }}>Show More</p>
        </button>
        {loading && <Icon icon="line-md:loading-twotone-loop" color="#00ff00" style={{transform:"scale(1.5)"}} />}
      </div>
    </main>
  );
}

export default App;
