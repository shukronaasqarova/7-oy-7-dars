// components/Home.js
import React from 'react';
import Header from '../components/Header';
import call from '../assets/phone.svg';
import email from '../assets/email.svg';
import addres from '../assets/addres.svg';
import background from '../assets/background.png';
import { useSelector } from 'react-redux';

function Home() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}>
      <Header />
      <div className="relative">
        <h3 className='text-center text-xl font-semibold mt-20'>Contact Us</h3>
        <h1 className='text-center font-semibold text-3xl mt-5'>
          Say <span className='text-blue-600'>Hello!</span> We’re always here to help.
        </h1>
        <p className='text-center mt-10'>
          Interested in learning more about SmartMoving? Give us a call or send an email and one of our <br />
          team members will be happy to assist you.
        </p>
        <div className='flex gap-20 justify-center items-center mt-20'>
          <div className='flex gap-5 shadow-sm p-4'>
            <div>
              <img src={call} alt="Phone" />
            </div>
            <div>
              <h4>CALL US</h4>
              <h5>+1 (214) 960 4130</h5>
            </div>
          </div>
          <div className='flex gap-5 shadow-sm p-4'>
            <div>
              <img src={email} alt="Email" />
            </div>
            <div>
              <h4>EMAIL US</h4>
              <h5>hello@aiinfo.com</h5>
            </div>
          </div>
        </div>
        <div className='flex gap-5 shadow-sm p-5 justify-center items-center mt-5'>
          <div>
            <img src={addres} alt="Address" />
          </div>
          <div>
            <h4>HEADQUARTERS</h4>
            <h5>12720 Hillcrest Road Suite 980, Dallas, TX 75230</h5>
          </div>
        </div>
      </div>

      <div 
        style={{ 
          backgroundColor: darkMode ? '#333' : '#000',
          backgroundImage: `url(${background})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',
          height: '50vh', 
          width: '100%',
          display: 'flex',
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          color: 'white',
          padding: '2rem 0', 
          marginTop: '2rem'   
        }}
      >
        <h2 className="text-3xl font-bold mb-2">Sign up for your free 14 day trial now!</h2>
        <button className='bg-blue-600 text-white px-4 py-2 mt-4 rounded-md'>Get Started for free</button>
      </div>
    </div>
  );
}

export default Home;