import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

class FormInput extends Component {
  handleChange = e => {
    this.props.handleChange(e.target.value)
    this.props.setInputState(this.props.check(e.target.value), this.props.defaultMessage)
  }
  handleKeyDown = e => {
    if (e.key === 'Enter') {
      this.props.actionOnKeyDown()
      e.target.blur()
    }
  }
  render() {
    return (
      <div className="form-input">
        <input
          type="text"
          className={!!this.props.editable ? "form-input__textbox" : "form-input__textbox form-input__textbox--disable"}
          value={this.props.value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          disabled={!this.props.editable} />
        <div
          className={this.props.value === ''
            ? 'form-input__placehoder'
            : 'form-input__placehoder form-input__placehoder--fixed'}>{this.props.name}</div>
        {this.props.editable &&
          <div className={this.props.isFormatCorrect ? "form-input__message" : "form-input__message form-input__message--show"}>{this.props.message}</div>}
      </div>
    )
  }
}

export default connect(null, actions)(FormInput)