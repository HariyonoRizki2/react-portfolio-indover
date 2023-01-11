import React from 'react'
import portfolio from "../../../assets/img1.jpg"
import "./Home.scss"
import { motion } from 'framer-motion'


const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1
      }

    }
  }


  return (
    <motion.div className="container " id='home'
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        {
          duration: 2,
          delay: 0.5
        }
      }
    >
      <div className="profile">
        <img src={portfolio} alt="portfolio" />
      </div>
      <div className="profile_text">
        <h3 className='name'>Hai, Aku <span>Hariyono Rizki</span> </h3>
        <span className='job'>Berbasis di Indonesia</span>
        <span className='text'>Bersemangat<br /> untuk Berkreasi dan Berinovasi.</span>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          mari terhubung</motion.a>
        <div
          className="web"

        >
          Web Developer
        </div>
        <div
          className="ui"
        >
          Editor Foto
        </div>
        <div
          className="freelance"
        >
          Freelancer
        </div>
      </div>
    </motion.div>
  )
}

export default Home
