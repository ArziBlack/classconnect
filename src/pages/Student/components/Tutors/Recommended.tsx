import { Box, SimpleGrid } from "@chakra-ui/react";
import { TutorCard } from "./TutorCard";
import { TEMPLATE } from "../../../../constants/image";

// Sample data for tutors
const tutors = [
  {
    name: "Harper Black",
    bio: "UX/UI designer passionate about creating user-friendly interfaces.",
    course: "UI/UX Design",
    gender: "Female",
    imageUrl: TEMPLATE,
  },
  {
    name: "Logan Yellow",
    bio: "DevOps engineer with expertise in continuous integration and deployment.",
    course: "DevOps",
    gender: "Male",
    imageUrl: TEMPLATE,
  },
  {
    name: "Charlotte Pink",
    bio: "Web developer with a strong background in JavaScript frameworks.",
    course: "Web Development",
    gender: "Female",
    imageUrl: TEMPLATE,
  },
  {
    name: "Lucas Violet",
    bio: "Software engineer with a focus on scalable systems.",
    course: "Software Engineering",
    gender: "Male",
    imageUrl: TEMPLATE,
  },
  {
    name: "Ella Brown",
    bio: "Machine learning engineer with a background in computer vision.",
    course: "Machine Learning",
    gender: "Female",
    imageUrl: TEMPLATE,
  },
  {
    name: "Henry Silver",
    bio: "Database administrator with expertise in SQL and NoSQL databases.",
    course: "Database Management",
    gender: "Male",
    imageUrl: TEMPLATE,
  },
];

export const Recommended = () => {
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
