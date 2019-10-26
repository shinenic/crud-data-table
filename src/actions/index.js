import {
  HANDLE_INPUT_CHANGE,
  ADD_DATA,
  SET_INPUT_MESSAGE,
  DELETE_DATA,
  SWITCH_INPUT_MODE
} from './types'

export function handleInputChange(textbox, value) {
  return {
    type: HANDLE_INPUT_CHANGE,
    payload: {
      textbox, value
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

export function setInputMessage(textbox, bool, message) {
  return {
    type: SET_INPUT_MESSAGE,
    payload: {
      textbox, bool, message
    }
  }
}

export function switchInputMode(mode, updateNo) {
  return {
    type: SWITCH_INPUT_MODE,
    payload: {
      mode, updateNo
    }
  }
}