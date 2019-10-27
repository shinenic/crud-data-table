import { combineReducers } from 'redux'
import {
  HANDLE_INPUT_CHANGE,
  ADD_DATA,
  UPDATE_DATA,
  SET_INPUT_MESSAGE,
  DELETE_DATA,
  SELECT_ROW
} from '../actions/types'

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
      value: '0900-465-725',
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
  lastestNo: 5,
  selectedData: -1,
  data: [
    {
      name: 'Tim',
      phone: '0981-495-798',
      email: 'fs234@gamil.com',
      no: 1
    },
    {
      name: 'Zed',
      phone: '0000-159-159',
      email: 'zzz@gamil.com',
      no: 2
    },
    {
      name: 'Cat',
      phone: '0956-785-498',
      email: 'cat@gamil.com',
      no: 3
    },
    {
      name: 'Annie',
      phone: '0198-458-498',
      email: 'ani@hotmail.con.tw',
      no: 4
    },
    {
      name: 'Gali5566',
      phone: '0198-498-452',
      email: 'g5566@gamil.com',
      no: 5
    }
  ]
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
      const newData = Object.keys(state.insertInput).reduce((acc, key) => {
        acc[key] = state.insertInput[key].value
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

    default:
      return state
  }
}

export default combineReducers({
  root: datatableReducer
})