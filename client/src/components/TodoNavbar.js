import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap'

function TodoNavbar (args) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color='light' light expand='sm' className='mt-5' {...args}>
        <NavbarBrand href='/'>TodoList</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='me-auto' navbar>
            <NavItem>
              {/* <NavLink href='/components/'>Components</NavLink> */}
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/IscaRiot6/mvp-todo.git'>
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>What an ugly todo-list!</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default TodoNavbar
