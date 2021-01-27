import React from 'react'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa'

const deleteTask = async (task, loadTasks) => {
  if (window.confirm(`Are you sure you want to delete: "${task.title}"`)) {
    await fetch(`http://localhost:3001/tasks/${task.id}`, {method: 'DELETE'});
    loadTasks();
  }
}

export const ListComponent = ({ tasks, loadTasks }) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Table responsive>
            <tbody>
              {tasks.map((task, i) => {
                return <tr key={task.id}>
                  <td className="col-md-10">{task.title}</td>
                  <td>
                    {
                      task.done == false ? 
                      <a className="check" href="#">
                        <FaCheckCircle />
                      </a> : null
                    }
                  </td>
                  <td>
                    <a className="delete" href="#" onClick={() => deleteTask(task, loadTasks)}>
                      <FaTrashAlt />
                    </a>
                  </td>
                </tr>
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  )
}
