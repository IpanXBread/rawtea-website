// BodyAbout.js
import React from 'react';
import { Box, Grid, GridItem, Text, Button, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Heading } from '@chakra-ui/react';
import { FaClock, FaBomb } from 'react-icons/fa';

const BodyAbout = () => {
  return (
    <>
      <Flex p="100px 50px 50px 50px" display="flex" justifyContent="space-between" alignContent="center" alignItems="center">
        <Heading>Shop</Heading>
        {/* <Text color="yellow">View More</Text> */}
      </Flex>
      <>
        <Grid
          templateColumns="2fr 2fr 2fr"
          gap={8}
          p="0px 50px 100px 50px"
        >

          {/* Builder */}
          <GridItem colSpan={1} rowSpan={1}>
            <Box h="700px" mb="7" bgGradient="linear(to-b, red.300, purple.800)" p="4" rounded="30">
              <Flex h="70%">
                <Button mt="1" fontSize="xs" color="black" bg="yellow.400" rounded="50px" h="30px" w="90px">
                  DETAILS
                </Button>
              </Flex>
              <Flex>
                <Text m="0px 10px 0px 0px" display="flex" flexDirection="row" alignItems="center" >
                  <Flex mr="3" color="gray"><FaClock /></Flex>
                  <Flex mr="10">Price</Flex>
                </Text>
                <Text m="0px 10px 0px 0px" display="flex" flexDirection="row" alignItems="center">
                  <Flex mr="3" color="gray"><FaBomb /></Flex>
                  <Flex mr="10">Duration</Flex>
                </Text>
              </Flex>
              <Flex>
                <Text fontSize="5xl" textAlign="center" fontWeight="bold">
                  Builder
                </Text>
              </Flex>
            </Box>
          </GridItem>

          {/* Redstoner */}
          <GridItem colSpan={1} rowSpan={1}>
            <Box h="700px" mb="7" bgGradient="linear(to-b, red.300, purple.800)" p="4" rounded="30">
              <Flex h="70%">
                <Button mt="1" fontSize="xs" color="black" bg="yellow.400" rounded="50px" h="30px" w="90px">
                  DETAILS
                </Button>
              </Flex>
              <Flex>
                <Text m="0px 10px 0px 0px" display="flex" flexDirection="row" alignItems="center" >
                  <Flex mr="3" color="gray"><FaClock /></Flex>
                  <Flex mr="10">Price</Flex>
                </Text>
                <Text m="0px 10px 0px 0px" display="flex" flexDirection="row" alignItems="center">
                  <Flex mr="3" color="gray"><FaBomb /></Flex>
                  <Flex mr="10">Duration</Flex>
                </Text>
              </Flex>
              <Flex>
                <Text fontSize="5xl" textAlign="center" fontWeight="bold">
                  Redstoner
                </Text>
              </Flex>
            </Box>
          </GridItem>

          {/* Adventurer */}
          <GridItem colSpan={1} rowSpan={1}>
            <Box h="700px" mb="7" bgGradient="linear(to-b, red.300, purple.800)" p="4" rounded="30">
              <Flex h="70%">
                <Button mt="1" fontSize="xs" color="black" bg="yellow.400" rounded="50px" h="30px" w="90px">
                  DETAILS
                </Button>
              </Flex>
              <Flex>
                <Text m="0px 10px 0px 0px" display="flex" flexDirection="row" alignItems="center" >
                  <Flex mr="3" color="gray"><FaClock /></Flex>
                  <Flex mr="10">Price</Flex>
                </Text>
                <Text m="0px 10px 0px 0px" display="flex" flexDirection="row" alignItems="center">
                  <Flex mr="3" color="gray"><FaBomb /></Flex>
                  <Flex mr="10">Duration</Flex>
                </Text>
              </Flex>
              <Flex>
                <Text fontSize="5xl" textAlign="center" fontWeight="bold">
                  Adventurer
                </Text>
              </Flex>
            </Box>
          </GridItem>

        </Grid>
      </>
    </>
  );
}

export default BodyAbout;