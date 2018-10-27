import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Switch,Route,Redirect}from 'react-router-dom'
import {Provider}from 'react-redux'

import './assets/css/reset.css';

import Msite from './containers/msite/msite'
import Know from './containers/know/know'
import Class from './containers/class/class'
import Profile from './containers/profile/profile'
import Shopcart from './containers/shopcart/shopcart'



import store from './redux/store'


ReactDOM.render(
 <Provider store={store}>
   <HashRouter>
     <Switch>
       <Route path='/msite' component={Msite}/>
       <Route path='/know' component={Know}/>
       <Route path='/class' component={Class}/>
       <Route path='/profile' component={Profile}/>
       <Route path='/shopcart' component={Shopcart}/>
       <Redirect path='/' to={{pathname:'/msite'}}/>
     </Switch>
   </HashRouter>
 </Provider>,

document.getElementById('root')
)



