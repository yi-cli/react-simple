import React from 'react'
import './style.scss'

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
        <li><a href="https://twitter.com/reactjs" target="_blank">Twitter</a></li>
        <br/>
        <li><a href="https://yi-cli.github.io/yi-cli/" target="_blank">Yi-Cli</a></li>
        <li><a href="https://github.com/yi-cli" target="_blank">This Template</a></li>
    </ul>
    )
  }
}