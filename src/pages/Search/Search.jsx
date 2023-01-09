import React, { useState, useEffect } from 'react';

import '../Search/Search.css'

const Search = ({malumot}) => {

  const [a, setA] = useState(false);
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);

  


  console.log(malumot);
  let login = "" 
  malumot.items ? login = malumot.items[0].login : login
  let image = "T" 
  malumot.items ? image = malumot.items[0].avatar_url : image
  let link = "" 
  malumot.items ? link = malumot.items[0].html_url : link
  // if(malumot.items){
  //   setA(true)
  //   setInfo(malumot.items)
  // }

  return (
    <>
      <ul className='followers-list'>

{/* {
  a ? (malumot.items.map((item)=>{
    return(
      <p key={item.id}>salom</p>
    )
  })
  
  ):(
    <p>Hayr</p>
  )
  } */}

{/* {setA(false)} */}
       
        <li className='followers-item'>
          <div className="followers-item-box d-flex">
            <div className="d-flex gap-4">
              {/* <img className='followers-item-img' src="" alt="avatar" /> */}
              <div className="followers-item-name-box d-flex gap-2 mt-1">
                <img className='followers-item-img' src={image} alt="" />
                <p className='followers-item-name'><a className='text-decoration-none text-dark' href={link}>{login}</a></p>
              </div>
            </div>
            <button className='followers-btn'>Unfollow </button>
          </div>
        </li>

      </ul>
    </>
  );
};

export default Search;