import React, { useEffect, useState } from 'react';
import '../Followers/Followers.css'


const Followers = () => {

  const [name, setName] = useState("");
  const [infoname, setInfoname] = useState([]);
  const [data, setData] = useState("noraliyev17");
  const [info, setInfo] = useState([]);
 

  let arry = [];

  useEffect(() => {
    {
      fetch(`https://api.github.com/users/${data}/followers`).then((response => response.json())).then((data) => setInfo(data))
    }
  }, [])

console.log(info);
  return (
    <>
      {

      }
      <ul className='followers-list'>
        {
          info.map((item) => {
            return (
              <li className='followers-item' key={item.login}>
                <div className="followers-item-box d-flex">
                  <a className='followers-item-a-link' href={item.html_url}>
                    <div className="d-flex gap-4">
                      <img className='followers-item-img' src={item.avatar_url} alt="avatar"/>
                      <div className="followers-item-name-box d-flex gap-2 mt-1">
                        <p className='followers-item-name'>	{item.login} </p>
                        <p className='followers-item-name-link'>	AsadulloAkramov </p>
                      </div>
                    </div>
                  </a>
                  <button className='followers-btn'>Unfollow</button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </>
  );
};

export default Followers;