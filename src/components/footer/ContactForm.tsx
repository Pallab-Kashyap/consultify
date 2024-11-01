import { useEffect, useState } from 'react'
import sendMail, { ContactData } from '../../utils/SendMail';
import FormInput from './FormInput';
import contactImg from "../../assets/contact-us-img.png";
import loadAnimation from "../../assets/mailLoadingAnimation.gif"

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail]= useState('')
    const [message, setMessage]=useState('')
    const [phone, setPhone] = useState('')
    const [mailState, setMailState] = useState(false)
    const [popUp, setPopUp] = useState(false)
    const [popUpMsg, setPopUpMsg] = useState(false)
  
    const handleClick = async (e: React.MouseEvent) => {
      e.preventDefault()
      setMailState(true)
      const data: ContactData = {
        name : name,
        email : email,
        phone : phone,
        message: message,
      }
  
      const res = await sendMail(data)
      setPopUp(true)
      setPopUpMsg(res)
      setMailState(false)
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
    }

    useEffect(()=>{
      setTimeout(()=>{
        setPopUp(false)
      }, 4000)
    },[popUp])
   
    return (
      <div className="bg-[#171616] py-16 lg:py-16" id='Contact-Us'>
        <div className="container mx-auto px-4 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-40">
            <div className="relative">
              <img
                src={contactImg}
                alt="Contact Illustration"
                className="rounded-lg shadow-2xl "
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
            </div>
  
            <div className="w-full lg:w-1/2">
              <div className="max-w-lg mx-auto lg:mx-0">
                <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">
                  Get in Touch
                </h2>
                <p className="text-gray-400 mb-8">
                  Connect with us for expert advice.
                </p>
  
                <form className="space-y-6">
                  <FormInput
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    // onChange={(e) => setFormState({...formState, name: e.target.value})}
                    onChange={setName}
                  />
                  <FormInput
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={setEmail}
                    />
                  <FormInput
                    type="number"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={setPhone}
                    />
                  <div>
                    <textarea
                      placeholder="How can we assist you?"
                      rows={4}
                      className="w-full p-3 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      value={message}
                      onChange={(e)=>setMessage(e.target.value)}
                    />
                  </div>
                  <button className={`w-full bg-black text-white ${mailState ? 'py-[2px]' : 'py-3'} rounded-md hover:bg-gray-800 transition transform flex justify-center`}
                    onClick={handleClick}
                  >
                    {mailState ? (
                      <img src={loadAnimation} alt="" className='h-[43px]' />
                    ) : 'Send message'}
                  </button>
                  {popUp && 
                    <p className={`text-white absolute sm:right-36 ${popUpMsg ? 'text-green-500' : 'text-red-500' }`}>
                      {popUpMsg ? 'Emial sent successfully. We will contact you soon': 'Oops somthing went wrong. Please try later'}</p>
                  }
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default ContactForm