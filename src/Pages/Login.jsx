import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (username.trim() === '') {
      setError('Please enter your username to continue.');
    } else {
      setError('');
      setCurrentStep(2);
    }
  };

  const handleBack = () => {
    setError('');
    setPassword('');
    setCurrentStep(1);
  };

  const handleLogin = () => {
    if (password.trim() === '') {
      setError('Please enter a password');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        alert('Login successful!');
      } else {
        setError('The information you entered does not match our records.');
        setPassword('');
      }
      setLoading(false);
    }, 2500);
  };

  return (
    <>
    <div id='Lplogin' className='min-h-screen overflow-hidden justify-center mx-auto'>
      <div className="flex-shrink-0 py-2 items-center duration-500 mx-auto md:px-20 px-5 bg-[#121212]">
        <a>
          <img width={190} className='items-center duration-500' src='./white-logo.png' alt='favicon.png'/>
        </a>
      </div>
      <div className='max-w-2xl mx-auto px-5 md:pt-20 pt-10'>
        <div className='bg-white md:px-10 md:py-16 px-5'>
          <h1 className='text-start md:text-4xl text-2xl md:pt-0 pt-10 font-semibold'>
            Welcome to the Great Winchester Portal
          </h1>
          <div className='md:py-20 py-10'> 
            {currentStep === 1 && (
              <div className=''>
                <div className=''>
                  <input className='w-full hover:border-b-2 border-b hover:border-[#121212] border-[#979797] py-2' placeholder='Username' required type="text" 
                  value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className='flex gap-2 mt-3'>
                  <input className='text-red-600' radioGroup='check' type='checkbox'/>
                  <p>Remember Me</p>
                </div>
                <div className='mt-10'>
                  {error && <div className='text-red-700 font-semibold'>{error}</div>}
                </div>
                <div className='text-end mx-auto justify-end pt-16'>
                  <button className='bg-[#121212] px-10 py-2 text-white tracking-wider hover:bg-opacity-80' onClick={handleNext}>Next</button>
                </div>
              </div>
            )}
            {currentStep === 2 && (
              <div>
                <div>
                  <input className='w-full hover:border-b-2 border-b hover:border-[#121212] border-[#979797] py-2' placeholder='Password' type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='mt-10'>
                  {error && <div className='text-red-700 font-semibold'>{error}</div>}
                </div>
                <div className='text-end mx-auto justify-end pt-16 flex gap-5'>
                  <button className='border px-10 py-2 border-[#D8BB6C] hover:border-[#121212]' onClick={handleBack}>Back</button>
                  <button className='bg-[#121212] px-10 py-2 text-white tracking-wider hover:bg-opacity-80' onClick={handleLogin} disabled={!password.trim() || loading}>{loading ? 'Login...' : 'Login'}</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='justify-center mx-auto text-center py-16'>
        <a className='text-white font-bold' href='/'>
          Home |
        </a>
      </div>

    </div>
  
    </>
  );
};

export default Login;
