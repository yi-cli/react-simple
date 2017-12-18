import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

export default class Button extends React.Component {
  static propTypes = {
    onClick: PropTypes.func
  }

  static defaultProps = {
    onClick() {
      console.log('hello world')
    }
  }

  render() {
    return (
      <button onClick={this.onClick}></button>
    )
  }
}