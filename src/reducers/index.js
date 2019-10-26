import { combineReducers } from 'redux'
import { HANDLE_INPUT_CHANGE, ADD_DATA, SET_INPUT_MESSAGE, DELETE_DATA } from '../actions/types'

let lastestNo = 1
const initState = {
  input: {
    name: {
      name: 'Name',
      value: 'Jack',
      message: 'name has been used',
      isFormatCorrect: true
    },
    phone: {
      name: 'Phone',
      value: '0900',
      message: 'please check the format',
      isFormatCorrect: true
    },
    email: {
      name: 'Email',
      value: 'fs@yahoo.com',
      message: 'please check the format',
      isFormatCorrect: true
    }
  },
  data: []
}

const datatableReducer = (state = initState, action) => {
  switch (action.type) {

    case HANDLE_INPUT_CHANGE:
      let newInput = Object.assign({}, state.input)
      newInput[action.payload.textbox].value = action.payload.value
      return Object.assign({}, state, { input: newInput })

    case ADD_DATA:
      let data = Object.keys(state.input).reduce((acc, key) => {
        acc[key] = state.input[key].value
        return acc
      }, {})
      data.no = lastestNo++
      return Object.assign({}, state, {
        data: [...state.data, data]
      })

    case DELETE_DATA:
      const index = state.data.map(data => data.no).indexOf(action.payload.no)
      state.data.splice(index, 1)
      return Object.assign({}, state, {
        data: [...state.data]
      })

    case SET_INPUT_MESSAGE:
      let newInputState = Object.assign({}, state.input)
      // 若沒有 payload.message 參數傳入
      newInputState[action.payload.textbox].message
        = action.payload.message || newInputState[action.payload.textbox].message
      newInputState[action.payload.textbox].isFormatCorrect = action.payload.bool
      return Object.assign({}, state, { input: newInputState })

    default:
      return state
  }
}

export default combineReducers({
  root: datatableReducer
})