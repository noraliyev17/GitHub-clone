import React, { useEffect, useState } from 'react';
import '../Overview/Overview.css'

const Overeview = () => {

  const [data, setData] = useState("noraliyev17");
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${data}/repos`).then((response => response.json())).then((data) => setInfo(data))
  }, [])

  info.splice(6);
  console.log(info);
  return (
    <>
      <div className="overview-inner">
        <div className="overview-inner-text-box">
          <p className='overview-inner-text-box-text-1'>Popular repositories</p>
          <p className='overview-inner-text-box-text-2'>Customize your pins</p>
        </div>

        <ul className='main-list'>

          {
            info.map((data) => {
              return (
                <li className='main-item' key={data.name}>
                  <div className="main-item-box">
                    <a className='main-item-a-link' href={data.html_url}>
                      <p className='main-item-project-name'>{data.name}</p>
                    </a>
                    <p className='main-item-project-public'>Public</p>
                  </div>
                  <p className='main-item-project-link'>https://noraliyev17.github.io/{data.name}/</p>
                  <div className='main-item-box-box'>
                    <div className='main-item-box-box-span'></div>
                    <p className='main-item-box-box-text'>JavaScript</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  );
};

export default Overeview;