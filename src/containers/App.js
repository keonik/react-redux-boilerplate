import React, { Component } from "react"
import { connect } from "react-redux"
import logo from "../assets/images/logo.svg"
import "../assets/css/App.css"
import { bindActionCreators } from "redux"
import { changePage, changeStep } from "../actions/App"

class App extends Component {
  constructor(props) {
    super(props)
    this.onStepChange = this.onStepChange.bind(this)
    this.onPageChange = this.onPageChange.bind(this)
  }

  onPageChange(e) {
    this.props.changePage(e.target.value)
  }

  onStepChange(e) {
    this.props.changeStep(e.target.value)
  }

  render() {
    let { page, step } = this.props
    console.log({ page, step })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p />
          <div>
            <p>Page: {page}</p>
            <textarea onChange={this.onPageChange} />
          </div>
          <p>Step: {step}</p>
          <textarea onChange={this.onStepChange} />

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      changePage,
      changeStep
    },
    dispatch
  )
}

const mapStateToProps = state => {
  return {
    page: state.App.page,
    step: state.App.step
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
