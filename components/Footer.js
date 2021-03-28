import { Link, Flex, Box } from '@chakra-ui/react';
import { Github, Dribbble, LinkedIn, Twitter, Spotify } from '@/styles/theme';

const Footer = () => {
  return (
    <Box as="footer">
      <Flex as="div" m="-10px">
        <Link
          href="https://github.com/onuralpkaratas"
          d="block"
          p="10px"
          isExternal
        >
          <Github boxSize="24px" />
        </Link>
        <Link
          href="https://dribbble.com/onuralpkaratas"
          d="block"
          p="10px"
          _hover={{ color: '#ea4c89' }}
          isExternal
        >
          <Dribbble boxSize="24px" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/onuralpkaratas/"
          d="block"
          p="10px"
          _hover={{ color: '#0a66c2' }}
          isExternal
        >
          <LinkedIn boxSize="24px" />
        </Link>
        <Link
          href="https://twitter.com/onuralpkaratas"
          d="block"
          p="10px"
          _hover={{ color: '#1da1f2' }}
          isExternal
        >
          <Twitter boxSize="24px" />
        </Link>
        <Link
          href="https://open.spotify.com/user/onuralpkaratas"
          d="block"
          p="10px"
          _hover={{ color: '#1ed760' }}
          isExternal
        >
          <Spotify boxSize="24px" />
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
