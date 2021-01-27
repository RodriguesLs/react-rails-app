import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { ListComponent } from './list.component.jsx'
import { CreateTaskComponent } from './create-task.component'

export class TasksComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: []
    };
    this.loadTasks = this.loadTasks.bind(this);
  }

  async loadTasks() {
    let response = await fetch('http://localhost:3001/tasks');
    const tasks = await response.json();
    this.setState({ tasks: tasks })
  }

  componentDidMount() {
    this.loadTasks();
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={{ span: 8, offset: 2}} className="tasks-list">
            <p className="title">To-do</p>
            <ListComponent loadTasks={this.loadTasks} tasks={this.state.tasks.filter(task => task.done != true )} />
            <CreateTaskComponent loadTasks={this.loadTasks} />
          </Col>
          <Col xs={{ span: 8, offset: 2 }} className="tasks-list">
            <p className="title">Done</p>
            <ListComponent loadTasks={this.loadTasks} tasks={this.state.tasks.filter(task => task.done == true )}/>
            <Button variant="danger" className="float-right remove-tasks-btn">Remove all tasks</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
