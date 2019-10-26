import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import FormInput from './FormInput'
import { checkValueUnique, checkFormat, defaultMessage } from './Form'

class DataRow extends Component {
  data = this.props.rowValue
  rowData = [this.data.no, this.data.name, this.data.phone, this.data.email]
  formatCheck = [
    str => {
      const dataExceptSelf = [...this.props.data]
      dataExceptSelf.splice(dataExceptSelf.map(value => value.no).indexOf(this.data.no), 1)
      return checkValueUnique(str, dataExceptSelf)
    },
    str => checkFormat(str, 'PHONE'),
    str => checkFormat(str, 'EMAIL')
  ]
  render() {
    return (
      <div className={this.props.isUpdating ? 'row row--updating' : 'row'}>
        <div>{this.data.no}</div>
        {Object.keys(this.props.updateInput).map((key, index) => {
          return (<FormInput
            key={index}
            value={this.props.isUpdating ? this.props.updateInput[key].value : this.rowData[index + 1]}
            handleChange={str => this.props.handleInputChange('updateInput', key, str)}
            setInputState={(bool, message) => this.props.setInputMessage('updateInput', key, bool, message)}
            check={this.formatCheck[index]}
            message={this.props.updateInput[key].message}
            isFormatCorrect={this.props.updateInput[key].isFormatCorrect}
            defaultMessage={defaultMessage[index]}
          // updateDataOnKeyDown={this.update} // todo
          />)
        })}
        {/* <div>{this.props.rowValue.name}</div>
        <div>{this.props.rowValue.phone}</div>
        <div>{this.props.rowValue.email}</div> */}
        <div>
          {this.props.isUpdating
            ? <img onClick={() => this.props.selectRow(-1)}
              className="row__check-icon" alt="check-icon" />
            : <img onClick={() => this.props.selectRow(this.data.no)}
              className="row__edit-icon" alt="edit-icon" />
          }
        </div>
        <div>
          <img
            className="row__delete-icon"
            alt="delete-icon"
            onClick={() => !this.props.isUpdating && this.props.deleteData(this.props.rowValue.no)}
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