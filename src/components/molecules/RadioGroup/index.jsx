import React from 'react';
import { RadioButton } from '../../atoms';
import { 
  FormLabel,
  RadioGroup as ChakraRadio, 
  Stack 
} from '@chakra-ui/react';

const RadioGroup = ({name, value, setValue, direction, radioParams, label, onChange}) => {
  
  const handleChange = (e) => {
    setValue({...value, [name]:e })
  }
  
  return (
    <>
      <ChakraRadio onChange={handleChange} value = {value[name]}>
        <Stack direction={direction}>
          <FormLabel>{label}</FormLabel>
          {radioParams.map((radioParam)=> (
            <RadioButton key={radioParam.text} text={radioParam.text} value={radioParam.value}/>
          ))}
        </Stack>
      </ChakraRadio>
    </>
  )
}

export default RadioGroup