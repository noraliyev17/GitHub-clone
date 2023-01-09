import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Followers from '../../../pages/Followers/Followers';
import Following from '../../../pages/Following/Following';
import Overeview from '../../../pages/Overview/Overview';
import Search from '../../../pages/Search/Search';
import Repositories from '../../../pages/Repositories/Repositories';
import '../../Main/Mainheadre/Mainheader.css'
import '../Main/mainstyle.css'
import Mainheader from '../Mainheadre/Mainheader';
import Mainleft from '../Mainleft/Mainleft';

const Main = ({ malumot, setMalumot }) => {
  console.log(malumot);
  return (
    <>
      <Mainheader />
      <div className="main-left-main-box">
        <Mainleft />
        <section className='main-section'>
          <Routes>
            <Route path='/' element={<Overeview />} />
            <Route path='/overview' element={<Overeview />} />
            <Route path='/repositories' element={<Repositories />} />
            <Route path='/followers' element={<Followers />} />
            <Route path='/following' element={<Following />} />
            <Route path='/search' element={<Search malumot={malumot} setMalumot={setMalumot}/>} />
          </Routes>
        </section>
      </div>
    </>
  );
};

export default Main;