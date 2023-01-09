import React, { useState, useEffect } from 'react';
import '../../companents/Form/form.css'
import { NavLink } from 'react-router-dom'

const Form = ({ malumot, setMalumot }) => {

  const [data, setData] = useState("")

  useEffect(() => {
    search
  }, [])

  const search = async() => {
    await fetch(`https://api.github.com/search/users?q=${data}`).then((response => response.json())).then((data) => { setMalumot(data) })
  }

  return (
    <>
      {/* {console.log(malumot)} */}
      <input className='form-input'  onChange={(e) => { setData(e.target.value) }} value={data} type="text" placeholder="Search or jump to..." />
      <div className='input-iconca'>/</div>
      <NavLink to='/search'>
        <button className='btn btn-search form-btn' onClick={search}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAeRJREFUSEvllu0tRFEQht+tABWgAlSAClABOqACVIAKUMHqABXQASpABeSROTI593wuN/vDSTab7J25z8y8M3N2ojmdyZy46gFvSVqTtCjpXdKTpIdZA6+BVySdSDrIAAjgVtKZpJeeIErgI0nnHS/D/rLVPge+lrTvXnJjmd1bmSk3pd+N7PA7bIGnwD7TV3s5eubOugW1bAbHki5q8BiMps/mBJSXoiOHLHckYRMayz/jtwBfrWkeg32JNwwAlCrQZMDDAXrqdCXIR3uINLmG/DaJwZ8Zx1hzX0lf2mBHUEulcnswzXJnxnumm/dFN5qL8aGpgCyYFFSHceL3qTltm32S78G+qYg26JcL3ENCoEjx1tJkHoxe6JiSIAfHh0Ml+HCCXCyV8Hzg/5uMU8H4jFNy/fj0aFzqlfDMl99PRTFjHqIrDVMdh0wUvvuL90DrHLdk6+e4qG+qifzmYjwoV627eQ/asjzw/7Dvol9tVwOnSWq7mtkFymmSqfV2QjsWBxc/mZDhpi2M1GrkhsIne/7qPqa8BOav0iK85R8IS4AxodtTh0ZinVIJsr9yRll4DexB7HI6lzKjOfqntG+C94BbRirYVOFjgQnAwwclHxMc4HwPOnxs8Ezj1KNpt+3/y/gLRZhwH/pUPqMAAAAASUVORK5CYII="/></button>
      </NavLink>
    </>
  );
};

export default Form;