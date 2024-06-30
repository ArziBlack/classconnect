import { CourseCard } from "./CourseCard";
import { SimpleGrid } from "@chakra-ui/react";

export const Started = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} color="#ffffff">
      <CourseCard
        title="Backend Development"
        description="This career path will turn you into a hireable frontend developer, and teach you how to nail the job interview"
        difficulty="Advance"
        lessons="5 Lessons"
      />
    </SimpleGrid>
  );
};
