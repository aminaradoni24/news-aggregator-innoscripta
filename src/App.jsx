import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { store } from "./redux/store"
import HomePage from "./pages/HomePage"
import PreferencesPage from "./pages/PreferencesPage"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/preferences' element={<PreferencesPage />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
