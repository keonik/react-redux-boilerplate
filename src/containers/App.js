import React, { Component, useState } from "react"
import { connect } from "react-redux"
import logo from "../assets/images/logo.svg"
import "../assets/css/App.css"
import { bindActionCreators } from "redux"
import { addItem } from "../actions/TodoList"

const App = ({ listItems, addItem }) => {
  const [itemText, setItemText] = useState("")
  return (
    <div className="App">
      <header className="App-header">
        <div className="form-container">
          <p>
            Name:
            <input
              style={{ minWidth: "200px", margin: 10, padding: 0 }}
              type="text"
              value={itemText}
              onChange={e => setItemText(e.target.value)}
            />
          </p>
          <button onClick={() => addItem(itemText)}>Add</button>
        </div>
        <div className="list-container">
          {listItems &&
            listItems.map((item, index) => <p key={index}>{item}</p>)}
        </div>
      </header>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addItem
    },
    dispatch
  )
}

const mapStateToProps = state => {
  console.log("The store now contains:", state)
  return {
    listItems: state.TodoList.listItems
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
