import { HANDLE_INPUT_CHANGE, ADD_DATA, SET_INPUT_MESSAGE } from './types'

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

export function setInputMessage(textbox, bool, message) {
  return {
    type: SET_INPUT_MESSAGE,
    payload: {
      textbox, bool, message
    }
  }
}