"use client";
import React from 'react'
import {motion} from 'framer-motion'

const TrasitionVariants = {
initial: {
    y: "100%",
    height: '100%'
    },
    animate: {
        y: 0,
        height: '100%',
    },
    exit: {
        y: ["0%","100%"],
        height: ["0%","100%"]
    }
}

const Transition = () => {
  return (
    <div>
<motion.div 
        className='fixed right-0 h-screen w-screen bottom-full z-[30] bg-[#3300ff]'
        variants={TrasitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{delay: 0.2, duration: 0.4, ease: "easeInOut"}}
      />

<motion.div 
        className='fixed right-0 h-screen w-screen bottom-full z-[20] bg-[#7b00ff]'
        variants={TrasitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{delay: 0.3, duration: 0.4, ease: "easeInOut"}}
      />

<motion.div 
        className='fixed right-0 h-screen w-screen bottom-full z-[10] bg-[#9700ff]'
        variants={TrasitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        transition={{delay: 0.4, duration: 0.4, ease: "easeInOut"}}
      />
    </div>
  )
}

export default Transition