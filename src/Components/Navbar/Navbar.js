import React, {useState,  useEffect} from 'react';
import './Navbar.css';
import Hero from './../Hero/hero';
import Content from '../Content/content';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('Light-theme', toggle);
  }, [toggle]);

  const handleChange = () => {
    setToggle(!toggle);
    document.getElementById('theme-wrapper').classList.toggle('light-theme');
  };

  return (
    <>
    <header className= {`header ${toggle ? 'Light' : ''} `} >
      <div className='dashboard'>
        <h1 className='dash-title'>Social Media Dashboard</h1>
        <p className='dash-total'>Total followers: 23,004</p>
      </div>
      <div className='toggle'>
      <p className='toggle-mode'>{toggle ? 'Light' :  'Dark'} Mode</p>
        <label aria-label='switch' className="switch">
          <input type="checkbox" onChange={handleChange} checked={toggle}/>
          <span className="slider round"></span>
        </label>
      </div>
      
    </header>
    <div id='theme-wrapper'>
    <Hero toggle={toggle} /> 
     <Content toggle={toggle} />
     </div>
     </>
  )
}

export default Navbar