import { combineReducers } from 'redux'
import { HANDLE_INPUT_CHANGE, ADD_DATA, SET_INPUT_MESSAGE, DELETE_DATA, SELECT_ROW } from '../actions/types'

let lastestNo = 1
const initState = {
  insertInput: {
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
  updateInput: {
    name: {
      name: 'Name',
      value: '',
      message: 'name has been used',
      isFormatCorrect: true
    },
    phone: {
      name: 'Phone',
      value: '',
      message: 'please check the format',
      isFormatCorrect: true
    },
    email: {
      name: 'Email',
      value: '',
      message: 'please check the format',
      isFormatCorrect: true
    }
  },
  selectedData: -1,
  data: []
}

const datatableReducer = (state = initState, action) => {
  // console.log(action)
  switch (action.type) {

    case HANDLE_INPUT_CHANGE:
      let newInput = Object.assign({}, state[action.payload.inputMode])
      newInput[action.payload.textbox].value = action.payload.value
      if (action.payload.inputMode === 'updateInput')
        return Object.assign({}, state, { updateInput: newInput })
      else if (action.payload.inputMode === 'insertInput')
        return Object.assign({}, state, { insertInput: newInput })

    case ADD_DATA:
      let data = Object.keys(state.insertInput).reduce((acc, key) => {
        acc[key] = state.insertInput[key].value
        return acc
      }, {})
      data.no = lastestNo++
      return Object.assign({}, state, {
        data: [...state.data, data]
      })

    case DELETE_DATA:
      // 取得欲刪除 data 之 index
      const index = state.data.map(data => data.no).indexOf(action.payload.no)
      state.data.splice(index, 1)
      return Object.assign({}, state, {
        data: [...state.data]
      })

    case SELECT_ROW:
      let selectedInput = Object.assign({}, state.updateInput)
      // 設定被選中 row 的值到 input value state 之中
      Object.keys(selectedInput).map(key => selectedInput[key].value = action.payload[key])
      return Object.assign({}, state, {
        selectedData: action.payload.no,
        updateInput: selectedInput
      })

    case SET_INPUT_MESSAGE:
      let newInputState = Object.assign({}, state[action.payload.inputMode])
      // 若沒有 payload.message 參數傳入
      newInputState[action.payload.textbox].message
        = action.payload.message || newInputState[action.payload.textbox].message
      newInputState[action.payload.textbox].isFormatCorrect = action.payload.bool
      if (action.payload.inputMode === 'updateInput')
        return Object.assign({}, state, { updateInput: newInputState })
      else if (action.payload.inputMode === 'insertInput')
        return Object.assign({}, state, { insertInput: newInputState })

    default:
      return state
  }
}

export default combineReducers({
  root: datatableReducer
})