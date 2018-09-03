import React from 'react'
import { Route, Switch } from 'react-router'

import NoMatch from '../components/NoMatch'
import Home from '../components/Home'
import VolumeList from '../components/VolumeList'
import Volume from "../components/Volume"

const routes = (

  <main role="main">
    

    
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/volumes" component={VolumeList} />
      <Route path="/volume/:title" component={Volume} />
      <Route component={NoMatch} />
    </Switch>
  </main>
)

export default routes