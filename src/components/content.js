import react from 'react'
import React from 'react'
import 'antd/dist/antd.css'
import { Input } from 'antd'
import LogIn from './logIn'
import EmailPassword from './emailPassword'
import SelectCard from './selectCard'
import PersonalSpace from './personalSpace'
import PersonalSpaceSuccess from './personalSpaceSuccess'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function Content() {
  return (
    <div className="content">
      <div className="backgroundImage">
        <div className="leftImage"></div>
        <div className="rightImage"></div>
      </div>
      <div className="backContent">
        <div className="content-box" style={{ minWidth: 880 }}>

      <Router>
          <Routes>
            <Route
              exact
              path="/"
              element ={<EmailPassword />}
            />
            <Route
              path="/LogIn"
              element ={<LogIn />}
            />
            <Route
              path="/SelectCard"
              element ={<SelectCard />}
            />
            <Route
              path="/PersonalSpace"
              element ={<PersonalSpace />}
            />
            <Route
              path="/PersonalSpaceSuccess"
              element ={<PersonalSpaceSuccess />}
            />
          </Routes>
      </Router>
        </div>
      </div>
    </div>
  )
}

export default Content
