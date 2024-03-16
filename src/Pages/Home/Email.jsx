import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function EmailForm() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const templateParams = {
      email: email,
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
    <form className='text-white pt-14' onSubmit={handleSubmit}>
      { !success && <div>
        <input
          className='bg-[#0D0D0D] border-b border-[#aaaaaa] py-2 w-72 px-4 justify-center mx-auto'
          placeholder='Email Address'
          type="email"
          id="email"
          value={email}
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <div>
          <button className='bg-[#d8bb6c] px-10 tracking-wider py-2 md:mt-10 mt-5 text-white' type="submit">
            {loading ? 'Loading...' : 'Submit'}
          </button>
        </div>
      </div>}
      {success && <p>Email sent successfully!</p>}
    </form>
  );  
}

export default EmailForm;