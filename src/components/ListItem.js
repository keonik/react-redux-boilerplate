import React, { useState } from "react"

const ListItem = props => {
  const { name, index, deleteItem, editItem } = props

  const [editMode, setEditMode] = useState(false)
  const [editText, setEditText] = useState(name)

  function Edit() {
    setEditMode(false)
    editItem({ name: editText, index: index })
  }

  return !editMode ? (
    <div className="list-item">
      <p className="list-item-name">{name}</p>
      <div className="list-item-actions">
        <button onClick={() => setEditMode(true)}>Edit</button>
        <button onClick={() => deleteItem(index)}>Delete</button>
      </div>
    </div>
  ) : (
    <div className="list-item">
      <input
        className="list-item-name"
        style={{ minWidth: "200px", margin: 10, padding: 0 }}
        type="text"
        value={editText}
        onChange={e => setEditText(e.target.value)}
      />
      <div className="list-item-actions">
        <button
          onClick={() =>
            editText ? Edit() : alert("Please enter a value for name.")
          }
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default ListItem
