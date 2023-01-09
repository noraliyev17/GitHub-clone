import React, { useState, useEffect } from 'react';
import '../Repositories/Repositories.css'

const Repositories = () => {

  const [data, setData] = useState("noraliyev17");
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${data}/repos`).then((response => response.json())).then((data) => setInfo(data))
  }, [])

  
  console.log(info.length);


  return (
    <>
      <div className='repositories-inner'>
        <div className="repositories-form">
          <input className='repositories-form-input' type="text" placeholder='Find a repository...' />
          <div className="repositories-form-box">
            <div className="repositories-form-box-1">Type   <i className='repository-icon bx bxs-down-arrow'></i>  </div>
            <div className="repositories-form-box-1">Lenguage   <i className='repository-icon bx bxs-down-arrow'></i></div>
            <div className="repositories-form-box-1">Sort   <i className='repository-icon bx bxs-down-arrow'></i></div>
          </div>
          <div className='repositories-form-box-2 d-flex align-items-center gap-1'><i class='bx bx-book-add'></i>    New</div>
        </div>

        <ul className='repository-list mt-3 pb-4'>

       {
        info.map((item)=>{
          return(
            <li className='repository-item' key={item.name}>
            <div className="repository-item-box-1 d-flex">
              <div className="repository-box-box">
                <a className='repository-item-a-link' href={item.html_url}>
                  <p className="repository-item-box-1-name">{item.name}</p>
                </a>
                <p className='main-item-project-public'>Public</p>
              </div>
              <div className="repositories-form-box-3">
                <i className="bxs-dashboard-d bx bx-star me-2"></i>
                <p className="sort-p">Star</p>
                <div className="icon-wrapper-box">
                  <i className='repository-icon bx bxs-down-arrow'></i>
                </div>
              </div>
            </div>
            <div className="repository-item-box-2 d-flex align-items-end w-100 justify-content-between mb-4">
              <div className='repository-item-box-2-text-box d-flex gap-4 mt-3'>
                <p className='repository-item-box-2-text-box-text'>
                  <span className='repository-item-box-2-text-box-span'>   </span>
                      {item.language}
                </p>
                <p className='repository-item-box-2-text-box-update'>Updated {item.updated_at}</p>
              </div>
              <div className='repository-item-box-2-hr'></div>
            </div>
          </li>
          )
        })
       }
          {/* <li className='repository-item'>
            <div className="repository-item-box-1 d-flex">
              <div className="repository-box-box">
                <p className="repository-item-box-1-name">Country</p>
                <p className='main-item-project-public'>Public</p>
              </div>
              <div className="repositories-form-box-3">
                <i className="bxs-dashboard-d bx bx-star me-2"></i>
                <p className="sort-p">Star</p>
                <div className="icon-wrapper-box">
                  <i className='repository-icon bx bxs-down-arrow'></i>
                </div>
              </div>
            </div>
            <div className="repository-item-box-2 d-flex align-items-end w-100 justify-content-between mb-4">
              <div className='repository-item-box-2-text-box d-flex gap-4 mt-3'>
                <p className='repository-item-box-2-text-box-text'>
                  <span className='repository-item-box-2-text-box-span'></span>
                  JavaScript
                </p>
                <p className='repository-item-box-2-text-box-update'>Updated 25 days ago</p>
              </div>
              <div className='repository-item-box-2-hr'></div>
            </div>
          </li> */}

        </ul>

      </div>
    </>
  );
};

export default Repositories;