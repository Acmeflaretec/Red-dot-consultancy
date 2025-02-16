'use client'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react';

const Progress: React.FC = () => {
   const count1 = useMotionValue(0);
   const count2 = useMotionValue(0);
   const count3 = useMotionValue(0);
   const experience = useTransform(count1, (value) => `${Math.round(value)}+`);
   const clients = useTransform(count2, (value) => `${Math.round(value)}+`);
   const sales = useTransform(count3, (value) => `${Math.round(value)} %`);

   useEffect(() => {
      animate(count1, 3, { duration: 2 });
      animate(count2, 40, { duration: 2 });
      animate(count3, 68, { duration: 2 });
   }, []);
   return (
      <div className=' h-[100px] md:h-[150px] w-full flex items-center justify-start border'>
         <div className='w-1/2   h-full flex flex-col items-center justify-center gap-2 px-5 md:px-16 '>
            <motion.h1 className="font-questrial text-3xl ">
               {experience}
            </motion.h1>
            <p className="text-gray-600 text-xs md:text-sm">
               Years of experiences
            </p>
         </div>
         <div className='w-1/2   h-full flex flex-col items-center justify-center gap-2 px-5 md:px-16 border-x-0 md:border-x border-l  '>
            <motion.h1 className="font-questrial text-3xl ">
               {clients}
            </motion.h1>
            <p className="text-gray-600 text-xs md:text-sm">
               Satisfied Clients
            </p>
         </div>
         <div className='w-1/3   hidden'>
            <div className='w-full h-full flex flex-col justify-center gap-2 px-5 md:px-16'>
               <motion.h1 className="font-questrial text-3xl ">
                  {sales}
               </motion.h1>
               <p className="text-gray-600 text-xs md:text-sm">
                  avg. Increase in Sales Revenue
               </p>
            </div>
         </div>
      </div>
   )
}

export default Progress