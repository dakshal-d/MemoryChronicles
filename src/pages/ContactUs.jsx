import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// require("dotenv").config();

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_m2uv4y3', 'template_rbddve5', form.current, 'pU2Br9ZpJz-XjRLTv')
      .then((result) => {
        console.log(result.text);
        toast.success('Message sent successfully');
      }, (error) => {
        console.log(error.text);
        toast.error('Failed to send message');
      });
    form.current.reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full p-6 rounded-lg shadow-lg bg-white">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">Contact us</h2>
        <p className="text-gray-800 mb-6 text-center">
          We're here to help. Whether you have a question about our information or services,
          or just want to say hello, we'd love to hear from you. You can reach us using any
          of the following methods:
        </p>
        <div className="py-2">
          <div className="text-center py-1">
            <p className="text-gray-800 text-center">Surat, Gujarat</p>
          </div>
          <div className="text-center py-1">
            <p className="text-gray-800 text-center">+91 1234567890</p>
          </div>
          <div className="text-center py-1">
            <p className="text-gray-800">atoz1to9@gmail.com</p>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="mb-6">
          <div className="mb-4">
            <input
              type="text"
              className="form-input w-full px-4 py-3 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              placeholder="Name"
              name="name"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="form-input w-full px-4 py-3 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              placeholder="Email address"
              name="email"
            />
          </div>
          <div className="mb-4">
            <textarea
              className="form-textarea w-full px-4 py-3 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded focus:outline-none focus:ring-purple-500 focus:border-purple-500 resize-none"
              rows="3"
              placeholder="Message"
              name="text"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-purple-700 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out"
          >
            Send
          </button>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
};

export default ContactUs;