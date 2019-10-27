import {
  HANDLE_INPUT_CHANGE,
  ADD_DATA,
  UPDATE_DATA,
  SET_INPUT_MESSAGE,
  DELETE_DATA,
  SELECT_ROW,
  SET_IS_FETCHING
} from '../types'
import {
  handleInputChange,
  addData,
  updateData,
  setInputMessage,
  deleteData,
  selectRow,
  setIsFetching
} from '../index'

const testData = { name: 'Jack', phone: '0654-498-755', email: 'ace@yees.com' }

describe('action HANDLE_INPUT_CHANGE', () => {
  it('has correct type', () => {
    expect(handleInputChange().type).toEqual(HANDLE_INPUT_CHANGE)
  })
  it('has correct payload', () => {
    expect(handleInputChange('insert', 'name', 'Jack').payload)
      .toEqual({ inputMode: 'insert', textbox: 'name', value: 'Jack' })
  })
})

describe('action ADD_DATA', () => {
  it('has correct type', () => {
    expect(addData().type).toEqual(ADD_DATA)
  })
  it('has correct payload', () => {
    expect(addData(testData).payload).toEqual(testData)
  })
})

describe('action UPDATE_DATA', () => {
  it('has correct type', () => {
    expect(updateData().type).toEqual(UPDATE_DATA)
  })
  it('has correct payload', () => {
    expect(updateData().payload).toEqual(undefined)
  })
})

describe('action SET_INPUT_MESSAGE', () => {
  it('has correct type', () => {
    expect(setInputMessage().type).toEqual(SET_INPUT_MESSAGE)
  })
  it('has correct payload', () => {
    expect(setInputMessage(
      'insert', 'name', true, 'default message'
    ).payload).toEqual({
      inputMode: 'insert', textbox: 'name', bool: true, message: 'default message'
    })
  })
})

describe('action DELETE_DATA', () => {
  it('has correct type', () => {
    expect(deleteData().type).toEqual(DELETE_DATA)
  })
  it('has correct payload', () => {
    expect(deleteData(1).payload).toEqual({ no: 1 })
  })
})

describe('action SELECT_ROW', () => {
  it('has correct type', () => {
    expect(selectRow().type).toEqual(SELECT_ROW)
  })
  it('has correct payload', () => {
    expect(selectRow({ no: 1 }).payload).toEqual({ no: 1 })
  })
})

describe('action SET_IS_FETCHING', () => {
  it('has correct type', () => {
    expect(setIsFetching().type).toEqual(SET_IS_FETCHING)
  })
  it('has correct payload', () => {
    expect(setIsFetching(true).payload).toEqual(true)
  })
})