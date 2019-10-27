import {
  HANDLE_INPUT_CHANGE,
  ADD_DATA,
  UPDATE_DATA,
  SET_INPUT_MESSAGE,
  DELETE_DATA,
  SELECT_ROW,
  SORT_DATA
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

export function updateData() {
  return {
    type: UPDATE_DATA
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

export function sortData(sortBy, method) {
  return {
    type: SORT_DATA,
    payload: {
      sortBy, method
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