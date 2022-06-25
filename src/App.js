import React from 'react';
import SearchButton from './components/SearchButton.jsx'
import Header from './components/Header.jsx'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from "@mui/material/Typography";
import './style.css'

class App extends React.Component {
constructor(props){
  super(props);
  this.state={
    page: 'home'
  }
}

  render(){
    return(
    <>
    <Header page={this.state.page}/>
    <SearchButton />
    </>
    )
  }
}

export default App;