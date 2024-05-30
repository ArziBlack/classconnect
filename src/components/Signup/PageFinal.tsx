import { SyntheticEvent, useEffect, useState } from 'react'
import { Box, FormControl, FormLabel, Select, Checkbox, Button } from '@chakra-ui/react'
// import Select1 from 'react-select';

const PageFinal = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});
  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);

  const [check, setCheck] = useState(true);
  function handleCheckBox(e: SyntheticEvent) {
    setCheck(!check)
    if (check) {
      console.log('I was checked');
    } else {
      console.log('You just unchecked me');
    }
  }
  return (
    <>
      <Box w='100%' mb={6}>
        <FormControl>
          <FormLabel fontWeight='bold' fontSize='15px'>Country</FormLabel>
          {/* <Select1
            options={countries}
            value={selectedCountry}
            onChange={(selectedOption) => setSelectedCountry(selectedOption)}
            size='sm'>
          </Select1> */}
        </FormControl>
      </Box>
      <Box w='100%' mb={6}>
        <FormLabel fontWeight='bold' fontSize='15px'>What is your current role?</FormLabel>
        <Select fontSize='15' placeholder='Select option'>
          <option value='founder'>Founder</option>
          <option value='engineer'>Software Engineer</option>
          <option value='Finance Officer'>Finance Officer</option>
        </Select>
      </Box>
      <Box w='100%' mb={8}>
        <FormLabel fontWeight='bold' fontSize='15px'>How did you discover Tensfer?</FormLabel>
        <Select borderRadius='lg' fontSize='15' placeholder='Select option'>
          <option value="social media">Social media</option>
          <option value="blog">Blog or publication</option>
          <option value="search engine">Search engine</option>
          <option value="others">Others</option>
        </Select>
      </Box>
      <Box display='flex' mb={6}>
        <Checkbox mt={-4} defaultChecked onChange={handleCheckBox}></Checkbox>
        <h4 className='text-[14px] ml-2'>By creating an account, you agree to our <span className='font-semibold'>Terms & Conditions and Privacy Policy</span></h4>
      </Box>
      <Button type='submit' borderRadius='md' color='white' bg='#002C8A' _hover={{ bg: '#002C6A' }} width='320px' isDisabled={check ? false : true}>Register</Button>
    </>
  )
}

export default PageFinal