import { v1 as uuid } from 'uuid'
// import uuid from 'uuid'
import { GET_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../actions/types'

const initialState = {
  todos: [
    { id: uuid(), todo: 'get set' },
    { id: uuid(), todo: 'coffee' },
    { id: uuid(), todo: 'get anxious again' }
  ]
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    default:
      return state
  }
}
