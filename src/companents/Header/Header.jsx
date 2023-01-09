import React,{useState,useEffect} from 'react';
import '../../companents/Header/Header.css'
import Form from '../Form/Form';
import Navbar from './Navbar';
import svgqongiroq from '../../assets/img/bell.svg'
import svgplus from '../../assets/img/plus.svg'
import Logo from './Logo';
import "./Navbar.css"


const Header = ({malumot,setMalumot}) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/noraliyev17").then(response => response.json()).then(data => setInfo(data))
  }, [])
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="inner">
            <div className="logo-form-nav">
              <Logo/>
              <Form malumot={malumot} setMalumot={setMalumot}/>
              <div className="nav-box">
                <Navbar />
              </div>
            </div>
            <div className='img-box'>
              <img src={svgqongiroq} alt="qong'iroq" />
              <div className="">
                <img className='plus-img' src={svgplus} alt="plus_icon" />
                <i className='bx bxs-down-arrow'></i>
              </div>
              <div className="shahsiy-rasm-box">
                <img className='img-shahsiy' src={info.avatar_url} alt="shahsiy_rasm" width={20} height={20} />
                <i className='bx bxs-down-arrow'></i>              
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;