import { VStack, Stack, SimpleGrid, Box } from "@chakra-ui/layout";
import SecondaryHero from "./SecondaryHero";
import { COURSES } from "../constants/illlustrations";
import LessonCard from "./LessonCard";
import { data } from "../utils/data";

const Courses = () => {
  return (
    <VStack pt="100px">
      <SecondaryHero
        title="Eduvi Courses For All Standards"
        imageUrl={COURSES}
        links={[
          { label: "Home", href: "/" },
          { label: "courses", href: "/courses" },
        ]}
      />
      <Stack>
      <Box>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="12">
          {data.map((item, index) => (
            <LessonCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              bgColor={item.bgColor}
            />
          ))}
        </SimpleGrid>
      </Box>
      </Stack>
    </VStack>
  );
};

export default Courses;
