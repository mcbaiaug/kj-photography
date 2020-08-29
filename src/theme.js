import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    type: 'dark',

    primary: {
      light: '#484848',
      main: '#212121',
      dark: '	#241e1e',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#00c7c7',
      main: '#00a0a0',
      dark: '#007979',
      contrastText: '#ffffff',
    },
    background: {
      default: '#212121',
      
    },
  },
  typography:{
    fontSize: 24,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#212121',
        },
      },
    },
  },
})

export default theme