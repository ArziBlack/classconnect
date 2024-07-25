import { Spinner } from '@chakra-ui/react'

const Loading = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#002333]">
        <Spinner/>
    </div>
  )
}

export default Loading