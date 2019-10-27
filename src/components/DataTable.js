import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import DataRow from './DataRow'

class DataTable extends Component {
  state = {
    tableHead: [
      { name: 'No', sort: 'unset' },
      { name: 'Name', sort: 'unset' },
      { name: 'Phone', sort: 'unset' },
      { name: 'Email', sort: 'unset' }],
    sort: {
      sortBy: 'no',
      method: 'decrease'
    },
    // increase, decrease
  }
  sortData = (sortBy, method) => {
    this.setState({
      sort: {
        sortBy: sortBy,
        method: method
      }
    })
  }
  handleSortImg = (id) => {
    let sortState = this.state.tableHead.map(value => value.sort)
    let newState = Object.assign({}, this.state)
    // 還沒有被排序過
    if (sortState.reduce((acc, value) => value === 'unset' ? acc + 1 : acc, 0) === 4) {
      newState.tableHead[id].sort = 'decrease'
    } else if (sortState[id] !== 'unset') {// 重複被選中
      newState.tableHead[id].sort = newState.tableHead[id].sort === 'decrease' ? 'increase' : 'unset'
    } else { // 其他選項有被改過
      newState.tableHead.map(value => value.sort = 'unset')
      newState.tableHead[id].sort = 'decrease'
    }
    this.setState({ tableHead: newState.tableHead })
    this.sortData(this.state.tableHead[id].name.toLowerCase(), this.state.tableHead[id].sort)
  }
  render() {
    return (
      <div className="data-table">
        <div className="row">
          {this.state.tableHead.map((value, index) => {
            return (
              <div key={index} onClick={() => this.handleSortImg(index)} className="row__sortable-column">
                {value.name}
                {
                  value.sort === 'unset'
                    ? <img className="row__sort-icon row__sort-icon--unset" alt="sort-icon1" />
                    : value.sort === 'decrease'
                      ? <img className="row__sort-icon row__sort-icon--decrease" alt="sort-icon2" />
                      : <img className="row__sort-icon row__sort-icon--increase" alt="sort-icon3" />
                }
              </div>
            )
          })}
          {/* 保留給 edit & delete */}
          <div></div>
          <div></div>
        </div>
        <div className="block" />
        {/* 排序功能 */}
        {this.props.data.sort((a, b) => {
          if (this.state.sort.method === 'unset') {
            return a.no - b.no;
          } else if (this.state.sort.sortBy === 'no') {
            return this.state.sort.method === 'decrease' ? a.no - b.no : b.no - a.no
          } else {
            if (this.state.sort.method === 'decrease')
              return a[this.state.sort.sortBy] > b[this.state.sort.sortBy] ? 1 : -1
            else
              return b[this.state.sort.sortBy] > a[this.state.sort.sortBy] ? 1 : -1
          }
        }).map((value, index) => {
          return (
            <DataRow
              key={index}
              rowValue={value}
              editable={value.no === this.props.selectedData}
            />
          )
        })}
        {this.props.data.length === 0 && !this.props.isFetching &&
          <div className="data-table-hint">
            <div>No Data Found.</div>
          </div>}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    data: state.root.data,
    selectedData: state.root.selectedData,
    isFetching: state.root.isFetching
  }
}

export default connect(mapStateToProps, actions)(DataTable)