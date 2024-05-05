// BodyIntro.js
import React from 'react';
import { Box, Flex, Text, Image, Heading } from '@chakra-ui/react';

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
      <Box marginRight="2%">
        <Image src="..\favicon.ico" alt="Image" w="70%" />
      </Box>

      {/* Text in the center */}
      <Box>
        <Text variant="header">
          Build your dreams
        </Text>
        <Text variant="description">
          Explore and build in the no.1 Minecraft Creative Server in South East Asia region!
        </Text>
        <Text variant="description">
          Java, Bedrock, even Cracked Players can join freely!
        </Text>
      </Box>
    </Flex>
  );
}

export default BodyIntro;