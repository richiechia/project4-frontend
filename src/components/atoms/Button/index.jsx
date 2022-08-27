import React from 'react';
import { Button } from '@chakra-ui/react'

function Button1({handleClick, text, variant, size, bg, color, _hover,}) {

  return (
    <>
      <Button variant={variant} onClick={handleClick} size={size} bg={bg} color={color} _hover = {_hover}> {text}</Button>
    </>
  )
}

export default Button1