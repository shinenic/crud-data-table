import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import DataRow from './DataRow'

class DataTable extends Component {
  render() {
    return (
      <div className="data-table">
        <div className="row">
          <div>No.</div>
          <div>Name</div>
          <div>Phone</div>
          <div>Email</div>
          <div>Edit</div>
          <div>Delete</div>
        </div>
        <div className="block" />
        {this.props.data.map((value, index) => {
          return (
            // <div className="row" key={index}>
            //   <div>{value.no}</div>
            //   <div>{value.name}</div>
            //   <div>{value.phone}</div>
            //   <div>{value.email}</div>
            //   <div>O</div>
            //   <div>X</div>
            // </div>
            <DataRow
              key={index}
              rowValue={value}
            />
          )
        })}
        {this.props.data.length === 0 &&
          <div className="no-data">
            <div>No Data Found.</div>
          </div>}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    data: state.root.data
  }
}

export default connect(mapStateToProps, actions)(DataTable)