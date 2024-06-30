import { Box, SimpleGrid } from "@chakra-ui/react";
import { TutorCard } from "./TutorCard";
import { TEMPLATE } from "../../../../constants/image";
import { useAppSelector } from "../../../../hooks/reactReduxHooks";

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
  {
    name: "Amelia Stone",
    bio: "Expert in data science and machine learning.",
    course: "Data Science",
    gender: "Female",
    imageUrl: TEMPLATE,
  },
  {
    name: "Liam Brown",
    bio: "Specialist in cloud computing and DevOps practices.",
    course: "Cloud Computing",
    gender: "Male",
    imageUrl: TEMPLATE,
  },
  {
    name: "Sophia Turner",
    bio: "Skilled in cybersecurity and ethical hacking.",
    course: "Cybersecurity",
    gender: "Female",
    imageUrl: TEMPLATE,
  },
  {
    name: "Ethan White",
    bio: "Full-stack developer with a passion for teaching.",
    course: "Full-Stack Development",
    gender: "Male",
    imageUrl: TEMPLATE,
  },
  {
    name: "Isabella Green",
    bio: "Proficient in AI and deep learning technologies.",
    course: "Artificial Intelligence",
    gender: "Female",
    imageUrl: TEMPLATE,
  },
  {
    name: "Noah Black",
    bio: "Experienced in mobile app development using Flutter.",
    course: "Mobile App Development",
    gender: "Male",
    imageUrl: TEMPLATE,
  },
  {
    name: "Mia Blue",
    bio: "Frontend developer focused on creating seamless user experiences.",
    course: "Frontend Development",
    gender: "Female",
    imageUrl: TEMPLATE,
  },
  {
    name: "Oliver Gray",
    bio: "Backend engineer with a deep understanding of databases.",
    course: "Backend Development",
    gender: "Male",
    imageUrl: TEMPLATE,
  },
  {
    name: "Ava Red",
    bio: "Expert in blockchain and decentralized applications.",
    course: "Blockchain Development",
    gender: "Female",
    imageUrl: TEMPLATE,
  },
  {
    name: "Elijah White",
    bio: "Full-stack developer with extensive experience in React and Node.js.",
    course: "Full-Stack Development",
    gender: "Male",
    imageUrl: TEMPLATE,
  },
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

export const Approved = () => {
  const { approvedTutors } = useAppSelector(state => state.student);
  console.log(approvedTutors);
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
