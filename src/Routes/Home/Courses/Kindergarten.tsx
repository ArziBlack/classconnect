import { SimpleGrid } from '@chakra-ui/layout'
import { data } from '../../../utils/data'
import LessonCard from '../../../components/LessonCard'

const Kindergarten = () => {
  return (
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
  )
}

export default Kindergarten