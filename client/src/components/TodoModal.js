import react, { Component } from 'react'
import { v1 as uuid } from 'uuid'
import { connect } from 'react-redux'
import {
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap'
import { addTodo } from '../actions/todoActions'

class TodoModal extends Component {
  state = {
    modal: false,
    todo: ''
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  onChange = e => {
    this.setState({ [e.target.todo]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()

    const newTodo = {
      id: uuid(),
      todo: this.state.todo
    }
    // add todo
    this.props.addTodo(newTodo)

    // close modal
    this.toggle()
  }

  render () {
    return (
      <Container>
        <Button color='secondary' onClick={this.toggle}>
          Add Todo
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add todo</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='todo'>Todo</Label>
                <Input
                  type='text'
                  name='todo'
                  id='Todo'
                  placeholder='Come on add something!'
                  onChange={this.onChange}
                ></Input>
                <Button color='secondary' block>
                  Add Todo
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  todo: state.todo
})

export default connect(mapStateToProps, { addTodo })(TodoModal)
