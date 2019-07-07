import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../assets/css/App.css'
import ListItem from '../components/ListItem'
import { addItem, deleteItem, editItem } from '../actions/TodoList'

const App = () => {
  const dispatch = useDispatch()
  const listItems = useSelector(state => state.TodoList.listItems)
  const [itemText, setItemText] = useState('')

  function Add() {
    setItemText('')
    dispatch(addItem(itemText))
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
                itemText ? Add() : alert('Please enter a value for name.')
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
                deleteItem={item => dispatch(deleteItem(item))}
                editItem={item => dispatch(editItem(item))}
              />
            ))}
        </div>
      </header>
    </div>
  )
}

export default App
