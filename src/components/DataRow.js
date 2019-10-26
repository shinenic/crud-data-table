import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import FormInput from './FormInput'
import { checkValueUnique, checkFormat, defaultMessage } from './Form'

class DataRow extends Component {
  formatCheck = [
    str => {
      const dataExceptSelf = [...this.props.data]
      dataExceptSelf.splice(dataExceptSelf.map(value => value.no).indexOf(this.props.rowValue.no), 1)
      return checkValueUnique(str, dataExceptSelf)
    },
    str => checkFormat(str, 'PHONE'),
    str => checkFormat(str, 'EMAIL')
  ]
  updateDate = () => {
    const isFormatPass = Object.keys(this.props.updateInput).reduce((acc, key) => {
      // 重新檢查 format
      if (!this.props.updateInput[key].isFormatCorrect) {
        return false
      }
      // 確認是否有空字串
      if (this.props.updateInput[key].value.length === 0) {
        // 設定錯誤提示
        this.props.setInputMessage('updateInput', key, false, 'this field is required')
        return false
      }
      return acc
    }, true)
    if (isFormatPass) {
      this.props.updateData() // update data
      Object.keys(this.props.updateInput).map(key => this.props.handleInputChange('updateInput', key, '')) // clean input
      return true
    }
    return false
  }
  render() {
    return (
      <div className={this.props.editable ? 'row row--updating' : 'row'}>
        <div>
          <div>{this.props.rowValue.no}</div>
        </div>
        {Object.keys(this.props.updateInput).map((key, index) => {
          // 順序為 ['name','phone','email']
          return (<FormInput
            key={index}
            value={this.props.editable ? this.props.updateInput[key].value : this.props.rowValue[key]}
            handleChange={str => this.props.handleInputChange('updateInput', key, str)}
            setInputState={(bool, message) => this.props.setInputMessage('updateInput', key, bool, message)}
            check={this.formatCheck[index]}
            message={this.props.updateInput[key].message}
            isFormatCorrect={this.props.updateInput[key].isFormatCorrect}
            defaultMessage={defaultMessage[index]}
            editable={this.props.editable}
            actionOnKeyDown={() => {
              this.updateDate() && this.props.selectRow({ no: -1 })
            }} />)
        })}
        <div>
          {this.props.editable
            ? <img onClick={() => {
              this.updateDate() && this.props.selectRow({ no: -1 })
            }}
              className="row__check-icon" alt="check-icon" />
            : <img onClick={() => this.props.selectRow(this.props.rowValue)}
              className="row__edit-icon" alt="edit-icon" />
          }
        </div>
        <div>
          <img
            className="row__delete-icon"
            alt="delete-icon"
            onClick={() => !this.props.editable && this.props.deleteData(this.props.rowValue.no)}
          />
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    updateInput: state.root.updateInput,
    data: state.root.data
  }
}

export default connect(mapStateToProps, actions)(DataRow)