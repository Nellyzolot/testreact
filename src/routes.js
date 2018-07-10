import React from 'react'
import { Route, IndexRoute} from 'react-router'

import App from './container/App'
import Forms from './components/Forms'
import RegForm from './components/Forms/RegistrationForm'
import AutoForm from './components/Forms/LoginForm'
import Products from './components/Products/Products'
import Product from './components/Products/Product'
import Categories from './components/Categories/Categories'
import Category from './components/Categories/Category'
import NotFound from './components/NotFound'

function checkLogin() {

  console.log('пропусти')

}

export const routes = (
    <div>
        <Route path='/' component={App}>
          <IndexRoute component={Forms} />
          <Route path='/signup' component={RegForm} />
          <Route path='/signin' component={AutoForm} />
          <Route path='/categories' component={Categories}>
            <Route path='/categories/:id' component={Category} />
          </Route>
          <Route path='/products' component={Products}>
            <Route path='/products/:category_id' component={Product} />
          </Route>
        </Route>
        <Route path='*' component={NotFound} />
    </div>
)