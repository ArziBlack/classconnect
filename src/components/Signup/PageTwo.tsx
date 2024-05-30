import { useState } from 'react';
import { Box, FormLabel, InputGroup, Input, InputRightElement, Button, Icon } from '@chakra-ui/react'
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PageTwo = ({ password, password2, onChange, onClick }: any) => {
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const handleShow = () => setShow(!show);
  const handleShowConfirm = () => setShowConfirm(!showConfirm);
  return (
    <>
      <Box w='100%' mb={2}>
        <FormLabel fontWeight='bold' fontSize='15px'>Password</FormLabel>
        <InputGroup>
          <Input
            mb={2}
            fontSize='15'
            value={password}
            name="password"
            required
            type={show ? 'text' : 'password'}
            onChange={onChange}
          />
          <InputRightElement width="4.5rem">
            <Button
              ml={6}
              bg="white"
              h="2.0rem"
              size="sm"
              onClick={handleShow}
            >
              {show ? <Icon as={ViewIcon} /> : <Icon as={ViewOffIcon} />}
            </Button>
          </InputRightElement>
        </InputGroup>
        {/* <PasswordStrengthBar password={password} minLength='4' scoreWords={['Weak', 'Weak', 'Good', 'Strong', 'Perfect']} shortScoreWord='Too short' /> */}
      </Box>
      <Box w='100%' mb={6}>
        <FormLabel fontWeight='bold' fontSize='15px'>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            fontSize='15'
            name="password2"
            required
            type={showConfirm ? 'text' : 'password'}
            value={password2}
            onChange={onChange}
          />
          <InputRightElement width="4.5rem">
            <Button
              ml={6}
              bg="white"
              h="2.0rem"
              size="sm"
              onClick={handleShowConfirm}
            >
              {showConfirm ? <Icon as={ViewIcon} /> : <Icon as={ViewOffIcon} />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Box pt='20px' display='flex' alignItems='center' justifyContent='center' width='100%' >
          <Button onClick={()=> onClick("pagethree")} borderRadius='md' color='white' bg='#002C8A' width='80%'>Next</Button>
        </Box>
      </Box>
    </>
  )
}

export default PageTwo