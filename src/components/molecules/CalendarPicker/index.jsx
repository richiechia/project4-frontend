import { FormControl, FormLabel, Stack } from '@chakra-ui/react';
import React from 'react';
import { DatePicker } from '../../atoms'

const CalendarPicker = ({name, value, setValue, placeholder, size , label, direction, onChange, max}) => {

  return (
    <>
    <FormControl>
      <Stack direction={direction}>
    <FormLabel whiteSpace="nowrap">{label}</FormLabel>
    <DatePicker placeholder={placeholder} size={size} value={value} setValue={setValue} label={label} onChange={onChange} name={name} max={max}/>
      </Stack>
    </FormControl>
    </>
  )
}

export default CalendarPicker