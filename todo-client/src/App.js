import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TodoList from './TodoList'
import { Container } from '@material-ui/core';

function App() {
  return (
   <>
    //header
    <AppBar>
    <Toolbar>
      Todo App
    </Toolbar>
    </AppBar>
  
  
    //content
    <Container style ={{ padding : "20px"}} > 
    <TodoList/>

    </Container>
   </>
  );
}

export default App;
