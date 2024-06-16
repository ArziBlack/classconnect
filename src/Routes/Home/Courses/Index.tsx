import { SimpleGrid } from "@chakra-ui/layout";
import { data } from "../../../utils/data";
import LessonCard from "../../../components/LessonCard";

const Index = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing="12">
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
  );
};

export default Index;
