import { SimpleGrid } from "@chakra-ui/react";
import { CourseCard } from "./CourseCard";
import { TEMPLATE } from "../../../../constants/image";

export const Browse = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} color="#ffffff">
      <CourseCard
        title="Frontend Development"
        description="This career path will turn you into a hireable frontend developer, and teach you how to nail the job interview"
        difficulty="Beginner"
        lessons="5 Lessons"
        imageUrl={TEMPLATE}
      />
      <CourseCard
        title="Backend Development"
        description="This career path will turn you into a hireable frontend developer, and teach you how to nail the job interview"
        difficulty="Advance"
        lessons="5 Lessons"
        imageUrl={TEMPLATE}
      />
      <CourseCard
        title="Cloud Engineering"
        description="This career path will turn you into a hireable frontend developer, and teach you how to nail the job interview"
        difficulty="Intermediate"
        lessons="5 Lessons"
        imageUrl={TEMPLATE}
      />
      <CourseCard
        title="Cloud Engineering"
        description="This career path will turn you into a hireable frontend developer, and teach you how to nail the job interview"
        difficulty="Beginner"
        lessons="5 Lessons"
        imageUrl={TEMPLATE}
      />
    </SimpleGrid>
  );
};
