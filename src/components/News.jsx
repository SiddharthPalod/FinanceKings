import React, { useEffect, useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

const Box = ({ title, description, image, imagelink }) => {
  return (
    <motion.div
    onClick={() => window.open(imagelink, "_blank")}>
      <Tilt
        options={{
          max: 30,
          scale: 1,
          speed: 500,
        }}
        className='p-3 sm:w-[360px] w-full border-4 hover:border-green-400' //added responsive box
      >
        <div className='mt-3'>
          <h3 className='text-green-400 font-bold text-[24px] leading-6'>{title}</h3>
          <p className='text-white text-[14px]'>{description}</p>
        </div>

        <div className='relative w-full h-[230px] mt-5'>
            <div>
                <img
                    src={image}
                    alt='project_image'
                    className='w-full h-full hover:cursor-pointer'
                />
            </div>
          </div>

      </Tilt>
    </motion.div>
  );
};

const News = ({ offset, n, topic }) => {
  const [articles, setArticles] = useState([]);
  const apiKey = 'cc68e01925fa4ec6af57312ea47948b5';
  const endpoint = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`;

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'ok') {
          const limitedArticles = data.articles.slice(offset, offset + n);
          setArticles(limitedArticles);
        } else {
          console.error('Error fetching news');
        }
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
      });
  }, [offset, n]);

  return (
    <>
      <div className='mx-5 mt-10 flex flex-wrap gap-7'>
        {articles.map((article, index) => (
          <Box
            key={`article-${index}`}
            title={article.title}
            description={article.description}
            image={article.urlToImage}
            imagelink={article.url}
          />
        ))}
      </div>
    </>
  );
};

export default News;
