import { combineReducers } from 'redux'
import {
  HANDLE_INPUT_CHANGE,
  ADD_DATA,
  UPDATE_DATA,
  SET_INPUT_MESSAGE,
  DELETE_DATA,
  SELECT_ROW,
  SET_IS_FETCHING
} from '../actions/types'

const initState = {
  insertInput: {
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
  lastestNo: 0,
  data: [],
  isFetching: false
}

const datatableReducer = (state = initState, action) => {
  switch (action.type) {

    case HANDLE_INPUT_CHANGE:
      let newInput = Object.assign({}, state[action.payload.inputMode])
      newInput[action.payload.textbox].value = action.payload.value
      if (action.payload.inputMode === 'updateInput')
        return Object.assign({}, state, { updateInput: newInput })
      else if (action.payload.inputMode === 'insertInput')
        return Object.assign({}, state, { insertInput: newInput })
      else return Object.assign({}, state)
    case ADD_DATA:
      const newData = Object.keys(action.payload).reduce((acc, key) => {
        acc[key] = action.payload[key]
        return acc
      }, {})
      newData.no = state.lastestNo + 1
      return Object.assign({}, state, {
        data: [...state.data, newData],
        lastestNo: state.lastestNo + 1
      })
    case UPDATE_DATA:
      const updateData = Object.keys(state.updateInput).reduce((acc, key) => {
        acc[key] = state.updateInput[key].value
        return acc
      }, {})
      updateData.no = state.selectedData
      const updateDataIndex = state.data.map(data => data.no).indexOf(state.selectedData)
      const updateDatas = [...state.data]
      updateDatas.splice(updateDataIndex, 1, updateData)
      return Object.assign({}, state, {
        data: [...updateDatas]
      })
    case DELETE_DATA:
      // 取得欲刪除 data 之 index
      const index = state.data.map(data => data.no).indexOf(action.payload.no)
      state.data.splice(index, 1)
      return Object.assign({}, state, {
        data: [...state.data]
      })
    case SELECT_ROW:
      // 設定為不選擇任何 row 更新
      if (action.payload.no === -1)
        return Object.assign({}, state, {
          selectedData: -1
        })
      // 設定被選中 row 的值到 update input value 之中
      let selectedInput = Object.assign({}, state.updateInput)
      Object.keys(selectedInput).map(key => {
        selectedInput[key].value = action.payload[key]
        selectedInput[key].isFormatCorrect = true
        return undefined
      })
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
      else
        return Object.assign({}, state)
    case SET_IS_FETCHING:
      return Object.assign({}, state, {
        isFetching: action.payload
      })
    default:
      return state
  }
}

export default combineReducers({
  root: datatableReducer
})