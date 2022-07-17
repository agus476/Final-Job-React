import React from 'react'
import LogoRed from"../../assets/LOGO-RED.png"
import "../NavBar/Logo.scss"

export  function Logo() {
  return (
    <div className='LogoContainer'>

        <img  className= 'Logo' src={LogoRed} alt="" />

    </div>
  )
}
