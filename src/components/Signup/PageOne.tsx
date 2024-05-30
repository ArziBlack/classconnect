import { Box, FormLabel, Input, Button } from '@chakra-ui/react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PageOne = ({ data, onChange, onClick }: any) => {
  return (
    <>
      <Box w='100%' mb={6}>
        <FormLabel fontWeight='bold' fontSize='15px'>First name</FormLabel>
        <Input fontSize='15' name="firstName" required type='name' value={data.firstName} onChange={onChange} />
      </Box>
      <Box w='100%' mb={6}>
        <FormLabel fontWeight='bold' fontSize='15px'>Last name</FormLabel>
        <Input fontSize='15' name="lastName" type='name' value={data.lastName} onChange={onChange} />
      </Box>
      <Box w='100%' mb={6}>
        <FormLabel fontWeight='bold' fontSize='15px'>Email</FormLabel>
        <Input fontSize='15' name="email" type='email' value={data.email} required onChange={onChange} />
      </Box>

      <Button onClick={()=> onClick("pagetwo")} borderRadius='md' color='white' bg='#002C8A' width='300px'>Next</Button>
    </>
  )
}

export default PageOne