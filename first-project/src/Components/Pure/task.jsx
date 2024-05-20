import { Task } from "../../models/task.class";

import React from 'react'
import PropTypes from 'prop-types'

export function TaskComponent({task}) {
  return (
    <div>
        <h2>Name: {task.name}</h2>
        <h3>Descripcion: {task.description}</h3>
        <h4>Level: {task.level}</h4>
        <h5>
            this task is: {task.completed ? "Completed":"Pending"}
        </h5>
    </div>
  )
}

TaskComponent.propTypes = {
    task:PropTypes.instanceOf(Task)
}

export default TaskComponent
