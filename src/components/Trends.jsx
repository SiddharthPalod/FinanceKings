import React from "react";
import {Tilt} from "react-tilt"; // Corrected import
import { motion } from "framer-motion";
import projects from "./constant";

const ProjectCard = ({
  name,
  description,
}) => {
  return (
    <motion.div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full border-4 hover:border-green-400'
      >
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Trends = () => {
  return (
    <>
      <motion.div className="text-green-300" >
        <h1 className="text-5xl mt-5">Finance Kings</h1>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          className='mt-3 text-[17px] max-w-3xl leading-[30px] text-white box-border border-5 border-white'
        >
        Finance Kings is your go-to source for 24/7 financial updates, 
        market insights, and investment analysis. Stay informed about the latest developments 
        in the world of finance, from stock market trends to economic indicators, and make well-informed decisions 
        for your financial future.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default Trends;
