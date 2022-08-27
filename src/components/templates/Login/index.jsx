import React from 'react';
import { UserInput, PasswordInput } from '../../molecules'; 
import { Flex, Stack, Box, useColorModeValue, Heading, Text } from '@chakra-ui/react'

const Login = ({handleToggle}) => {
const loginInputs = [
    {
      type: "text",
      name: "username",
      label: "Username",
      placeholder: "Enter username",
      // value: registerMap.username,
      // onChange: [formHandleChange],
      onChange : "",
    },
    {
      type: "password",
      name: "password",
      label: "Password",
      placeholder: "Enter password",
      onChange: "",
    },
  ]

  return (
    <>
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50','gray.800')}>
      <Stack spacing={8} mx={"auto"} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Login
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Welcome back
          </Text>
        </Stack>

        <Box 
          rounded={'lg'} 
          bg={useColorModeValue('white', 'gray.700')} 
          boxShadow={'lg'} 
          p={8}>
          <Stack spacing={4}>
            <UserInput type={loginInputs[0].type} name={loginInputs[0].name} placeholder={loginInputs[0].placeholder} label={loginInputs[0].label} />
            <PasswordInput type={loginInputs[1].type} name={loginInputs[1].name} placeholder={loginInputs[1].placeholder} label={loginInputs[1].label}/>

          </Stack>
          <Stack pt={5}>
            <Text align={'center'}>
              Don't have an account? Register <button style={{border: 'none', background: 'none', padding: '0'}} onClick={handleToggle}>here</button>
            </Text>
          </Stack>


        </Box>
      </Stack>
    </Flex>
    </>
  )
}

export default Login