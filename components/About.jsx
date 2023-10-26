import React from 'react'
import { useSnapshot } from "valtio";
import { state } from ".";
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { abtImg } from '../assets';


function About()  {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.about && (
        <motion.div
          className="aboutx"
          key="modal"
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}>
            Template builder
        </motion.div>)}
        </AnimatePresence>
  )
}
export default About