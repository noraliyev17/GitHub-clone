import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import './Mainleft.css'

const Mainleft = () => {

  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/noraliyev17").then(response => response.json()).then(data => setInfo(data))
  }, [])

  return (
    <>
      <div className="main-left">
        <div className="main-left-inner">
          <img className='main-left-img' src={info.avatar_url} alt="noral1yev_17" />
          <div className="main-left-box">
            <p className='main-left-box-name'>{info.name}</p>
            <p className='main-left-box-tahallus'>{info.login}</p>
            <p className='main-left-box-job'><i class='bx bx-map' ></i>    {info.location}</p>
            <p className='main-left-box-job'><i class='bx bx-buildings' ></i> {info.company}</p>
             <p className='main-left-box-job'><i class='bx bx-paperclip' ></i> <a className='text-decoration-none' href={info.blog}>http://myurls.co/noral1yev_17</a> </p>
            <p className='main-left-box-job'><i class='bx bxl-twitter' ></i> {info.twitter_username}</p>
            <button className='main-left-button'>Edit profile</button>
          </div>
          <div className="main-left-box-2">
            <i className="bx bx-user fs-6"></i>
            <NavLink className="main-left-navlink" to="/followers">
              <p className='main-left-box-followers'>
                <span className='main-left-box-followers-span'>{info.followers}</span>
                followers
              </p>
            </NavLink>
            <NavLink className="main-left-navlink" to="/following">
              <p className='main-left-box-followers'>
                <span className='main-left-box-followers-span'>{info.following}</span>
                following
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainleft;