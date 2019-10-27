import React from 'react'
import { mount } from 'enzyme'
import App from '../App'
import Form from '../Form'
import Root from '../../Root'
import DataTable from '../DataTable'

it('render App without', () => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )
  wrapped.unmount();
})
describe('Component', () => {
  let wrapped
  beforeEach(() => {
    wrapped = mount(<Root><App /></Root>)
  })
  afterEach(() => {
    wrapped.unmount()
  })
  it('should render Title', () => {
    expect(wrapped.find('.title').length).toEqual(1)
  })
  it('should render Form', () => {
    expect(wrapped.find(Form).length).toEqual(1)
  })
  it('should render DataTable', () => {
    expect(wrapped.find(DataTable).length).toEqual(1)
  })
  it('should render insert-form-toggle-button', () => {
    expect(wrapped.find('.insert-toggle__button').length).toEqual(1)
  })
  it('should load five data after componentDidMount', () => {
    expect(wrapped.find('.row').length).toEqual(6)
    expect(wrapped.find('.row--data').length).toEqual(5)
  })
  // it('should show Form after toggle clicked', () => {
  //   expect(wrapped.find('.insert-toggle__button--expand').length).toEqual(0)
  //   wrapped.find('.insert-toggle__button').prop('onClick')()
  //   wrapped.update()
  //   // expect(wrapped.find('.insert-toggle__button--expand').length).toEqual(1)
  // })
})