import React from 'react'


const CourseAddForm = props =>(
    <form onSubmit={props.onAddCourse}>
        <input type="text" placeholder="Nombre" name="nombre" />
        <input type="hidden" name="id" value={Math.floor(Math.random() * 100)} />
        <input type="submit" value="Guardar" />
    </form>
)
export default CourseAddForm    