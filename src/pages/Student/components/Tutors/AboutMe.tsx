import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Icon,
  //  Link,
  // VStack
  SkeletonText,
} from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import { CgGenderMale } from "react-icons/cg";
import { CgGenderFemale } from "react-icons/cg";
import { IMyTutor } from "../../../../typings/student";
import { useAppSelector } from "../../../../hooks/reactReduxHooks";
// import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const AboutMe: React.FC = () => {
  const { tutorId } = useParams();
  const { approvedTutors, isLoading } = useAppSelector((state) => state.student);
  const [tutor, setTutor] = useState<IMyTutor>(null);
  useEffect(() => {
    if (approvedTutors) {
      setTutor(approvedTutors?.data?.find((item) => tutorId === item.name.split(" ")[0]) as IMyTutor);
    }
  }, [approvedTutors, tutorId]);

  const getGenderIcon = (gender: string) => {
    return gender === "Female" ? (
      <Icon as={CgGenderFemale} boxSize={6} />
    ) : (
      <Icon as={CgGenderMale} boxSize={6} />
    );
  };

  return (
    <Box maxW="700px" color="white">
      <Flex direction="column" mt={5}>
        <SkeletonText isLoaded={!isLoading}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            {tutor?.country}
          </Text>
        </SkeletonText>
        <Flex mb={4}>
          <SkeletonText isLoaded={!isLoading}>
            {getGenderIcon(tutor?.sex)}
          </SkeletonText>
          <SkeletonText isLoaded={!isLoading}>
            <Text ml={2} fontSize="14px">
              {tutor?.sex} - {tutor?.Age}yrs
            </Text>
          </SkeletonText>
        </Flex>
        {/* <VStack spacing={4} align="start" w="full">
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Experience as Developer:
            </Text>
            <Text opacity={0.8} fontSize={"14px"} textAlign={"justify"}>
              {developerExperience}
            </Text>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Experience as Instructor:
            </Text>
            <Text fontSize={"14px"} opacity={0.8} textAlign={"justify"}>
              {instructorExperience}
            </Text>
          </Box>
        </VStack>
        <Box>
          <Text fontSize="lg" fontWeight="bold" mt={4}>
            Social Links:
          </Text>
          <Flex justifyContent={"start"} gap={4}>
            <Link href={socialLinks.linkedin} isExternal mr={4}>
              <Icon as={FaLinkedin} boxSize={6} />
            </Link>
            <Link href={socialLinks.twitter} isExternal mr={4}>
              <Icon as={FaTwitter} boxSize={6} />
            </Link>
            <Link href={socialLinks.github} isExternal>
              <Icon as={FaGithub} boxSize={6} />
            </Link>
          </Flex>
        </Box> */}
      </Flex>
    </Box>
  );
};

export default AboutMe;
