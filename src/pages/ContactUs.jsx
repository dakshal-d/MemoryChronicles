import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
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
      


      <div className="max-w-md w-full p-6 rounded-lg shadow-lg bg-white mt-4 py-4">
        <div className="max-w-md w-full p-6 mt-4">
          <Player
            autoplay
            loop
            src="https://lottie.host/8ba3374f-5db4-4e48-bd26-a3af174fdddc/Un4mCe9hir.json"
            className="h-200"
          >
            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
          </Player>
        </div>
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">Contact us</h2>
        <p className="text-gray-800 mb-6 text-center">
          We're here to help. Whether you have a question about our information or services,
          or just want to say hello, we'd love to hear from you. You can reach us using any
          of the following methods:
        </p>
        <div className="py-2">

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


// import React, { useState, useEffect, useRef } from 'react';
// import CountUp from 'countup';
// import 'material-design-icons-iconfont';

// const Card = () => {
//   const [cardOpen, setCardOpen] = useState(false);
//   const cardRef = useRef(null);
//   const totalRef = useRef(null);
//   const deviceRefs = useRef([]);

//   const cardData = () => ({
//     countUp: (target, startVal, endVal, decimals, duration) => {
//       const countUp = new CountUp(target, startVal || 0, endVal, decimals || 0, duration || 2, {
//         prefix: '$',
//       });
//       countUp.start();
//     },
//     sessions: [
//       {
//         label: 'Phone',
//         size: 60,
//         c: 25705,
//         color: 'green-500',
//       },
//       {
//         label: 'Tablet',
//         size: 30,
//         c: 12852,
//         color: 'green-400',
//       },
//       {
//         label: 'Desktop',
//         size: 8,
//         c: 3427,
//         color: 'green-300',
//       },
//       {
//         label: 'Other',
//         size: 2,
//         c: 856,
//         color: 'green-200',
//       },
//     ],
//   });

//   useEffect(() => {
//     if (cardOpen) {
//       cardData().countUp(totalRef.current, 0, 42842, null, 2);
//       cardData().sessions.forEach((el, i) =>
//         cardData().countUp(deviceRefs.current[i], 0, cardData().sessions[i].c, null, 1.6)
//       );
//     }
//   }, [cardOpen]);

//   useEffect(() => {
//     setTimeout(() => {
//       setCardOpen(true);
//     }, 100);
//   }, []);

//   return (
//     <div className="min-w-screen bg-white h-screen flex items-center justify-center px-4 py-4">
//       <div className="bg-slate-50 text-black-500 rounded shadow-xl py-5 px-5 w-full sm:w-2/3 md:w-1/2 lg:w-2/3">
//         <div className="flex w-full">
//           <h3 className="text-lg font-semibold leading-tight flex-1">TOTAL INCOME</h3>
//           <div className="relative h-5 leading-none">
//             <button
//               className="text-xl text-gray-900 hover:text-gray-500 h-6 focus:outline-none"
//               onClick={() => setCardOpen((prev) => !prev)}
//             >
//               <i
//                 className={`mdi mdi-chevron-${cardOpen ? 'up' : 'down'}`}
//                 style={{ lineHeight: '0' }}
//               />
//             </button>
//           </div>
//         </div>
//         <div
//           className="relative overflow-hidden transition-all duration-500"
//           ref={cardRef}
//           style={{ maxHeight: cardOpen ? `${cardRef.current.scrollHeight}px` : '0', opacity: cardOpen ? 1 : 0 }}
//         >
//           <div>
//             <div className="pb-4 lg:pb-6">
//               <h4 className="text-2xl lg:text-3xl text-black font-semibold leading-tight inline-block" ref={totalRef}>
//                 0
//               </h4>
//             </div>
//             <div className="pb-4 lg:pb-6">
//               <div className={`overflow-hidden rounded-full h-3 bg-slate-50 flex transition-all duration-500 ${cardOpen ? 'w-full' : 'w-0'}`}>
//                 {cardData().sessions.map((item, index) => (
//                   <div
//                     key={index}
//                     className={`h-full bg-${item.color}`}
//                     style={{ width: `${item.size}%` }}
//                   />
//                 ))}
//               </div>
//             </div>
//             <div className="flex -mx-4">
//               {cardData().sessions.map((item, index) => (
//                 <div
//                   key={index}
//                   className={`w-1/3 px-4 ${index !== 0 ? 'border-l border-gray-700' : ''}`}
//                 >
//                   <div className="text-sm">
//                     <span
//                       className={`inline-block w-2 h-2 rounded-full mr-1 align-middle bg-${item.color}`}
//                     />
//                     <span className="align-middle text-gray-500">{item.label}</span>
//                   </div>
//                   <div className="font-medium text-lg text-black" ref={(ref) => (deviceRefs.current[index] = ref)}>
//                     0
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
