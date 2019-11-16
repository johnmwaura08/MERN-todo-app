import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Done, ThreeDRotation } from '@material-ui/icons';
import { Button } from '@material-ui/core';
class TodoList extends React.Component{
    constructor(props){
        super(props);

        this.state = {todos: []}
    }

    componentDidMount(){
        fetch('http://localhost:5000/api/todos').then(
            res => res.json()
        )
        .then( items => this.setState({ todos: items}))
    }
    completeCell(completed){
        if(completed){
            return (<Done/>)
        }else{
            <Button variant="contained" color="primary"> Complete </Button>
        }
            
        
        return(

        )
    }
    render(){

        return (
            <Table>
            <TableHead>
              <TableRow>
                <TableCell>Todo Name</TableCell>
                <TableCell align="right">Completed</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.todos.map(todo => (
                <TableRow key={todo._id}>
                  <TableCell component="th" scope="row">
                  { todo.name}
                  </TableCell>
                  <TableCell align="right">{this.completeCell(todo.completed}</TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <h1>{this.state.todos.length> 0 ? this.state.todos[0].name: "no todos"}</h1>
        )
    }
  
}

export default TodoList;