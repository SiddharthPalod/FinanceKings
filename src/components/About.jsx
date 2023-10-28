import React from 'react'
import { useSnapshot } from "valtio";
import { state } from ".";
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';


function About()  {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.about && (
        <motion.div
          key="modal"
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}>
            Template builder
        </motion.div>)}
        <div class="box h-32 w-32 bg-gradient-to-r from-pink-500 to-red-500">
        </div>

        </AnimatePresence>
  )
}
export default About