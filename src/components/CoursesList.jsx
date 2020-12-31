import React from 'react'
import Course  from './Course';
const  CoursesList =(...props)=> (
            
    <div>
    <form action="">
        <input type="text" placeholder="Nombre" name="Nombre" />
        <input type="text" placeholder="Nombre" name="Nombre" />
        <input type="hidden" name="id" value={Math.floor(Math.random() * 100)} />
        <input type="submit" value="Guardar" />

    </form>
    <ul>
        <Course/>
    </ul>

</div>
)
export default CoursesList 
