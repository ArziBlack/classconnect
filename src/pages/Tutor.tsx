import SecondaryHero from "../components/SecondaryHero.tsx";
import CustomComponent from "../components/CustomComponent.jsx";

const Tutor = () => {
  return (
    <>
      <SecondaryHero
        title="Share your knowledge as an instructor"
        description="Our platform provides a supportive environment where you can expect professional development opportunities, access to a vast pool of eager students, and the ability to make a meaningful impact on learners worldwide. Join us and inspire the next generation of scholars!"
      />
      <CustomComponent />
    </>
  );
};

export default Tutor;
