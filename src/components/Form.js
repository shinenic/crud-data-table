import React, { Component } from 'react'
import FormInput from './FormInput'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

const checkValueUnique = (str, data) => {
  // 過濾掉長度為零
  if (str.length === 0)
    return true
  // 尚未有資料的狀況
  if (data.length === 0)
    return true
  // 過濾掉重複的 name
  return !data.map(value => value.name).includes(str)
}

const checkFormat = (str, type) => {
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

class Form extends Component {
  formatCheck = [
    str => checkValueUnique(str, this.props.data),
    str => checkFormat(str, 'PHONE'),
    str => checkFormat(str, 'EMAIL')
  ]
  defaultMessage = ['name has been used', 'please check the format', 'please check the format']
  addData = () => {
    const isFormatPass = Object.keys(this.props.input).reduce((acc, key) => {
      // 重新檢查 format
      if (!this.props.input[key].isFormatCorrect) {
        return false
      }
      // 確認是否有空字串
      if (this.props.input[key].value.length === 0) {
        // 設定錯誤提示
        this.props.setInputMessage(key, false, 'this field is required')
        return false
      }
      return acc
    }, true)
    if (isFormatPass) {
      this.props.addData() // add data
      Object.keys(this.props.input).map(key => this.props.handleInputChange(key, '')) // clean input
    }
  }
  render() {
    return (
      <div className="form">
        {Object.keys(this.props.input).map((key, index) => {
          return (<FormInput
            key={index}
            name={this.props.input[key].name}
            value={this.props.input[key].value}
            handleChange={str => this.props.handleInputChange(key, str)}
            setInputState={(bool, message) => this.props.setInputMessage(key, bool, message)}
            check={this.formatCheck[index]}
            message={this.props.input[key].message}
            isFormatCorrect={this.props.input[key].isFormatCorrect}
            defaultMessage={this.defaultMessage[index]}
            addDataOnKeyDown={this.addData} />)
        })}
        <div>
          <button onClick={this.addData}>Add</button>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    input: state.root.input,
    data: state.root.data
  }
}

export default connect(mapStateToProps, actions)(Form)