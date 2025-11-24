import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { AuthContext } from "../Context/AuthContext";


const AnimatedCard = ({ icon, title, lines, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay }}
    viewport={{ once: true }}
    className="flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-br from-[#0d1b2a] via-[#102040] to-[#0a1320] shadow-lg hover:shadow-[#39a3d1] transition-all duration-500 text-center"
  >
    <div className="text-[#56c5f4] text-4xl mb-3">{icon}</div>
    <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
    {lines.map((line, idx) => (
      <p key={idx} className="text-gray-300 text-sm">{line}</p>
    ))}
  </motion.div>
);

const Contact = () => {
 
  const {contactRef} =useContext(AuthContext)
  return (
    <section ref={contactRef} className="py-24 px-6 container mx-auto sm:px-12 bg-[#050b18] text-white">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold text-center text-[#56c5f4] mb-12"
      >
        Get in Touch
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#0c172b] p-8 rounded-2xl shadow-lg flex flex-col gap-5"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Send a Message</h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-transparent border border-[#56c5f4] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#56c5f4] transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent border border-[#56c5f4] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#56c5f4] transition"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="bg-transparent border border-[#56c5f4] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#56c5f4] transition resize-none"
            ></textarea>
            <button className="bg-[#56c5f4] hover:bg-[#1b3a70] text-white py-3 rounded-lg font-semibold transition-all duration-300">
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info + Map */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            <AnimatedCard
              icon={<FaPhone />}
              title="Call"
              lines={["01753924093", "01753924094"]}
              delay={0.1}
            />
            <AnimatedCard
              icon={<FaEnvelope />}
              title="Email"
              lines={["saima@gmail.com", "support@example.com"]}
              delay={0.2}
            />
            <AnimatedCard
              icon={<CiLocationOn />}
              title="Address"
              lines={["Mohakhali, 123 Main Street, Dhaka, Bangladesh"]}
              delay={0.3}
            />
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg border border-[#56c5f4]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5254.062203577742!2d90.40840517598211!3d23.77985165974876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1762890347353!5m2!1sen!2sbd"
              className="w-full h-64 sm:h-80"
              allowFullScreen=""
              loading="lazy"
              title="Map"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
