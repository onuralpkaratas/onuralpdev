import Head from 'next/head';
import {
  Flex,
  Box,
  Button,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const buttonBg = useColorModeValue('gray.100', 'whiteAlpha.100');
  const buttonBgHover = useColorModeValue('gray.200', 'whiteAlpha.300');

  return (
    <>
      <Head>
        <title>Onuralp Karataş - Front End Developer</title>
      </Head>
      <Button
        onClick={toggleColorMode}
        bg={buttonBg}
        _hover={{ bg: buttonBgHover }}
        p="15px"
        height="auto"
        position="absolute"
        top="30px"
        left="30px"
      >
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
      <Flex
        as="div"
        px="30px"
        top="50%"
        left="50%"
        maxW="700px"
        w="100%"
        position="fixed"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        transform="translate(-50%, -50%)"
      >
        <Header />
        <Box as="main" my="40px">
          {children}
        </Box>
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
