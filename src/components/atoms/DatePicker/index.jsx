import React from 'react';
import { Input } from '@chakra-ui/react'

function DatePicker ({name, placeholder, size, value, setValue, label, onChange, max }) {
  
  const handleEvent = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
    <Input name={name} placeholder={placeholder} size={size} type="date" value={value} onChange={(e)=> onChange(e)} max={max} width="200px"/>
    </>
  )
}

export default DatePicker