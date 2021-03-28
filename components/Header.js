import { Box, Heading, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box as="header">
      <Heading as="h1" fontSize="2em">
        Hey! 👋🏼 I'm Onuralp
      </Heading>
      <Text mt="10px" fontSize="1.1em">
        Front End Developer
      </Text>
    </Box>
  );
};

export default Header;
