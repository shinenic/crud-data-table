import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/index'

class DataRow extends Component {
  render() {
    return (
      <div className="row">
        <div>{this.props.rowValue.no}</div>
        <div>{this.props.rowValue.name}</div>
        <div>{this.props.rowValue.phone}</div>
        <div>{this.props.rowValue.email}</div>
        <div><img className="row__edit-icon" alt="edit-icon" /></div>
        <div>
          <img
            className="row__delete-icon"
            alt="delete-icon"
            onClick={() => this.props.deleteData(this.props.rowValue.no)}
          />
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    // data: state.root.data
  }
}

export default connect(mapStateToProps, actions)(DataRow)