import { CourseCard } from "./CourseCard";
import { SimpleGrid } from "@chakra-ui/react";
import { TEMPLATE } from "../../../../constants/image";

export const OnGoing = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} color="#ffffff">
      <CourseCard
        title="Cloud Engineering"
        description="This career path will turn you into a hireable frontend developer, and teach you how to nail the job interview"
        difficulty="Intermediate"
        lessons="5 Lessons"
        imageUrl={TEMPLATE}
      />
    </SimpleGrid>
  );
};
