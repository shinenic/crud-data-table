import Reducer from '../index'
import {
  HANDLE_INPUT_CHANGE,
  ADD_DATA,
  UPDATE_DATA,
  SET_INPUT_MESSAGE,
  DELETE_DATA,
  SELECT_ROW,
  SET_IS_FETCHING
} from '../../actions/types'

const testData = { name: 'Jack', phone: '0654-498-755', email: 'ace@yees.com' }

describe('reducer', () => {
  it('handles actions with unknown type', () => {
    const newState = Reducer({}, {})
    const unknownType = Reducer({}, { action: undefined })
    expect(newState).toEqual(unknownType)
  })

  it('handles actions with type HANDLE_INPUT_CHANGE', () => {
    const action = {
      type: HANDLE_INPUT_CHANGE,
      payload: { inputMode: 'insertInput', textbox: 'name', value: 'Jim' }
    }
    const newState = Reducer(undefined, action)
    expect(newState.root.insertInput.name.value).toEqual('Jim')
  })

  it('handles actions with type ADD_DATA', () => {
    const action = {
      type: ADD_DATA,
      payload: testData
    }
    const newState = Reducer(undefined, action)
    const testDataWithNo = Object.assign({}, testData)
    testDataWithNo.no = 1
    expect(newState.root.data.length).toEqual(1)
    expect(newState.root.data[0]).toEqual(testDataWithNo)
  })

  it('handles actions with type SET_IS_FETCHING', () => {
    const action = {
      type: SET_IS_FETCHING,
      payload: true
    }
    const newState = Reducer(undefined, action)
    expect(newState.root.isFetching).toEqual(true)
  })

  it('handles actions with type SET_INPUT_MESSAGE', () => {
    const payload = {
      inputMode: 'insertInput', textbox: 'phone', bool: true, message: 'test'
    }
    const action = {
      type: SET_INPUT_MESSAGE,
      payload
    }
    const newState = Reducer(undefined, action)
    expect(newState.root.insertInput.phone.isFormatCorrect).toEqual(true)
    expect(newState.root.insertInput.phone.message).toEqual(payload.message)
  })

  describe('with one data', () => {
    let oneDataState
    beforeEach(() => {
      const action = {
        type: ADD_DATA,
        payload: testData
      }
      oneDataState = Reducer(undefined, action)
    })
    afterEach(() => { oneDataState = {} })

    it('handles actions with type DELETE_DATA', () => {
      const action = {
        type: DELETE_DATA,
        payload: { no: 1 }
      }
      const deletedState = Reducer(oneDataState, action)
      expect(deletedState.root.data.length).toEqual(0)
    })


    it('handles actions with type SELECT_ROW', () => {
      const action = {
        type: SELECT_ROW,
        payload: Object.assign({}, testData, { no: 1 })
      }
      const newState = Reducer(oneDataState, action)
      expect(newState.root.selectedData).toEqual(1)
      expect(newState.root.updateInput.name.value).toEqual(testData.name)
      expect(newState.root.updateInput.phone.value).toEqual(testData.phone)
      expect(newState.root.updateInput.email.value).toEqual(testData.email)
    })

    it('handles actions with type UPDATE_DATA', () => {
      // 先選擇 row
      const selectRowAction = {
        type: SELECT_ROW,
        payload: Object.assign({}, testData, { no: 1 })
      }
      const selectedRowState = Reducer(oneDataState, selectRowAction)
      // 更新 updateInput value
      const updateValueAction = {
        type: HANDLE_INPUT_CHANGE,
        payload: { inputMode: 'updateInput', textbox: 'phone', value: '0123' }
      }
      const updatedRowState = Reducer(selectedRowState, updateValueAction)

      const action = {
        type: UPDATE_DATA
      }
      const newState = Reducer(updatedRowState, action)
      expect(newState.root.data.length).toEqual(1)
      expect(newState.root.data[0]).toEqual(Object.assign({}, testData, { no: 1, phone: '0123' }))
    })
  })
})