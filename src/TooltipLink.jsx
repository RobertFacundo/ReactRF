import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from '@mui/material';

const TooltipLink = ({ title, href, icon, initial, animate, exit, transition }) => {
  const fontBuda = {
    fontFamily: 'Buda, sans-serif',
  };

  return (
    <Tooltip
      title={title}
      placement="top"
      enterDelay={300}
      leaveDelay={200}
      componentsProps={{
        tooltip: {
          sx: {
            ...fontBuda,
            bgcolor: 'rgba(58, 57, 58, 1)',
            color: 'white',
            fontSize: '14px',
            borderRadius: '4px',
            letterSpacing: '0.5px',
          },
        },
      }}
    >
     <div>
       <motion.a
         target="_blank"
         href={href}
         className="text-6xl link-hover text-gray-800 hover:text-black dark:text-slate-300 dark:hover:text-white transition-colors duration-700"
         initial={initial}
         animate={animate}
         exit={exit}
         transition={transition}
       >
         <i className={`fa ${icon} pb-1`}></i>
       </motion.a>
     </div>
    </Tooltip>
  );
};

export default TooltipLink;