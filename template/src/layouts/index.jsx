import React from 'react'
import { connect } from 'react-redux'
import { getInfo } from '@/store/modules/info.js'
import Header from '@/containers/Header/index.jsx'
import Main from '@/containers/Main/index.jsx'
import Footer from '@/containers/Footer/index.jsx'

@connect(
  state => ({info: state.info}),
  { getInfo }
)

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getInfo()
  }

  render() {
    const { info } = this.props

    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}