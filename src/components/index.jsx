import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CoursesList from './CoursesList';
import CourseAddForm from './CourseAddForm';
import { courses } from "../data/Courses";
import uid from 'uid'
class App extends Component {
    constructor(...props) {
        super(...props)
        this.state = {
            courses :courses

        }
        this.handleOnAddCourse=this.handleOnAddCourse.bind(this)
    }
    // bindeo dentro del constructor
    handleOnAddCourse(e){
       // alert('Alert en React ')
        e.preventDefault() 
        let form = e.target,
        course={
             id:form.id.value,
             nombre:(form.nombre.value)?form.nombre.value:App.defaultProps.nombre

        }
        this.setState({
       
           courses: this.state.courses.concat([course])
        })
        form.reset()
        
    }
    
    render() {
        return (
            <div>
                    <CourseAddForm onAddCourse = {this.handleOnAddCourse}/>
            <CoursesList courses={this.state.courses }
            
            />

            </div>
        

        )

    }
}

App.propTypes = {
    id:PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired
}

App.defaultProps={
    //id:uid(10),
    nombre :'Nombre no Asignado'
}
export default App