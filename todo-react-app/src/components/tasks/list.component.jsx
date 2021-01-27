import React from 'react'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa'

export const ListComponent = ({ tasks }) => (
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
                  <a className="delete" href="#">
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
