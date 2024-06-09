import "tachyons";
import { Box, Text, Image, Link } from "@chakra-ui/react";
import { Flex, Heading } from "@chakra-ui/layout";
import PageFinal from "../components/Signup/PageFinal";
import PageOne from "../components/Signup/PageOne";
import PageTwo from "../components/Signup/PageTwo";
import MultistepProgressBar from "../components/MultistepProgressBar";
import { SIGN_UP } from "../constants/image";
import { LOGO } from "../constants/icon";
import { ChangeEvent, useState } from "react";
import PageA from "../components/Signup/PageA";
import { IStudent } from "../typings/signup";

const SignUp = () => {
  const { log } = console;
  const [page, setPage] = useState<string>("pageone");
  function nextPage(page: string) {
    setPage(page);
  }
  const nextPageIndex = (pageIndex: string) => {
    switch (pageIndex) {
      case "1":
        setPage("pageone");
        break;
      case "2":
        setPage("pagetwo");
        break;
      case "3":
        setPage("pagethree");
        break;
      case "4":
        setPage("pagefour");
        break;
      default:
        setPage("pageone");
    }
  };
  const [formData, setFormData] = useState<IStudent>({
    first_name: null,
  last_name: null,
  student_email: null,
  sex: null,
  country: null,
  state: null,
  course: null,
  dateOfBirth: null,
  classTime_options: null,
  payment_plan: null,
  class_type: null,
  salutation: null,
  password: "",
  profileImage: null,
  agreement_status: false,
  student_phoneNum: null
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  log(formData);
  return (
    <Box bg="white" color="black" overflow="hidden">
      <Flex w="100vw" p="24px" h="100vh">
        <Flex flex="1" flexDir="column" justifyContent="center">
          <Box
            padding="60px"
            h="100%"
            display="flex"
            flexDirection="column"
            className="md:-mt-64 lg:mt-4 justify-between"
            maxH="610px"
          >
            <div className="visible md:invisible">
              <img src={LOGO} className="w-[40%] -mt-28" />
            </div>
            <Box mb="2px">
              <Heading as="h5" fontSize="27px" fontWeight="700" color="black">
                Create your account
              </Heading>
              <Text fontSize="15px" fontWeight="400" color="black" mt={4}>
                Join 150 startups and enterprise companies digitizing their
                businesses using Tensfer API's.
              </Text>
            </Box>
            <div className=" border-t-[.5px] border-grey flex w-full mt-5 mb-5"></div>
            <Box>
              <MultistepProgressBar
                page={page}
                onPageIndexClick={nextPageIndex}
              />
              <div className=" pb-4"></div>
              {
                {
                  pageone: (
                    <PageOne
                      onClick={nextPage}
                      onChange={onChange}
                      data={formData}
                    />
                  ),
                  pagetwo: (
                    <PageA
                      onClick={nextPage}
                      onChange={onChange}
                      data={formData}
                    />
                  ),
                  pagethree: (
                    <PageTwo
                      onClick={nextPage}
                      onChange={onChange}
                      data={formData}
                    />
                  ),
                  pagefour: <PageFinal onChange={onChange} data={formData} />,
                }[page]
              }
            </Box>
            <Text as="a" mt={6} textAlign="center" fontSize="16px">
              Already have an account?{" "}
              <b className=" text-[#002C8A]">
                <Link href="/">Sign in</Link>
              </b>
            </Text>
          </Box>
        </Flex>
        <Box flex="2" bgImage={SIGN_UP} bgSize="cover" borderRadius="60px">
          <Box
            h="100%"
            w="100%"
            borderRadius="60px"
            padding="20px"
            bgGradient="linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))"
          >
            <Box
              p="20px"
              display="flex"
              flexDir="column"
              h="100%"
              justifyContent="space-between"
            >
              <Image src={LOGO} ml={12} w="100px" h="23.5px" />
              <Box color="white">
                <Text
                  fontSize="28px"
                  ml={12}
                  className="hidden lg:block w-[50%]"
                  fontWeight="600"
                  lineHeight="30px"
                >
                  The safest and fastest way to connect crypto accounts to an
                  app
                </Text>
                <Text
                  fontSize="20px"
                  ml={12}
                  className="hidden lg:block w-[80%]"
                  lineHeight="24px"
                  mt="44px"
                >
                  Tensfer allows you to quickly connect to any crypto exchange,
                  wallet, protocol or digital asset account
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default SignUp;
