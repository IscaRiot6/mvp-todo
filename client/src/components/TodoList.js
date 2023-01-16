import React, { Component } from 'react'
import { Container, Button, ListGroup, ListGroupItem } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
// import { v1 as uuid } from 'uuid'
import { connect } from 'react-redux'
import { getTodos, deleteTodo } from '../actions/todoActions'
import PropTypes from 'prop-types'

class TodoList extends Component {
  componentDidMount () {
    this.props.getTodos()
  }

  onDelete = id => {
    this.props.deleteTodo(id)
  }

  render () {
    const { todos } = this.props.todo
    return (
      <Container>
        {/* <Button
          color='secondary'
          onClick={() => {
            const todo = prompt('Enter todo')
            if (todo) {
              this.setState(state => ({
                todos: [...state.todos, { id: uuid(), todo }]
              }))
            }
          }}
        >
          Add todo
        </Button> */}

        <ListGroup>
          <TransitionGroup className='todo_list'>
            {/* map through todos with destructuring */}
            {todos.map(({ id, todo }) => (
              <CSSTransition key={id} timeout={600} classNames='fade'>
                <ListGroupItem>
                  <Button
                    className='remove-btn'
                    color='danger'
                    size='sm'
                    //   using a high-order function in order to delete straight from the DB
                    onClick={this.onDelete.bind(this, id)}
                  >
                    &times;
                  </Button>
                  <br></br>
                  <Button
                    className='update-btn'
                    color='primary'
                    size='sm'
                  ></Button>
                  {todo}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    )
  }
}

TodoList.propTypes = {
  getTodos: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todo: state.todo
})

export default connect(mapStateToProps, { getTodos, deleteTodo })(TodoList)

// state = {
//   todos: [
//     { id: uuid(), todo: 'get set' },
//     { id: uuid(), todo: 'coffee' },
//     { id: uuid(), todo: 'get anxious' }
//   ]
// }
