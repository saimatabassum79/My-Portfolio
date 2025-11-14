import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {
  const { contactRef } = useContext(AuthContext);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8 },
    }),
  };

  const formVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section ref={contactRef} className="py-24 px-5 sm:px-8 lg:px-24  text-gray-100">
      
      {/* Title Section */}
      <motion.div
        className="text-center mb-12 space-y-3"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-4xl sm:text-5xl font-bold text-[#56c5f4]">Contact Me</div>
        
        <p className="text-gray-400 max-w-2xl mx-auto">
         Got a question or want to work together? I’d love to hear from you. Fill out the form and I’ll get back to you as soon as possible.
        </p>
      </motion.div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mb-10">
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="flex flex-col items-center  bg-gradient-to-br from-[#141c2f] via-[#132039] to-[#0e1424] hover:border  hover:border-[#56c5f4] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-500"
        >
          <div className="text-3xl text-[#56c5f4] bg-white/10 p-3 rounded-full mb-3">
            <FaPhone />
          </div>
          <h3 className="text-lg font-semibold text-gray-100 mb-1">Call </h3>
          <p className="text-gray-100">01753924093</p>
          <p className="text-gray-100">01753924094</p>
        </motion.div>

        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="flex flex-col items-center   bg-gradient-to-br from-[#141c2f] via-[#132039] to-[#0e1424] hover:border  hover:border-[#56c5f4] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="text-3xl text-[#56c5f4] bg-white/10 p-3 rounded-full mb-3">
            <MdOutlineMail />
          </div>
          <h3 className="text-lg font-semibold text-gray-100 mb-1">Email </h3>
          <p className="text-gray-100">saimatabassum549@gmail.com</p>
          <p className="text-gray-100">support@example.com</p>
        </motion.div>

        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="flex flex-col items-center  bg-gradient-to-br from-[#141c2f] via-[#132039] to-[#0e1424] hover:border  hover:border-[#56c5f4] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="text-3xl text-[#56c5f4] bg-white/10 p-3 rounded-full mb-3">
            <CiLocationOn />
          </div>
          <h3 className="text-lg font-semibold text-gray-100 mb-1">Address</h3>
          <p className="text-gray-100 text-center">
               Mohakhali, 123 Main Street, Dhaka, Bangladesh 🇧🇩.
          </p>
        </motion.div>
      </div>

      {/* Map & Form */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-sm"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5254.062203577742!2d90.40840517598211!3d23.77985165974876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1762890347353!5m2!1sen!2sbd"
            className="w-full h-80 sm:h-105 border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
          ></iframe>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={formVariants}
          className="w-full lg:w-1/2 bg-gradient-to-br from-[#141c2f] via-[#132039] to-[#0e1424]  border border-[#56c5f4] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="text-2xl font-semibold mb-6 text-gray-200">Send a Message</div>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full text-sm py-2 px-3 border border-[#56c5f4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#56c5f4] transition"
            />
            <input
              type="text"
              placeholder="Your Phone"
              className="w-full text-sm py-2 px-3 border border-[#56c5f4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#56c5f4] transition"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full py-2 text-sm px-3 border border-[#56c5f4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#56c5f4] transition"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full py-2 text-sm px-3 border border-[#56c5f4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#56c5f4] transition resize-none"
            ></textarea>
            <button className="bg-[#2ab1eb] hover:bg-[#1f6989] text-white py-2 rounded-md font-semibold transition-all duration-300">
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
