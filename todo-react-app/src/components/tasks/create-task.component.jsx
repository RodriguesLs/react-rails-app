import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export const CreateTaskComponent = ({ loadTasks }) => {
  const [title, setTitle] = useState('')
  const [show, setShow] = useState('')

  const handleSubmit = (async loadTasks => {
    await fetch('http://localhost:3001/tasks',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ task: { title, done: false }})
    })
    setShow(false)
    setTitle('')
    loadTasks()
  });

  return (
    <div>
      <Button onClick={e => setShow(true)} variant="dark" className="float-right create-task-btn">+ Task</Button>
      <Modal show={show || false} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title>New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type="text" placeholder="Enter with your task..." value={title || ''} onChange={e => setTitle(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <form onSubmit={() => handleSubmit(loadTasks)}>
            <Button variant="dark" type="submit">
              Create
            </Button>
          </form>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
