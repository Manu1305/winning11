import React from 'react'
import './Subhead.css'
import {BsWallet2}from 'react-icons/bs'


function SubHead() {
  return (
    <div>
        <nav className='home_sub w-16 md:w-32 lg:w-48 ' >
       <h4 style={{position:"absolute"}} className='profile' >
        profile
       </h4 >
     <h1 className='text' style={{color:'black'}} >CRICKET</h1>
     <BsWallet2 className='wallet' style={{color:"black"}}/>
     <h3 className='amount' style={{color:"black"}}>300</h3>
      </nav>   
       
    </div>
  )
}
export default SubHead
