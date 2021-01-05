import React from 'react'
import Course  from './Course';
const  CoursesList =(props)=> (       
    <div>

    <ul> 
        {
            props.courses.map(course=>(
                <Course
                key= {course.id}
                id= {course.id}
                nombre= {course.nombre}
                />
            ))
        }
    </ul>


    
</div>
)
export default CoursesList  
