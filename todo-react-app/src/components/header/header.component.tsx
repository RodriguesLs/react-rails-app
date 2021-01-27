import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { FaCheckCircle } from 'react-icons/fa'

export const HeaderComponent = () => (
  <div>
    <Navbar>
      <Navbar.Brand>
        <FaCheckCircle size="1em" />Task finished
      </Navbar.Brand>
    </Navbar>
  </div>
)
