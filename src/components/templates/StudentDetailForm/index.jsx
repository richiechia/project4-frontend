import React, { useEffect, useState } from 'react'
import { Button } from '../../atoms'
import { UserInput, RadioGroup, CalendarPicker } from '../../molecules'
import useUpdateLogger from '../../../hooks/useUpdateLogger'
import { Flex, Box, Heading, useColorModeValue, Stack } from '@chakra-ui/react'
import { addMemberAPI } from '../../../api/addMember'

function StudentDetailForm () {
  const [gender, setGender] = useState("")
  const [date, setDate] = useState("")

  const [member, setMember] = useState(
    {
      name: "",
      dob : "",
      age : "",
      gender: "",
      email: "",
    }
  )

  const handleFormGeneration = (formInput) => {

    if (formInput.formType === "userInput"){
      return (
      <UserInput key={formInput.name} type="text" name={formInput.name} placeholder={formInput.placeholder} label={formInput.label} onChange={formInput.onChange[0]} variant="flushed" direction="row"/> )
    }
    if (formInput.formType === "radiobutton"){
      return(<RadioGroup key={formInput.name} value={member} setValue={setMember} direction="row" label={formInput.label} radioParams={formInput.radioParams} name={formInput.name}/>)

    }

    if (formInput.formType === "datepicker"){
      const offset = new Date().getTimezoneOffset() * 60000
      const currentDate = (new Date(Date.now() -offset)).toISOString().slice(0,10)
      
      return (
      <CalendarPicker key={formInput.name} name = {formInput.name} onChange={formInput.onChange[0]} size="md" placeholder="Date" label={formInput.label} max={currentDate} direction="row"/>
      )

    }
  }

  const handleMemberDetails = (input) => {
    const { name, value } = input.target
    setMember({...member, [name]: value})
  }

  useUpdateLogger(member)

  const formInputs = [
    {
      formType : "userInput",
      type : 'text',
      name : 'name',
      placeholder : '',
      label : "Name",
      value: member.name,
      onChange: [handleMemberDetails]
    },
    {
      formType : "datepicker",
      name: "dob",
      label : "Date of Birth",
      onChange: [handleMemberDetails]
    },
    {
      formType: "userInput",
      type: 'text',
      name : "age",
      placeholder: "",
      label : "Age",
      value: member.age,
      onChange: [handleMemberDetails],
    },
    {
      formType: "radiobutton",
      name: "gender",
      value: gender,
      setValue: [setGender],
      label : "Gender",
      onChange: [handleMemberDetails],
      radioParams : [
        {
        text : "Male",
        value: "M",
        },
        {
          text:"Female",
          value:"F"
        }
    ]
    },
    {
      formType: "userInput",
      type : "text",
      name : "email",
      placeholder: "",
      label : "Email",
      value: member.email,
      onChange: [handleMemberDetails]
    }

  ]

  useEffect(() => {
    const fetchUser = async () => {
      const data = await addMemberAPI.getCurrentUser()
      console.log(data)
      return data
    }
    
    fetchUser()

  },[])

  const addMemberHandleSubmit = async (event) => {
    const resp = await addMemberAPI.addMember(member)

    console.log(resp)
  }

  return (
    <Flex direction="column">
      
    <Stack spacing={2} mx={'auto'} maxW={'lg'} py={5} >
      <Stack align={'left'}>
        <Heading fontSize='h2' mt={10} mb={10}> 
          Member Details
        </Heading>
      </Stack>

      <Box round={'lg'} p={8} boxShadow={'lg'} bg={useColorModeValue('white', 'gray.700')}>
        <Stack spacing={8}>
        {formInputs.map((formInput) => {
          
          return (
            handleFormGeneration(formInput)
            )
          })
        }
        </Stack>
          
        <Stack pt={5} >
          <Button text="Add member" size="lg" handleClick={addMemberHandleSubmit}/>
        </Stack>
      </Box>
      </Stack>
    </Flex>
  )
}

export default StudentDetailForm