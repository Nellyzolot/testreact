import React from 'react'
import { Route, IndexRoute} from 'react-router'
import App from './container/App'
import Forms from './components/Forms/Forms'
import RegForm from './components/Forms/RegistrationForm'
import LoginForm from './components/Forms/LoginForm'
import Category from './components/Data/SubCategories'
import Index from './container/Index'
import NotFound from './components/NotFound'

export const routes = (
    <div>
        <Route path='/' component={App}>
          <IndexRoute component={Forms} />
          <Route path='/signup' component={RegForm} />
          <Route path='/signin' component={LoginForm} />
          <Route path='/index' component={Index} />
          <Route path='/category' component={Category} />
          <Route path='/subcategory' component={Index} />
        </Route>
        <Route path='*' component={NotFound} />
    </div>
)