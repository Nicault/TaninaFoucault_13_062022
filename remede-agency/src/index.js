import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import User from './pages/User'
import { store } from './redux/store'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/user" element={<User />} />
          {/* <Route path="*" element={<Error />}></Route> */}
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  </Provider>
)
