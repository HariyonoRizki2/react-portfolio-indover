import React from 'react'
import "./About.scss";

import { motion } from 'framer-motion';
import { bios } from '../../../Data';
import portfolio from "../../../assets/img2.jpg"
const About = () => {


  return (
    <div className="container " id='about'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title">
        <span>siapa aku?</span>
        <h1>Tentang Aku</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left">
          <motion.img src={portfolio}
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <p>Halo!, Perkenalkan Saya <strong>Hariyono Rizki</strong>, Status Saya saat ini yakni sebagai seorang Pelajar tingkat SMK dengan mengambil Mata Kejuruan Multimedia, Anda dapat melihat Resume Saya lebih lanjut pada Resume Saya.</p>

          <motion.a href='' download=""
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
           Unduh Resume
          </motion.a>
        </motion.div>

      </div>

    </div>
  )
}

export default About
