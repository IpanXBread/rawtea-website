// BodyIntro.js
import React from 'react';
import { Box, Flex, Text, Image, Divider, useTheme } from '@chakra-ui/react';
import '../styles/styles.css'

const BodyIntro = () => {

  const theme = useTheme();

  return (
    <Flex
      justify="center"
      align="center"
      height="80vh"
      bg="gray.900"
      flexDirection="row"
      p="10%"
    >
      {/* Image on the left */}
      <Box marginRight="2%">
        <Image src="..\favicon.ico" alt="Image" className="icon-size"/>
      </Box>

      {/* Text in the center */}
      <Box maxWidth="60%">
        <Text variant="big">
          Build your dreams
        </Text>

        <Text variant="small" lineHeight="1" mt="10px">
          Explore and build your way on the best Minecraft Creative Server in <Text as="span" color={theme.colors.colorDarkYellow} fontWeight="bold">South East Asia</Text> region!
        </Text>
        <Text>

        </Text>
        <Text variant="smallest" mt="10px">
          Java, Bedrock, even Cracked Players can join freely!
        </Text>
      </Box>
    </Flex>
  );
}

export default BodyIntro;