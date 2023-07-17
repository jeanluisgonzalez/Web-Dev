import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12
          min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {" "}
            {title}{" "}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[16px] max-w-3xl leading-[30px]"
      >
        I am a web developer with a strong skill set in JavaScript, React,
        Node.js, MongoDB, and MySQL. I specialize in building dynamic and
        engaging user experiences, utilizing my solid understanding of these
        technologies. <br />
        With JavaScript as my primary language, I create efficient frontend
        functionality and implement advanced interactive features. I have
        experience with React, allowing me to design reusable and scalable user
        interfaces that enhance performance and deliver a smooth user
        experience. <br />
        On the backend, I excel in developing server-side applications and APIs
        using Node.js and Express.js. I ensure secure authentication, handle
        data validation, and integrate databases like MongoDB and MySQL to build
        robust and reliable backend solutions. <br />
        My database expertise extends to both NoSQL (MongoDB) and relational
        databases (MySQL), enabling me to design efficient data models and write
        optimized queries. I seamlessly integrate databases with the backend
        stack to meet specific application requirements. <br />
        Passionate about continuous learning and professional growth, I stay
        updated with the latest industry trends and best practices.
        Collaborating effectively with cross-functional teams, I deliver
        high-quality solutions that meet business requirements.
      </motion.p>

      <div className="mt-14 flex flex-wrap gap-10">
        {services.map((services, index) => (
          <ServiceCard key={services.title} index={index} {...services} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
