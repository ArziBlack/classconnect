import { Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <div className="flex mt-10 pb-10 h-full w-full items-center justify-center bg-[#002333]">
      <Spinner color="white" size={"lg"} />
    </div>
  );
};

export default Loading;
