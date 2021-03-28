import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '@/styles/theme';

const MyApp = ({ Component, pageProps }) => (
  <ChakraProvider theme={customTheme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
