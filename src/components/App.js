import React, { Component } from 'react'
import Form from './Form'
import DataTable from './DataTable'

class App extends Component {
  state = {
    formExpand: undefined
  }
  formToggle = () => {
    const toggleButton = document.querySelector('.insert-toggle__button')
    const formDiv = document.querySelector('.form-mobile')
    if (this.state.formExpand === undefined) {
      toggleButton.classList.add('insert-toggle__button--expand')
      this.setState({ formExpand: true })
    }
    else {
      toggleButton.classList.toggle('insert-toggle__button--expand')
      toggleButton.classList.toggle('insert-toggle__button--close')
      this.setState({ formExpand: !this.state.formExpand })
    }
    formDiv.classList.toggle('form-mobile--expand')
  }
  render() {
    return (
      <div className="app">
        <div className="header">
          <div className="title">
            <span>Data Table</span>
          </div>
          <div className="insert-toggle">
            <div className="insert-toggle__button"
              onClick={this.formToggle}>+</div>
          </div>
        </div>
        <Form/>
        <div className="data-table">
          <DataTable />
        </div>
      </div>
    )
  }
}

export default App