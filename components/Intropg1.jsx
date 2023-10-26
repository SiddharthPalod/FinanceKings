import React, { useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import { state } from ".";
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { DemoVR, introImg } from "../assets";


function Intropg1() {
  const snap = useSnapshot(state);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    if (isFullScreen) {
      enterFullScreen();
    } else {
      exitFullScreen();
    }
  }, [isFullScreen]);


  const enterFullScreen = () => {
    const video = document.getElementById('fullscreen-video');
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { // Firefox
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // Chrome, Safari, and Opera
      video.webkitRequestFullscreen();
    }
  };

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
      document.webkitExitFullscreen();
    }
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.div
          className="intro"
          key="modal"
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        >

          <h1 className="intro-title" style={{fontSize:"3em"}}> The Future of Learning is Here Beyond Books: VR-Powered Education  </h1>
          <p style={{width:"30em", position:"absolute", top:"17em", left:"10em", textAlign:"left", fontSize:"0.9em"}}>
          Welcome to EDU-VR, where we revolutionize education through the power of virtual reality. Our platform offers an immersive learning experience like no other, allowing students to step into dynamic virtual classrooms, explore interactive educational content, and connect with peers and educators from around the world. Say goodbye to traditional boundaries and hello to a new era of learning where knowledge comes to life in 3D. Join us on this exciting journey as we empower minds and reshape the future of education.
          </p>


        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Intropg1;
