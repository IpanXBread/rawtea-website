// HomeHeader.js
import React from 'react';
import { Flex, Heading, Image, IconButton, useColorMode, Box, Text } from '@chakra-ui/react';
import { FaMoon, FaSearch, FaSun, FaUser } from 'react-icons/fa';
import '../styles/styles.css'

export default function HomeHeader() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex
        as="header"
        align="center"
        justify="space-between"
        bg="#1a202c"
      >

        {/* Left section */}
        <Flex align="center" ml="10">

          <Heading className="mr-20 ml-10">Raw Tea</Heading>

          <Text
            fontFamily="sans-serif"
            mr="10"
            fontSize={20}
            _hover={{ cursor: 'pointer' }}
          >
            Home
          </Text>

          <Text
            fontFamily="sans-serif"
            mr="10"
            fontSize={20}
          // onClick={() => selectMenuItem('Theatre')}
          _hover={{ cursor: 'pointer' }}
          >
            Shop
          </Text>

          <Text
            fontFamily="sans-serif"
            fontSize={20}
          // onClick={() => selectMenuItem('Timeslot')}
          _hover={{ cursor: 'pointer' }}
          >
            About
          </Text>

        </Flex>

        {/* Right section */}
        <Flex align="center" mr="70">
          <Text variant="description">
            IpanXBread
          </Text>
          <Box m="10" _hover={{ cursor: 'pointer' }}>
            <FaUser className="icon-size" />
          </Box>
        </Flex>

      </Flex>
    </>
  );
};