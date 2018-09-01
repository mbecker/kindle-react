import React from 'react'
import { Route, Switch } from 'react-router'
import NavBar from '../components/NavBar'
import NoMatch from '../components/NoMatch'
import Home from '../components/Home'
import VolumeList from '../components/VolumeList'
import Volume from "../components/Volume"

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/volumes" component={VolumeList} />
      <Route path="/volume/:title" component={Volume} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes