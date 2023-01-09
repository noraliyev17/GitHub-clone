import React, { useState, useEffect } from 'react';
import '../../companents/Form/form.css'
import { NavLink } from 'react-router-dom'

const Form = ({ malumot, setMalumot }) => {

  const [data, setData] = useState("")

  useEffect(() => {
    search
  }, [])

  const search = () => {
    fetch(`https://api.github.com/search/users?q=${data}`).then((response => response.json())).then((data) => { setMalumot(data) })
  }

  return (
    <>
      {/* {console.log(malumot)} */}
      <input className='form-input'  onChange={(e) => { setData(e.target.value) }} value={data} type="text" placeholder="Search or jump to..." />
      <div className='input-iconca'>/</div>
      <NavLink to='/search'>
        <button className='btn btn-search form-btn' onClick={search}>Search</button>
      </NavLink>
    </>
  );
};

export default Form;