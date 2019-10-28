import React, { Component } from 'react'
import Form from './Form'
import DataTable from './DataTable'
import { connect } from 'react-redux'
// import axios from 'axios'
import * as actions from '../actions/index'

class App extends Component {
  state = {
    formExpand: undefined
  }
  async componentDidMount() {
    // load static demo data
    let demoData = [
      {
        name: 'Tim',
        phone: '0981-495-798',
        email: 'fs234@gamil.com'
      },
      {
        name: 'Zed',
        phone: '0000-159-159',
        email: 'zzz@gamil.com'
      },
      {
        name: 'Cat',
        phone: '0956-785-498',
        email: 'cat@gamil.com'
      },
      {
        name: 'Annie',
        phone: '0198-458-498',
        email: 'ani@hotmail.con.tw'
      },
      {
        name: 'Gali5566',
        phone: '0198-498-452',
        email: 'g5566@gamil.com'
      }]
    demoData.map(data => this.props.addData(data))

    // load random user data
    // this.props.setIsFetching(true)
    // for (let i = 0; i < 5; i++) {
    //   await axios.get('https://randomuser.me/api/')
    //     .then(res => {
    //       this.props.addData({
    //         name: res.data.results[0].name.first,
    //         phone: res.data.results[0].cell.replace(/[^0-9+-]/g, ''),
    //         email: res.data.results[0].email
    //       })
    //     })
    // }
    // this.props.setIsFetching(false)
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
              onClick={this.formToggle}/>
          </div>
        </div>
        <Form />
        <div className="data-table">
          <DataTable />
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(App)