import React from "react"
import ReactDOM from "react-dom"
import '../src/assets/css/index.css'
import "../src/assets/css/App.css"
import App from "../src/containers/App.js"
import * as serviceWorker from "./serviceWorker"
import { Provider } from "react-redux"
import store from "./store.js"
const app = (
  <Provider store={store}>
    <App />
  </Provider>
)
ReactDOM.render(app, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
