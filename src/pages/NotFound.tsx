import CButton from "../components/Button";
import { useNavigate } from "react-router-dom";
import { PNF } from "../constants/illustrations";
import { Box, Image, Text } from "@chakra-ui/react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      fontFamily={"Metropolis"}
      color={"brand.text"}
      className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16"
    >
      <Box className="xl:pt-24 w-full ">
        <Text fontSize={"32px"} lineHeight={1.2} fontWeight={500}>
          Looks like you've found the{" "}
          <Text display={"inline-block"} color={"#226344"}>
            great nothing...
          </Text>
        </Text>
        <Text className="my-2" fontWeight={700}>
          Sorry about that! Please visit our hompage to get where you need to
          go.
        </Text>
        <CButton
          text="Take me there!"
          onClick={() => navigate("/")}
          className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
        />
      </Box>
      <Box>
        <Image src={PNF} />
      </Box>
    </Box>
  );
};

export default NotFound;
