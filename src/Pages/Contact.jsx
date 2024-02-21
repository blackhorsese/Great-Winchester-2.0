import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Nav from './Navbar';
import Footer from './Home/Footer';

function Contact () {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState ('');
  const [number, setNumber] = useState ('');
  const [subject, setSubject] = useState ('');
  const [message, setMessage] = useState ('');

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const templateParams = {
        name: name,
        company: company,
        email: email,
        number: number,
        subject: subject,
        message: message,
    };
    emailjs.send(
      'service_ckzlh2f',
      'template_uwmp5uo',
      templateParams,
      'QQIaVyUi87kjZFhBr'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setLoading(false);
      });
  };

  return (
    <>
      <Nav/>
      <div className='text-white md:py-40 py-16 md:px-10 px-5 pt-20 max-w-screen-lg mx-auto bg-[#0D0D0D] md:bg-transparent'>
        <div className='py-10 mx-auto justify-center text-center'>
          <h1 className='md:text-5xl text-3xl font-semibold'>
            Need to contact us?
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          { !success && 
          <div className='mx-auto'>
            <div className='md:grid md:grid-cols-2 gap-8'>
              <input
                className='bg-[#0D0D0D] border border-[#AB905C] border-opacity-30 py-2 w-full px-4 mx-auto'
                placeholder='Full Name'
                type="name"
                id="name"
                value={name}
                required
                onChange={(event) => setName(event.target.value)}
              />
              <input
                className='bg-[#0D0D0D] border border-[#AB905C] border-opacity-30 py-2 w-full px-4 mx-auto mt-8 md:mt-0'
                placeholder='Company Name'
                type="company"
                id="company"
                value={company}
                required
                onChange={(event) => setCompany(event.target.value)}
              />
              <input
                className='bg-[#0D0D0D] border border-[#AB905C] border-opacity-30 py-2 w-full px-4 mx-auto mt-8 md:mt-0'
                placeholder='Email Address'
                type="email"
                id="email"
                value={email}
                required
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                className='bg-[#0D0D0D] border border-[#AB905C] border-opacity-30 py-2 w-full px-4 mx-auto mt-8 md:mt-0'
                placeholder='Phone Number'
                type="number"
                id="number"
                value={number}
                required
                onChange={(event) => setNumber(event.target.value)}
              />
            </div>
            <input
              className='bg-[#0D0D0D] border border-[#AB905C] border-opacity-30 py-2 w-full px-4 mx-auto mt-8'
              placeholder='Subject'
              type="subject"
              id="subject"
              value={subject}
              required
              onChange={(event) => setSubject(event.target.value)}
            />
            <textarea
            className='bg-[#0D0D0D] border border-[#AB905C] border-opacity-30 pb-52 py-5 w-full px-4 mx-auto mt-8 overflow-y-hidden'
            placeholder='Message'
            type="message"
            id="message"
            value={message}
            required
            onChange={(event) => setMessage(event.target.value)}
            />
            <div className='items-center'>
              <button className='bg-[#AB905C] px-10 tracking-wider py-2 md:mt-10 mt-5 text-white' type="submit">
                {loading ? 'Loading...' : 'Submit'}
              </button>
            </div>
          </div>}
          {success && <p className='justify-center mx-auto text-center pt-10 font-semibold text-[#AB905C]'>Email sent successfully!</p>}
        </form>
      </div>
    <Footer/>
    </>
  );  
}

export default Contact;