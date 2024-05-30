import { HStack, Image, Select, Text } from "@chakra-ui/react";
import { LOGO } from "../constants/icon";
import { FaCartShopping, FaUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" w="100vw" paddingTop="1.2" paddingX='12'>
      <HStack>
        <Image src={LOGO} marginRight='1.4' />
        <Text paddingLeft='1.4'>EDUVI</Text>
      </HStack>
      <HStack>
        <Text>Shop</Text>
        <Select border="none">
          <option>For Kindergarten</option>
        </Select>
        <Select border="none">
          <option>For Highschool</option>
        </Select>
        <Select border="none">
          <option>For College</option>
        </Select>
        <Select border="none">
          <option>Courses</option>
        </Select>
      </HStack>
      <HStack>
        <HStack>
          <Text>Cart (0)</Text>
          <FaCartShopping />
        </HStack>
        <HStack>
          <Text paddingLeft='1.4'>My Account</Text>
          <FaUser />
        </HStack>
      </HStack>
    </HStack>
  );
};
  );
};

export default Navbar;

export default Navbar;
