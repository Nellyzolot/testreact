import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './container/App'
import Forms from './components/Forms/Forms'
import Index from './container/Categories'
import NotFound from './components/NotFound'

export const routes = (
    <div>
      <Route path='/' component={App}>
        <IndexRoute component={Forms}/>
        <Route path='/index' component={Index}/>
      </Route>
      <Route path='*' component={NotFound}/>
    </div>
)