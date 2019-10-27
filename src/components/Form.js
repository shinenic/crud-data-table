import React, { Component } from 'react'
import FormInput from './FormInput'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

export const checkValueUnique = (str, data) => {
  // 過濾掉長度為零
  if (str.length === 0)
    return true
  // 尚未有資料的狀況
  if (data.length === 0)
    return true
  // 過濾掉重複的 name
  return !data.map(value => value.name).includes(str)
}

export const checkFormat = (str, type) => {
  // 過濾掉長度為零
  if (str.length === 0)
    return true
  // 格式確認
  let reg
  switch (type) {
    case 'PHONE':
      reg = /^[0-9+-]*$/
      break
    case 'EMAIL':
      reg = /^.+@[A-Za-z0-9_]+\..+$/
      break
    default:
      reg = /./
  }
  return reg.test(str)
}
export const defaultMessage = ['name has been used', 'please check the format', 'please check the format']

class Form extends Component {
  formatCheck = [
    str => checkValueUnique(str, this.props.data),
    str => checkFormat(str, 'PHONE'),
    str => checkFormat(str, 'EMAIL')
  ]
  addData = () => {
    const isFormatPass = Object.keys(this.props.insertInput).reduce((acc, key) => {
      // 重新檢查 format
      if (!this.props.insertInput[key].isFormatCorrect) {
        return false
      }
      // 確認是否有空字串
      if (this.props.insertInput[key].value.length === 0) {
        // 設定錯誤提示
        this.props.setInputMessage('insertInput', key, false, 'this field is required')
        return false
      }
      return acc
    }, true)
    if (isFormatPass) {
      const data = Object.keys(this.props.insertInput)
        .reduce((acc, key) => {
          acc[key] = this.props.insertInput[key].value
          return acc
        }, {})
      this.props.addData(data) // add data
      Object.keys(this.props.insertInput).map(key => this.props.handleInputChange('insertInput', key, '')) // clean input
    }
  }
  render() {
    return (
      <div className="form form-mobile">
        {Object.keys(this.props.insertInput).map((key, index) => {
          return (<FormInput
            key={index}
            name={this.props.insertInput[key].name}
            value={this.props.insertInput[key].value}
            handleChange={str => this.props.handleInputChange('insertInput', key, str)}
            setInputState={(bool, message) => this.props.setInputMessage('insertInput', key, bool, message)}
            check={this.formatCheck[index]}
            message={this.props.insertInput[key].message}
            isFormatCorrect={this.props.insertInput[key].isFormatCorrect}
            editable={true}
            defaultMessage={defaultMessage[index]}
            actionOnKeyDown={this.addData} />)
        })}
        <div>
          <button onClick={this.addData}>Insert</button>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    insertInput: state.root.insertInput,
    data: state.root.data
  }
}

export default connect(mapStateToProps, actions)(Form)