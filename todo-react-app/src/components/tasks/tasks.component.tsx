import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ListComponent } from './list.component'

export const TasksComponent = () => (
  <div>
    <Row>
      <Col xs={{ span: 8, offset: 2}} className="tasks-list">
        <p className="title">To-do</p>
        <ListComponent />
      </Col>
      <Col xs={{ span: 8, offset: 2 }} className="tasks-list">
        <p className="title">Done</p>
        <ListComponent />
      </Col>
    </Row>
  </div>
)
