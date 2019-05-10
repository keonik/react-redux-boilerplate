import React, { Component, useState } from "react"
import { connect } from "react-redux"
import logo from "../assets/images/logo.svg"
import "../assets/css/App.css"
import ListItem from "../components/ListItem"
import { bindActionCreators } from "redux"
import { addItem, deleteItem, editItem } from "../actions/TodoList"

const App = props => {
  const { listItems, addItem, deleteItem, editItem } = props
  const [itemText, setItemText] = useState("")

  function Add() {
    setItemText("")
    addItem(itemText)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="form-container">
          <h3 id="header-text">Add Items</h3>
          <div className="input-container">
            <input
              type="text"
              value={itemText}
              onChange={e => setItemText(e.target.value)}
            />
            <button
              onClick={() =>
                itemText ? Add() : alert("Please enter a value for name.")
              }
            >
              Add
            </button>
          </div>
        </div>

        <div className="list-container">
          {listItems &&
            listItems.map((item, index) => (
              <ListItem
                key={index}
                name={item}
                index={index}
                deleteItem={deleteItem}
                editItem={editItem}
              />
            ))}
        </div>
      </header>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addItem,
      deleteItem,
      editItem
    },
    dispatch
  )
}

const mapStateToProps = state => {
  return {
    listItems: state.TodoList.listItems
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
