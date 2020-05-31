import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './components/pages/index'
import AboutMe from './components/pages/aboutMe'
import Contact from './components/pages/contact'
import Education from './components/pages/education'
import Experience from './components/pages/experience'
import Skills from './components/pages/skills'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App