import React, { Component, PropTypes } from 'react'
import CoursesList from './CoursesList';
class App extends Component {
    constructor(...props) {
        super(...props)
        this.state = {
            courses:[
                { id: 1, nombre: 'Roberto' },
                { id: 2, nombre: 'Sosa' }
            ]

        }
    }
    render() {
        return (

            <CoursesList courses={this.state.courses }/>

        )

    }
}
// App.Proptypes={}
// App.defaultProps={}
export default App