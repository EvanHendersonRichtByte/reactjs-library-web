import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './Login';
import User from './User';
import EditUser from './EditUser';
import AddUser from './AddUser';
import Register from './Register';
import Test from './Test';
import Home from './Home';
import Book from './Book';
import AddBook from './AddBook';
import LearnMore from './LearnMore';
import Pegawai from './Pegawai';

const Primary = () => (
  <Switch>
  <Route path="/Login" component={Login} />
  <Route path="/User" component={User}/>
  <Route path='/editUser/:id' component={EditUser}/>
  <Route path="/AddUser" component={AddUser}/>
  <Route path="/Register" component={Register}/>
  <Route path="/Test" componentt={Test}/>
  <Route exact path="/" component={Home}/>
  <Route path="/Book" component={Book}/>
  <Route path="/AddBook" component={AddBook}/>
  <Route path='/LearnMore' component={LearnMore}/>
  <Route path='/Pegawai' component={Pegawai}/>
  </Switch>
)


export default Primary;

// {/* //Urutan Route sangat berpengaruh pada link-data */}
