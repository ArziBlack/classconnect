import { Flex } from '@chakra-ui/layout'
import React from 'react'
import { IoRefreshCircleOutline } from 'react-icons/io5'

const Refresh = ({ handleRefresh }) => {
    return (
        <Flex mb={`20px`} justifyContent={`flex-end`} w='full'>
            <button className="h-10 w-14 rounded-full bg-white flex items-center justify-center hover:rotate-180 hover:scale-105 hover:bg-gray-200/25 mr-2" onClick={handleRefresh}>
                <IoRefreshCircleOutline size={25} color="black" className="" />
            </button>
        </Flex>
    )
}

export default Refresh