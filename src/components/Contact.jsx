import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Sanjay Anbazhagan",
          from_email: form.email,
          to_email: "sanjayanbazhagan12@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  const contactInfo = [
    {
      type: "Email",
      value: "sanjayanbazhagan12@gmail.com",
      link: "mailto:sanjayanbazhagan12@gmail.com",
      icon: "📧"
    },
    {
      type: "Phone",
      value: "+91 90033 86363",
      link: "tel:+919003386363",
      icon: "📞"
    },
    {
      type: "Location",
      value: "Coimbatore, Tamil Nadu",
      link: "https://maps.google.com/?q=Coimbatore,Tamil+Nadu",
      icon: "📍"
    },
    {
      type: "LinkedIn",
      value: "LinkedIn Profile",
      link: "https://linkedin.com/in/sanjay-anbazhagan",
      icon: "💼"
    },
    {
      type: "GitHub",
      value: "GitHub Profile",
      link: "https://github.com/sanjayanbu12",
      icon: "💻"
    }
  ];

  return (
    <div className="w-full">
      {/* Header Section */}
      <motion.div className="text-center mb-12">
        <p className={`${styles.sectionSubText} text-center`}>Get in touch</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Contact.</h2>
        <p className="text-secondary text-[17px] max-w-3xl mx-auto mt-4">
          Ready to bring your ideas to life? Whether you need a full-stack MERN application, 
          AI-powered solutions, or real-time web applications, I'm here to help. 
          Let's discuss your project and create something amazing together!
        </p>
      </motion.div>

      {/* Contact Info Cards */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12"
        variants={slideIn("up", "tween", 0.1, 1)}
      >
        {contactInfo.map((contact, index) => (
          <motion.a
            key={contact.type}
            href={contact.link}
            target={contact.type === "LinkedIn" || contact.type === "GitHub" || contact.type === "Location" ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="bg-tertiary rounded-lg p-4 hover:bg-black-200 transition-colors duration-300 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-center">
              <div className="text-2xl mb-2">{contact.icon}</div>
              <h4 className="text-white font-semibold text-[14px] mb-1">{contact.type}</h4>
              <p className="text-secondary text-[12px] group-hover:text-white transition-colors">
                {contact.value}
              </p>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Main Contact Section */}
      <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <h3 className="text-white font-bold text-[24px] mb-4">Send me a message</h3>
          <p className="text-secondary text-[16px] mb-8">
            Have a project in mind? Fill out the form below and I'll get back to you within 24 hours.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='flex flex-col gap-6'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-3'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                required
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-3'>Your Email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                required
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-3'>Your Message</span>
              <textarea
                rows={6}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='Tell me about your project or how I can help you...'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none'
                required
              />
            </label>

            <button
              type='submit'
              disabled={loading}
              className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div>
      </div>

      {/* Additional Info Section */}
      <motion.div 
        className="mt-12 bg-black-100 rounded-2xl p-8"
        variants={slideIn("up", "tween", 0.3, 1)}
      >
        <h3 className="text-white font-bold text-[20px] mb-4">Why Work With Me?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="text-white font-semibold mb-2">Fast Delivery</h4>
            <p className="text-secondary text-[14px]">Quick turnaround times without compromising quality</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">🚀</div>
            <h4 className="text-white font-semibold mb-2">Modern Tech Stack</h4>
            <p className="text-secondary text-[14px]">MERN, GenAI, real-time applications, and cutting-edge technologies</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">🤝</div>
            <h4 className="text-white font-semibold mb-2">Collaborative Approach</h4>
            <p className="text-secondary text-[14px]">Regular updates and transparent communication throughout</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");