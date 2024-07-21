import {
    Avatar,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Box,
    Button,
    Center,
    Flex,
    FormLabel,
    Input,
    Text,
    Select,
    useDisclosure
  } from "@chakra-ui/react";
  import React from "react";
  import { useParams } from "react-router-dom";
  import { DeleteIcon } from "@chakra-ui/icons";

const StudentDetailed = () => {
    const { studentId } = useParams();
    console.log(studentId);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
    // const [formData, setFormData] = useState({
    //     uid: uid,
    //     username: singleUser.username,
    //     email: singleUser.email,
    //     exchange: singleUser.exchange,
    //     address: singleUser.address,
    //     description: singleUser.description,
    //     currency: singleUser.currency,
    //   });
    //   const { username, exchange, email, address, description, currency } =
    //     formData;
    const handleClick = async (e) => {
        e.preventDefault();
        // dispatch(deleteCustomer(uid))
        // navigate("/admin/customers")
      }
  return (
    <div>
      <Box bg="white" borderRadius="18px" p="30px" mt={20} mb="20px">
        <Flex alignItems="center" p="5px" mb="10px">
          <Box p="5px" borderRadius="8px" mr="10px">
            <Avatar size="lg" name="Milton"></Avatar>
          </Box>
          <Text fontSize={{ sm: "xl", lg: "2xl" }} className="text-[#002C8A]" fontWeight="bold">
            {"singleUser.first_name"} {"singleUser.last_name"}
          </Text>
          <Button size='xs' borderRadius='lg' ml={6} colorScheme='red' onClick={onOpen}>
            <DeleteIcon />
          </Button>

          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                  Delete Customer
                </AlertDialogHeader>

                <AlertDialogBody>
                  Are you sure? You can't undo this action afterwards.
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme='red' onClick={handleClick} ml={3}>
                    Delete
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Flex>
        <form 
        // onSubmit={onSubmit} 
        >
          <Flex flexDir={{ sm: "column", lg: "row" }}>
            <Box p="4" w="150">
              <Box mb={6}>
                <FormLabel fontWeight="bold" fontSize="15px">
                  Username
                </FormLabel>
                <Input
                  w={{ sm: "100%", lg: "300px" }}
                  fontSize="14"
                  name="username"
                  type="name"
                  placeholder={"singleUser.username"}
                //   onChange={onChange}
                  value={"username"}
                />
              </Box>
              <Box mb={6}>
                <FormLabel fontWeight="bold" fontSize="15px">
                  Email
                </FormLabel>
                <Input
                  fontSize="14"
                  name="email"
                  disabled
                  required
                  type="email"
                  placeholder={"singleUser.email"}
                />
              </Box>
              <Box w="50%" mb={6}>
                <FormLabel fontSize="sm" fontWeight="semibold" mt={4}>
                  Exchange
                </FormLabel>
                <Select
                  borderRadius="lg"
                  width="300px"
                  fontSize="14"
                  placeholder={"singleUser.exchange"}
                //   onChange={onChange}
                  name="exchange"
                >
                  <option value="Coinbase">Coinbase</option>
                  <option value="Binance">Binance</option>
                  <option value="Kraken">Kraken</option>
                  <option value="Quidax">Quidax</option>
                </Select>
                <Box w="100%" mt={6}>
                  <FormLabel fontWeight="bold" fontSize="15px">
                    Currency
                  </FormLabel>
                  <Input
                    w="300px"
                    fontSize="14"
                    name="currency"
                    type="name"
                    placeholder={"singleUser.currency"}
                    // onChange={onChange}
                    value={"currency"}
                  />
                </Box>
              </Box>
            </Box>

            <Box ml={{ sm: "0", lg: "60" }} p="4">
              <Box w="100%" mb={6}>
                <FormLabel fontWeight="bold" fontSize="15px">
                  Date Of Birth
                </FormLabel>
                <Input
                  w="300px"
                  fontSize="14"
                  disabled
                  name="lastName"
                  type="name"
                  placeholder={"singleUser.dob"}
                />
              </Box>
              <Box w="50%" mb={6}>
                <FormLabel fontWeight="bold" fontSize="15px">
                  BVN
                </FormLabel>
                <Input
                  w="300px"
                  fontSize="14"
                  disabled
                  name="email"
                  type="email"
                  placeholder={"singleUser.bvn"}
                />
              </Box>
              <Box w="50%" mb={6}>
                <FormLabel fontWeight="bold" fontSize="15px">
                  Description
                </FormLabel>
                <Input
                  w="300px"
                  fontSize="14"
                  name="description"
                  type="text"
                  placeholder={"singleUser.description"}
                //   onChange={onChange}
                  value={"description"}
                />
              </Box>
              <Box w="50%" mb={6}>
                <FormLabel fontWeight="bold" fontSize="15px">
                  Address
                </FormLabel>
                <Input
                  w="300px"
                  fontSize="14"
                  name="address"
                  type="address"
                  placeholder={"singleUser.address"}
                //   onChange={onChange}
                  value={"address"}
                />
              </Box>
            </Box>
          </Flex>
        </form>
        <Center>
          <Button
            w="600px"
            bg="#002c8a"
            _hover={{ bg: "#002C6A" }}
            width="200px"
            type="submit"
            textColor="white"
            borderRadius="lg"
            variant="solid"
            fontSize="sm"
            fontWeight="normal"
            // onClick={onSubmit}
          >
            Save changes
          </Button>
        </Center>
      </Box>
    </div>
  )
}

export default StudentDetailed