import {
  HANDLE_INPUT_CHANGE,
  ADD_DATA,
  UPDATE_DATA,
  SET_INPUT_MESSAGE,
  DELETE_DATA,
  SELECT_ROW,
  SET_IS_FETCHING
} from './types'

export function handleInputChange(inputMode, textbox, value) {
  return {
    type: HANDLE_INPUT_CHANGE,
    payload: {
      inputMode, textbox, value
    }
  }
}

export function addData(data) {
  return {
    type: ADD_DATA,
    payload: data
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

export function setIsFetching(bool) {
  return {
    type: SET_IS_FETCHING,
    payload: bool
  }
}