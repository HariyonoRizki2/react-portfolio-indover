import React from 'react';
import "./Contact.scss";
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="container" id="contact">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="title"
      >
            <span>mari terhubung</span>
            <h1>Hubungi Aku</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
          className='contact_left_container'>
          <h3>Hanya menyapa!</h3>
          <p className='contact_text'>Mari bicara singkat tentang Rancangan Projek Anda bersama Saya!</p>
          {contacts.map(contact => {
            return (
              <div className='contact_left' key={contact.id}>
                <div className="icon">
                  {contact.icon}
                </div>
                <p>{ contact.infoText}</p>
              </div>
            )
          })}
          <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
            return (
              <div key={index} >
                {socialIcon}
              </div>
            )
          })}
          </div>
        </motion.div>
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [150,0], opacity: 1 }}
          transition={{duration: 1}}
          className="contact_right"
        
        >
          <h3>Lebih Terhubung</h3>
          <form method="POST" action="https://formsubmit.co/nabilaputridwianjani526@gmail.com">
          <div className="row">
            <input type="text" name="Front Name" placeholder='Nama Depan' />
            <input type="text" name="Last Name" placeholder='Nama Belakang'/>
          </div>
          <div className="row">
            <input type="text" name="WhatsApp" placeholder='Nomor Whatsapp' />
            <input type="email" name="Email Address" placeholder='Alamat Email' />
          </div>
          <div className="row">
            <textarea name="Messages" placeholder='Pesan'></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{duration: 0.3}}
            className="btn"
            type="submit"
          >
           Kirim
          </motion.button>
         </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
