// BodyIntro.js
import React from 'react';
import { Box, Flex, Text, Image, Divider, useTheme } from '@chakra-ui/react';
import RawTea from '../images/rawtea.png';
import BuildBackground from '../images/build2.b.png';
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
    >

      {/* Text in the center */}
      <Box maxWidth="80%">
        <Text variant="big" lineHeight="1">
          Build your dreams
        </Text>
        
        <Text variant="small" lineHeight="1" mt="10px">
          Explore your way on the best Minecraft Creative Server in <Text as="span" color={theme.colors.colorDarkYellow} fontWeight="bold">South East Asia</Text>!
        </Text>
        <Text>

        </Text>
        <Text variant="smallest" mt="10px" lineHeight="1">
          Java, Bedrock, even Cracked Players can join freely!
        </Text>
      </Box>
    </Flex>
  );
}

export default BodyIntro;