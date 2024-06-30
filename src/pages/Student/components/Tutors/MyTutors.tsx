import { Box, SimpleGrid } from "@chakra-ui/react";
import { TutorCard } from "../Courses/TutorCard";
import { TEMPLATE } from "../../../../constants/image";

export const MyTutors = () => {
  return (
    <Box className="text-white ">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} color="#ffffff">
        <TutorCard
          name="Milton Mosiah"
          description="This career path will turn you into a hireable frontend developer, and teach you how to nail the job interview"
          difficulty="Beginner"
          lessons="5 Lessons"
          imageUrl={TEMPLATE}
        />
        <TutorCard
          name="James Renault"
          description="This career path will turn you into a hireable frontend developer, and teach you how to nail the job interview"
          difficulty="Advance"
          lessons="5 Lessons"
          imageUrl={TEMPLATE}
        />
        <TutorCard
          name="Bryan Lake"
          description="This career path will turn you into a hireable frontend developer, and teach you how to nail the job interview"
          difficulty="Intermediate"
          lessons="5 Lessons"
          imageUrl={TEMPLATE}
        />
        <TutorCard
          name="Reston Mix"
          description="This career path will turn you into a hireable frontend developer, and teach you how to nail the job interview"
          difficulty="Beginner"
          lessons="5 Lessons"
          imageUrl={TEMPLATE}
        />
      </SimpleGrid>
    </Box>
  );
};
