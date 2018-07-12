import React from 'react'
import { Route, IndexRoute} from 'react-router'
import App from './container/App'
import Forms from './components/Forms'
import RegForm from './components/Forms/RegistrationForm'
import LoginForm from './components/Forms/LoginForm'
import getCategories from './components/Categories/getCategories'
import Categories from './components/Categories/Categories'
import NotFound from './components/NotFound'

export const routes = (
    <div>
        <Route path='/' component={App}>
          <IndexRoute component={Forms} />
          <Route path='/signup' component={RegForm} />
          <Route path='/signin' component={LoginForm} />
          <Route path='/categories' component={Categories}/>
          <Route path='/getcategory' component={getCategories} />
        </Route>
        <Route path='*' component={NotFound} />
    </div>
)