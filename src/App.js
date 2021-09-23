import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Dashboard from './Pages/Auth/Dashboard';
import Login from './Pages/Auth/Login';
import MyData from './Pages/Auth/MyData';
import Contact from './Pages/Contact/Contact';
import Portfolio from './Pages/Portfolio/Portfolio';
import AddProject from './Pages/Projects/AddProject';
import EditProject from './Pages/Projects/EditProject';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Switch>
        <Route path='/' component={Portfolio} />
        <Route path='/contact' component={Contact} />
        <Route path='/login' component={Login} />
        <Route path='/my/data' component={MyData} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/add/project' component={AddProject} />
        <Route path='/edit/project/:id' component={EditProject} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
