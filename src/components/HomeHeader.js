// HomeHeader.js
import React, { useState, useEffect } from 'react';
import { Flex, Heading, Image, IconButton, useColorMode, Box, Text, Container, useTheme, Divider } from '@chakra-ui/react';
import { FaMoon, FaSearch, FaSun, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/styles.css'

export default function HomeHeader() {
  // const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();
  const [showNav, setShowNav] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowNav(window.innerWidth >= 768);
      if (window.innerWidth >= 768) {
        setOpenNav(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Flex
        as="header"
        align="center"
        justify="space-between"
        m="1%"
        h="50px"
      >

        {/* Left section */}
        <Flex align="center" ml="10%">

          <Text variant="header" mr="15%" whiteSpace="nowrap">Raw Tea</Text>

          {showNav ? (
            <>
              <Text ml="10" _hover={{ cursor: 'pointer' }}>Builds</Text>
              <Text ml="10" _hover={{ cursor: 'pointer' }}>Shop</Text>
              <Text ml="10" _hover={{ cursor: 'pointer' }}>Event</Text>
            </>
          ) : (
            <>

            </>
          )}

        </Flex>

        {/* Right section */}
        <Flex align="center" mr="10%">
          {showNav ? (
            <>
              <Text><FaUser className="icon-size" /></Text>
              <Text variant="description" ml="5">IpanXBread</Text>
            </>
          ) : (
            <>
              <Text mr="10%"><FaUser className="icon-size" /></Text>
              <Text variant="description" mr="10%">IpanXBread</Text>
              <Text><FaBars style={{ fontSize: "20px" }} onClick={toggleNav} /></Text>
            </>
          )}

          {openNav ? (
            <>
              <Flex bg={theme.colors.colort1} h="130px" w="30%" mt="175px" flexDirection="column" p="10px 10px 10px 10px" mr="0px" position="absolute" right="20px">

                <Flex alignItems="center" mb="5px" p="5px 10px 5px 10px" bg="gray.900" borderRadius="4">
                  <Text>Build</Text>
                </Flex>

                <Divider borderColor={theme.colors.colorDarkYellow} />

                <Flex alignItems="center" mb="5px" mt="5px" p="5px 10px 5px 10px" bg="gray.900" borderRadius="4">
                  <Text>Shop</Text>
                </Flex>

                <Divider borderColor={theme.colors.colorDarkYellow} />

                <Flex alignItems="center" mb="5px" mt="5px"  p="5px 10px 5px 10px" bg="gray.900" borderRadius="4">
                  <Text>Event</Text>
                </Flex>

              </Flex>
            </>
          ) : (
            <>
            </>
          )}
        </Flex>

      </Flex>
    </>
  );
};