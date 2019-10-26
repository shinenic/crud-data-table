import React, { Component } from 'react'
import Form from './Form'
import DataTable from './DataTable'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          {/* <div className="title">Data Table</div>
          <div className="search">SEARCH</div> */}
        </div>
        <Form />
        <div className="data-table">
          <DataTable />
        </div>
      </div>
    )
  }
}

export default App