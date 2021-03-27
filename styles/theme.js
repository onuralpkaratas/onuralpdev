import { theme as chakraTheme } from '@chakra-ui/react';

const customTheme = {
  ...chakraTheme,
  initialColorMode: 'light',
  fonts: {
    ...chakraTheme.fonts,
    body:
      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    heading:
      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700
  }
};

export default customTheme;
