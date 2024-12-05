import React, { useState } from 'react'
import { PaystackButton } from 'react-paystack';
import logo from "../assets/logo.png"

const InputField = ({ label, type, name, value, onChange, placeholder, required = false }) => (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-[100%] px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );

const Pay = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        amount: '',

    })

    const publicKey = 'pk_test_989533b5b14990abef038eb8875bd218736adb65'

    const amountInKobo = formData.amount ? parseInt(formData.amount) * 100 : 0;

    const onSuccess = (reference) => {
        alert('Thank you for your donation!');
        console.log(reference);
    }

    const onClose = () => console.log('Payment closed');

const handleChange = (e) => {
    const {name, value} = e.target;

    console.log(`${name}: ${value}`)
    setFormData({
        ...formData,
        [name]: value,
    })
}

  return (
    <div className='flex flex-col items-center justify-center w-full h-screen bg-gradient-to-r from-[#85FFBD] to-[#FFFB7D]'>
      <div className='w-[90%] md:w-2/6 h-4/5 bg-white rounded-lg flex flex-col items-center justify-center gap-[2rem] md:gap-[0]'>

      <div className='w-full h-[30%] flex flex-col items-center justify-center'>
        <div className='w-[60px] h-[60px]'>
        <img src={logo} alt="logo" className='w-[100%] h-[100%] object-contain' />

        </div>
        <h2 className='font-bold text-black text-2xl'>Donation Form</h2>
        <p className='font-normal text-black text-sm'>Thanks for donating to our cause</p>

      </div>
      <div className='w-full flex flex-col items-center justify-center h-[70%]'>

      <form  onSubmit={(e) => e.preventDefault()} className='w-[90%] h-[100%] md:h-[80%]'>
      <InputField
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

<InputField
          label="Email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          required
        />

<InputField
          label="Amount"
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Enter donation amount"
          required
        />

        <div className='w-full flex items-center justify-center'>
        <PaystackButton className='mt-2 md:mt-4 bg-[#FF3300] px-4 py-[3px] rounded-3xl hover:bg-green-400 text-white font-normal'
          email={formData.email}
          amount={amountInKobo}
          publicKey={publicKey}
          text="Proceed"
          onSuccess={onSuccess}
          onClose={onClose}
        />
        </div>
      </form>
      </div>

      </div>
    </div>
  )
}

export default Pay

// import React, { useState } from "react";
// import { PaystackButton } from "react-paystack";
// import logo from "../assets/logo.png";

// const InputField = ({
//   label,
//   type,
//   name,
//   value,
//   onChange,
//   placeholder,
//   required = false,
// }) => (
//   <div className="mb-4">
//     <label htmlFor={name} className="block text-sm font-medium text-gray-700">
//       {label}
//     </label>
//     <input
//       type={type}
//       id={name}
//       name={name}
//       value={value}
//       onChange={onChange}
//       placeholder={placeholder}
//       required={required}
//       className="w-[100%] px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//     />
//   </div>
// );

// const Pay = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     amount: "",
//   });

//   const publicKey = "pk_test_989533b5b14990abef038eb8875bd218736adb65";

//   const amountInKobo = formData.amount ? parseInt(formData.amount) * 100 : 0;

//   const onSuccess = (reference) => {
//     alert("Thank you for your donation!");
//     console.log(reference);
//   };

//   const onClose = () => console.log("Payment closed");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     console.log(`${name}: ${value}`);
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   return (
//     <div className="flex column items-center justify-center w-full h-screen bg-gradient-to-r from-[#85FFBD] to-[#FFFB7D]">
//       <div className="w-[90%] md:w-2/6 h-4/5 bg-white rounded-lg flex flex-col items-center justify-center gap-[2rem] md:gap-[0]">
//         <div className="w-full h-[30%] flex flex-col items-center justify-center">
//           <div className="w-[60px] h-[60px]">
//             <img
//               src={logo}
//               alt="logo"
//               className="w-[100%] h-[100%] object-contain"
//             />
//           </div>
//           <h2 className="font-bold text-black text-2xl">Donation Form</h2>
//           <p className="font-normal text-black text-sm">
//             Thanks for donating to our cause
//           </p>
//         </div>
//         <div className="w-full flex flex-col items-center justify-center h-[70%]">
//           <form
//             className="w-[90%] h-[100%] md:h-[80%] "
//             onSubmit={(e) => e.preventDefault()}
//           >
//             <InputField
//               label="Name"
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//               required
//             />
//             <InputField
//               label="Email"
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email address"
//               required
//             />
//             <InputField
//               label="Amount"
//               type="number"
//               name="amount"
//               value={formData.amount}
//               onChange={handleChange}
//               placeholder="Enter donation amount"
//               required
//             />
//             <div className="w-full flex items-center justify-center">
//               <PaystackButton
//                 className="mt-2 md:mt-4 bg-[#FF3300] px-4 py-[3px] rounded-3xl hover:bg-green-400 text-white font-normal"
//                 email={formData.email}
//                 amount={amountInKobo} 
//                 publicKey={publicKey}
//                 text="Proceed"
//                 currency="NGN" 
//                 onSuccess={onSuccess}
//                 onClose={onClose}
//               />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pay;
