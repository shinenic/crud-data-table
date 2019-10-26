import {
  HANDLE_INPUT_CHANGE,
  ADD_DATA,
  SET_INPUT_MESSAGE,
  DELETE_DATA,
  SELECT_ROW
} from './types'

export function handleInputChange(inputMode, textbox, value) {
  return {
    type: HANDLE_INPUT_CHANGE,
    payload: {
      inputMode, textbox, value
    }
  }
}

export function addData() {
  return {
    type: ADD_DATA
  }
}

export function deleteData(no) {
  return {
    type: DELETE_DATA,
    payload: {
      no
    }
  }
}

export function setInputMessage(inputMode, textbox, bool, message) {
  return {
    type: SET_INPUT_MESSAGE,
    payload: {
      inputMode, textbox, bool, message
    }
  }
}

export function selectRow(rowData) {
  return {
    type: SELECT_ROW,
    payload: rowData
  }
}