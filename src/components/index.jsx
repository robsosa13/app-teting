import React, { Component } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'
import CoursesList from './CoursesList';
import CourseAddForm from './CourseAddForm';
import { courses } from "../data/courses.json";
//import uid from 'uid'
class App extends Component {
    constructor(...props) {
        super(...props)
        this.state = {
           // courses: courses
               courses: []
        }
        this.handleOnAddCourse = this.handleOnAddCourse.bind(this)
        this.fetchData = this.fetchData.bind(this)
        this.resetData = this.resetData.bind(this)
    }
    // bindeo dentro del constructor
    handleOnAddCourse(e) {
        // alert('Alert en React ')
        e.preventDefault()
        let form = e.target,
            course = {
                id: form.id.value,
                nombre: (form.nombre.value) ? form.nombre.value : App.defaultProps.nombre
            }
        this.setState({

            courses: this.state.courses.concat([course])
        })
        form.reset()

    }
    fetchData(){
      //  setTimeout(()=>this.setState({courses:courses}),2000)
        $('#root').fadeOut(2000,()=>this.setState({courses:courses})).fadeIn()
    }
    resetData(){
            $('#root').fadeOut(2000,()=>this.setState({courses:[]})).fadeIn()
           // this.setState({ courses:[] })
    }   
    componentDidMount(){ 
             this.fetchData({})
         }
    render() {
        if(!this.state.courses.length){

            return(
                <div>
                    <p>No hay cursos</p>
                    <button onClick={this.fetchData}>Cargar</button>
                </div>
            )
        }
        else{
            return (
                <div>
                    <CourseAddForm onAddCourse={this.handleOnAddCourse} />
                    <CoursesList courses={this.state.courses} />
                    <button onClick={this.resetData}>Borrar</button>
                </div>
            )
        }
    }
}

App.propTypes = {
    id: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired
}

App.defaultProps = {
    //id:uid(10),
    nombre: 'Nombre no Asignado'
}
export default App