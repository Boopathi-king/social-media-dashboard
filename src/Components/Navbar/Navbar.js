import React, {useState} from 'react';
import './Navbar.css';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const handleChange = () => {
    setToggle(!toggle);
    document.body.classList.toggle('light-theme');
  };

  return (
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
  )
}

export default Navbar