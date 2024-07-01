import React from "react";
import {
  Box,
  Flex,
  Text,
  //  Link,
  Icon,
  // VStack
} from "@chakra-ui/react";

// import { useParams } from "react-router-dom";
// import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { CgGenderMale } from "react-icons/cg";
import { CgGenderFemale } from "react-icons/cg";
import { TEMPLATE } from "../../../../constants/image";

interface Tutor {
  name: string;
  bio: string;
  course: string;
  gender: string;
  imageUrl: string;
  developerExperience: string;
  instructorExperience: string;
  socialLinks: {
    linkedin: string;
    twitter: string;
    github: string;
  };
}

const tutors: Tutor[] = [
  {
    name: "Milton Mosiah",
    bio: "Experienced frontend developer with a knack for teaching. Milton has worked with various tech companies, contributing to numerous high-profile projects and mentoring junior developers.",
    course: "Frontend Development",
    gender: "Female",
    imageUrl: TEMPLATE,
    developerExperience:
      "With over 10 years of experience in frontend development, Milton has become proficient in React, Angular, and Vue. He has built and maintained complex web applications, optimized performance, and created responsive designs. Milton has collaborated with cross-functional teams, including designers, backend developers, and product managers, to deliver seamless user experiences. His expertise extends to state management with Redux and Vuex, unit and integration testing with Jest and Cypress, and continuous integration/continuous deployment (CI/CD) pipelines. He has also been involved in code reviews and mentoring junior developers, helping them grow in their careers.",
    instructorExperience:
      "Milton has 5 years of experience teaching frontend technologies at various bootcamps and online platforms. He has developed comprehensive curricula covering HTML, CSS, JavaScript, and popular frameworks like React, Angular, and Vue. Milton's teaching style is hands-on and project-based, ensuring that students not only learn theoretical concepts but also apply them in real-world scenarios. He has conducted workshops, live coding sessions, and one-on-one mentoring, helping students understand complex topics and debug their code. His students have gone on to secure positions at top tech companies, and he takes pride in their achievements. Milton continuously updates his teaching materials to reflect the latest industry trends and best practices, making sure his students are well-prepared for the job market.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/miltonmosiah",
      twitter: "https://twitter.com/miltonmosiah",
      github: "https://github.com/miltonmosiah",
    },
  },
];

const AboutMe: React.FC = () => {
  // const { name } = useParams<{ name: string }>();
  // const tutor = tutors.find((t) => t.name === name);

  // if (!tutor) {
  //   return <Text>Tutor not found</Text>;
  // }
  const tutor = tutors[0];

  const {
    // bio,
    // course,
    gender,
    // developerExperience,
    // instructorExperience,
    // socialLinks,
  } = tutor;

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
        <Text fontSize="lg" fontWeight="bold" mb={2}>
          Nigeria
        </Text>
        <Flex mb={4}>
          {getGenderIcon(gender)}
          <Text ml={2} fontSize="14px">
            {gender} - 28yrs
          </Text>
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
