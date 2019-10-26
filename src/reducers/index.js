import { combineReducers } from 'redux'
import { HANDLE_INPUT_CHANGE, ADD_DATA, SET_INPUT_MESSAGE, DELETE_DATA, SWITCH_INPUT_MODE } from '../actions/types'

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
  inputMode: 'ADD', // UPDATE
  updatingDataNo: -1,
  data: []
}

const datatableReducer = (state = initState, action) => {
  console.log(action)
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
      // 取得欲刪除 data 之 index
      const index = state.data.map(data => data.no).indexOf(action.payload.no)
      state.data.splice(index, 1)
      return Object.assign({}, state, {
        data: [...state.data]
      })

    case SWITCH_INPUT_MODE:
      switch (action.payload.mode) {
        case 'ADD':
          let addModeInput = Object.assign({}, state.input)
          addModeInput.map(value => {
            value.value = ''
            value.isFormatCorrect = true
            return undefined
          })
          return Object.assign({}, state, {
            input: addModeInput,
            inputMode: action.payload.mode,
            updatingDataNo: -1
          })
        case 'UPDATE':
          let updateModeInput = Object.assign({}, state.input)
          const dataKeys = ['name', 'phone', 'email']
          Object.keys(updateModeInput).map((key, index) => {
            // 取得欲更新 data 之 index
            const updateIndex = state.data.map(data => data.no).indexOf(action.payload.updateNo)
            // 取得欲更新 data 之 value
            updateModeInput[key].value = state.data[updateIndex][dataKeys[index]]
            updateModeInput[key].isFormatCorrect = true
            return undefined
          })
          return Object.assign({}, state, {
            input: updateModeInput,
            inputMode: action.payload.mode,
            updatingDataNo: action.payload.updateNo
          })
        default:
          return state
      }

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