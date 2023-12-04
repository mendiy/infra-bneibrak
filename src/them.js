import { createTheme} from '@mui/material/styles';

const them = createTheme({
    palette: {
      primary: {
        main: '#F6C927',
      },
      background: { default: '#0A0A1B' },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1080,
        xl: 1920,
      },
    },
  });
  
  export default them;