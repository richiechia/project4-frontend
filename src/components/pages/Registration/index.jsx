import React, { useState } from 'react';

import { SignUp, Login } from '../../templates'

const Registration = () => {
  const [toggleSignIn, setToggleSignIn] = useState(true)
  
  const handleToggle =() => {
    setToggleSignIn(!toggleSignIn)
  }

  return (
    <div>
      {
        toggleSignIn ? <SignUp handleToggle = {handleToggle}/> : <Login handleToggle = {handleToggle}/>
      }
    </div>
  )
}

export default Registration