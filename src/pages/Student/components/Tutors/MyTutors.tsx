import { Box, SimpleGrid } from "@chakra-ui/react";
import { TutorCard } from "../Courses/TutorCard";
import { TEMPLATE } from "../../../../constants/image";

// Sample data for tutors
const tutors = [
  {
    name: "Milton Mosiah",
    bio: "Experienced frontend developer with a knack for teaching.",
    course: "Frontend Development",
    gender: "Male",
    imageUrl: TEMPLATE,
  },
  {
    name: "James Renault",
    bio: "Seasoned developer with a strong background in full-stack development.",
    course: "Full-Stack Development",
    gender: "Male",
    imageUrl: TEMPLATE,
  },
  {
    name: "Bryan Lake",
    bio: "Passionate about UI/UX design and frontend technologies.",
    course: "UI/UX Design",
    gender: "Male",
    imageUrl: TEMPLATE,
  },
  {
    name: "Reston Mix",
    bio: "Dedicated to helping students excel in their coding journey.",
    course: "Backend Development",
    gender: "Female",
    imageUrl: TEMPLATE,
  },
];

export const MyTutors = () => {
  return (
    <Box className="text-white ">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} color="#ffffff">
        {tutors.map((tutor, index) => (
          <TutorCard
            key={index}
            name={tutor.name}
            bio={tutor.bio}
            course={tutor.course}
            gender={tutor.gender}
            imageUrl={tutor.imageUrl}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};
