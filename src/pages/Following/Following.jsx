import React, { useEffect, useState } from 'react';
import '../Following/Following.css'
import aaa from '../../assets/img/rasm.jpg'


const Following = () => {

  const [data, setData] = useState("noraliyev17 ");
  const [info, setInfo] = useState([]);


  useEffect(() => {
    {
      fetch(`https://api.github.com/users/${data}/following`).then((response => response.json())).then((data) => setInfo(data))
    }
  }, [])

  console.log(info);

  return (
    <>
      <ul className='followers-list'>

        {
          info.map((data) => {
            return (
              <li className='followers-item' key={data.login} >
                <div className="followers-item-box d-flex">
                  <div className="d-flex gap-4">
                    <a className='followers-item-a-link' href={data.html_url}>
                      <img className='followers-item-img' src={data.avatar_url} alt="avatar" />
                      <div className="followers-item-name-box d-flex gap-2 mt-1">
                        <p className='followers-item-name'>	 </p>
                        <p className='followers-item-name-link'>	{data.login} </p>
                      </div>
                    </a>
                  </div>
                  <button className='followers-btn'>Unfollow</button>
                </div>
              </li>
            )
          })
        }
        {/* <li className='followers-item' >
          <div className="followers-item-box d-flex">
            <div className="d-flex gap-4">
              <img className='followers-item-img' src={aaa} alt="avatar" />
              <div className="followers-item-name-box d-flex gap-2 mt-1">
                <p className='followers-item-name'>	 </p>
                <p className='followers-item-name-link'>	AsadulloAkramov </p>
              </div>
            </div>
            <button className='followers-btn'>Unfollow</button>
          </div>
        </li> */}
      </ul>
    </>
  );
};

export default Following;