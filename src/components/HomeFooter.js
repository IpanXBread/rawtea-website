// HomeFooter.js
import React from 'react';
import { Box, Text, Flex, Heading, Grid, GridItem, Input, IconButton } from '@chakra-ui/react';
import { FaArrowRight, FaAddressBook, FaMailBulk, FaPhone } from 'react-icons/fa';

const HomeFooter = () => {
  return (
    <>
      <Flex
        height="350px"
        w="full"
        direction={{ base: 'column', md: 'row' }} 
      >
        {/* Left container */}
        <Box flex="1" backgroundColor="gray.600" height="100%" p="30px 50px 50px 50px">
          <Text variant="big" mr="10">Raw Tea</Text>
          <Text variant="small" mt="20px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisi vitae purus efficitur fringilla id vel ipsum.</Text>
          <Text mt="20px" fontWeight="bold">Join Newsletter</Text>
          <Box mt="20px" backgroundColor="yellow.100" h="50px" rounded="md" display="flex" alignItems="center" justifyContent="space-between" px={4}>
            <Input
              placeholder="Insert your email here"
              size={["xs", "xs", "xs", "md"]}
              rounded="md"
              border="none"
              _focus={{ border: 'none', outline: 'none' }}
              color="black"
            />
            <IconButton
              aria-label="Submit"
              icon={<FaArrowRight />}
              bg="gold"
              color="black"
              rounded="9px"
              size="sm"
            />
          </Box>
        </Box>

        {/* Right container */}
        <Box flex="2" backgroundColor="gray.700" height="100%" pb="20px">
          <Box height="60%" ml="10">
            <Grid
              templateColumns="1fr 1fr 1fr"
              gap={5}
              ml="8"
              mr="25"
              mt="70"
            >
              <GridItem colSpan={1} rowSpan={1} fontWeight="bold" _hover={{ cursor: 'pointer' }} w="fit-content">
                <Text variant="smaller">Product</Text>
              </GridItem>
              <GridItem colSpan={1} rowSpan={1} fontWeight="bold" _hover={{ cursor: 'pointer' }} w="fit-content">
                <Text variant="smaller">Media Group</Text>
              </GridItem>
              <GridItem colSpan={1} rowSpan={1} fontWeight="bold" _hover={{ cursor: 'pointer' }} w="fit-content">
                <Text variant="smaller">Sitemap</Text>
              </GridItem>
              <GridItem colSpan={1} rowSpan={1} _hover={{ cursor: 'pointer' }} w="fit-content">
                <Text variant="smaller">BUILDS</Text>
              </GridItem>
              <GridItem colSpan={1} rowSpan={1} _hover={{ cursor: 'pointer' }} w="fit-content">
                <Text variant="smaller">Nice Studio</Text>
              </GridItem>
              <GridItem colSpan={1} rowSpan={1} _hover={{ cursor: 'pointer' }} w="fit-content">
                <Text variant="smaller">About</Text>
              </GridItem>
              <GridItem colSpan={1} rowSpan={1} _hover={{ cursor: 'pointer' }} w="fit-content">
                <Text variant="smaller">TV Show</Text>
              </GridItem>
              <GridItem colSpan={1} rowSpan={1} _hover={{ cursor: 'pointer' }} w="fit-content">
                <Text variant="smaller">Nice news</Text>
              </GridItem>
              <GridItem colSpan={1} rowSpan={1} _hover={{ cursor: 'pointer' }} w="fit-content">
                <Text variant="smaller">Careers</Text>
              </GridItem>
              <GridItem colSpan={1} rowSpan={1} _hover={{ cursor: 'pointer' }} w="fit-content">
                <Text variant="smaller">Videos</Text>
              </GridItem>
              <GridItem colSpan={1} rowSpan={1} _hover={{ cursor: 'pointer' }} w="fit-content">
                <Text variant="smaller">Nice TV</Text>
              </GridItem>
              <GridItem colSpan={1} rowSpan={1} _hover={{ cursor: 'pointer' }} w="fit-content">
                <Text variant="smaller">Press</Text>
              </GridItem>
            </Grid>
          </Box>
          <Box display="flex" justifyContent="space-around" flexDirection="row" alignItems="center" ml="50px" mr="50px" mb="30px">
            <FaAddressBook />
            <Text variant="smallest" m="0px 10px 0px 10px" w="33%">
              Selangor, Malaysia
            </Text>
            <FaMailBulk />
            <Text variant="smallest" m="0px 10px 0px 10px" w="33%">
              raw-tea.my.to
            </Text>
            <FaPhone />
            <Text variant="smallest" m="0px 10px 0px 10px" w="33%">
              +03-76272929
            </Text>
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default HomeFooter;