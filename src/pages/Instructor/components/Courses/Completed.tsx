import { CourseCard } from "./CourseCard";
import { SimpleGrid } from "@chakra-ui/react";

export const Completed = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} color="#ffffff">
      <CourseCard
        title="Frontend Development"
        description="This career path will turn you into a hireable frontend developer, and teach you how to nail the job interview"
        difficulty="Beginner"
        lessons="5 Lessons"
      />
    </SimpleGrid>
  );
};
