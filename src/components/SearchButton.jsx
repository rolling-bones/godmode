import * as React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography'
import { alpha } from '@material-ui/core/styles/colorManipulator';

function SearchButton(){
  const theme = createTheme({
    palette: {
      primary: {
        main: alpha('#D2A17B', 0.7),
        contrastText: '#6C6060'
      },
      background: {
        default: '#394764'
      }
    },
  });

  return(
    <>
    <Typography align='center'>
    <ThemeProvider theme={theme}>
      <Button
          color='primary'
          variant='contained'
          startIcon={<SearchIcon />}
          onClick={() => alert('Help Me')}
          style={{
            maxWidth: "500px",
            maxHeight: "50px",
            minWidth: "400px",
            minHeight: "30px"
          }}>
            Find My Game
          </Button>
      </ThemeProvider>
      </Typography>
      </>
    )
}

export default SearchButton;