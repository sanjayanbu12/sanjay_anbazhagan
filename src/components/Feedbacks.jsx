import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
 index,
  degree,
  institution,
  duration,
  cgpa,
  location,
  image,
  achievements,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <div className='mt-1'>
      <h3 className='text-white font-bold text-[20px] leading-[30px]'>{degree}</h3>
      <p className='text-secondary text-[16px] mt-2'>{institution}</p>
      <p className='text-secondary text-[14px] mt-1'>{location}</p>
      
      <div className='mt-4 flex justify-between items-center'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>Duration:</span> {duration}
          </p>
          {cgpa && (
            <p className='mt-1 text-white font-medium text-[16px]'>
              <span className='blue-text-gradient'>CGPA:</span> {cgpa}
            </p>
          )}
        </div>

        <img
          src={image}
          alt={`${institution}-logo`}
          className='w-16 h-16 rounded-full object-cover'
        />
      </div>

      {achievements && achievements.length > 0 && (
        <div className='mt-4'>
          <p className='text-white font-medium text-[14px] mb-2'>Key Highlights:</p>
          <ul className='list-disc list-inside space-y-1'>
            {achievements.map((achievement, idx) => (
              <li key={idx} className='text-secondary text-[12px]'>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </motion.div>
);


const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My academic journey</p>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((edu, index) => (
          <FeedbackCard key={edu.institution} index={index} {...edu} />
        ))}
      </div>
    </div>
  );
};


export default SectionWrapper(Feedbacks, "testimonials");