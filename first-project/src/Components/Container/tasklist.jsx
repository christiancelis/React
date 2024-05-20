import React from 'react'
import PropTypes from 'prop-types'
import { Task } from "../../models/task.class";
import { levels } from '../../models/levels.enum';
import TaskComponent from '../Pure/task';

export function TasklistComponent() {

    const defaultTask = new Task("Example","DefaultDescription","false",levels.NORMAL);

  return (
    <div>
        <div>
            <h1>your task:</h1> 
        </div>
        <TaskComponent task={defaultTask}> </TaskComponent>
    </div>
  )
}

export default TasklistComponent
