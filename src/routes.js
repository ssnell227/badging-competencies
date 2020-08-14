import React from 'react'
import {Route, Switch} from 'react-router-dom'

//components
import Landing from './views/Landing'
import Examples from './views/Examples'

export default(
    <Switch>
        <Route path='/' exact component={Landing}/>
        <Route path='/examples'  component={Examples}/>
        <Route path='/examples/:param'  component={Examples}/>
    </Switch>
)

