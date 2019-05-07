import React, { useState } from "react"

const ListItem = props => {
  const { name, index, deleteItem, editItem } = props

  const [editMode, setEditMode] = useState(false)
  const [editText, setEditText] = useState(name)

  return !editMode ? (
    <div>
      <p>{name}</p>
      <button onClick={() => setEditMode(true)}>Edit</button>
      <button onClick={() => deleteItem(index)}>Delete</button>
    </div>
  ) : (
    <div>
      <input
        style={{ minWidth: "200px", margin: 10, padding: 0 }}
        type="text"
        value={editText}
        onChange={e => setEditText(e.target.value)}
      />
      <button
        onClick={() => {
          setEditMode(false)
          editItem({ name: editText, index: index })
        }}
      >
        Save
      </button>
    </div>
  )
}

export default ListItem
