import logo from './logo.svg';
import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  { Table, Button , Container , Modal, ModalBody,ModalHeader,FormGroup,ModalFooter} from 'reactstrap'
import { element } from 'prop-types';
 const courses =[
  { id: 1, nombre: 'Robert' },
  { id: 2, nombre: 'Juan' }
];

class App  extends React.Component{
  state = {
    data:courses

  }
  render(){
    return(

      <Container>
        <br>
        </br>
            <Button> Insertar una persona </Button>
          <Table>
              <thead>
                <tr>
                  <th> Id</th>
                  <th> Nombre</th>
                  <th> Acciones</th>
                </tr>
              </thead>
              <tbody>
                {/* {this.state.data.map((elemento)=())} */}

              </tbody>
          </Table>
      </Container>

  
      
    )
  }
}
export default App;
