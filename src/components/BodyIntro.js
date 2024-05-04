// BodyIntro.js
import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';

const BodyIntro = () => {
  return (
    <Flex
      justify="center"
      align="center"
      height="80vh"
      bg="gray.900"
      flexDirection="row"
      p="180px"
    >
      {/* Image on the left */}
      <Box width="30%" marginRight="2%">
        <Image src="..\favicon.ico" alt="Image" w="70%" />
      </Box>

      {/* Text in the center */}
      <Box width="50%">
        <h1 style={{ fontSize: '50px' }}>
          Build your dreams
        </h1>
        <h3 fontSize="20px">
          Explore and build in the no.1 Minecraft Creative Server in South East Asia region!
        </h3>
        <h3 fontSize="20px">
          Java, Bedrock, even Cracked Players can join freely!
        </h3>
      </Box>
    </Flex>
  );
}

export default BodyIntro;