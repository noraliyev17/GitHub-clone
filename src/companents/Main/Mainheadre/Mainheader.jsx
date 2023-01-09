import React,{useState,useEffect} from 'react';
import { NavLink } from 'react-router-dom'


const Mainheader = () => {

  const [data, setData] = useState("noraliyev17");
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${data}/repos`).then((response => response.json())).then((data) => setInfo(data))
  }, [])

  let activeStyle = {
    color: "black",
    borderBottom: "2px solid #FD8C73",
  };


  return (
    <>
      <div className="main-header">
        <ul className='main-header-list'>
          <NavLink className='main-header-item-navlink' to="/overview" aria-current="page" style={({ isActive }) => isActive ? activeStyle : undefined} >
            <li className='main-header-item'>
              <div className='mein-header-content-box'>
              <i class='bx bx-book-open'></i> 
                <p className='main-header-content-p'>Overview</p>
              </div>
            </li>
          </NavLink>
          <NavLink className='main-header-item-navlink' to="/repositories" aria-current="page" style={({ isActive }) => isActive ? activeStyle : undefined} >
            <li className='main-header-item'>
              <div className='mein-header-content-box'>
              <i class='bx bx-book-bookmark' ></i>
                <p className='main-header-content-p'>Repositories <span className='span-span'>{info.length}</span></p>
              </div>
            </li>
          </NavLink>
          <li className='main-header-item'>
            <div className='mein-header-content-box'>
            <i class='bx bx-layout'></i>
              <p className='main-header-content-p'>Projects</p>
            </div>
          </li>
          <li className='main-header-item'>
            <div className='mein-header-content-box'>
            <i class='bx bx-cube'></i>
              <p className='main-header-content-p'>Packages</p>
            </div>
          </li>
          <li className='main-header-item mhi-stars'>
            <div className='mein-header-content-box'>
              <i className="bxs-dashboard-d bx bx-star me-2"></i>
              <p className='main-header-content-p'>Stars</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Mainheader;