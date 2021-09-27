import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import FetchingErrorComponent from './Components/FetchingErrorComponent';
import Footer from './Components/Footer';
import Header from './Components/Header';
import LoadingComponent from './Components/LoadingComponent';
import Dashboard from './Pages/Auth/Dashboard';
import Login from './Pages/Auth/Login';
import MyData from './Pages/Auth/MyData';
import Contact from './Pages/Contact/Contact';
import Portfolio from './Pages/Portfolio/Portfolio';
import AddProject from './Pages/Projects/AddProject';
import EditProject from './Pages/Projects/EditProject';
import { getAllProjects } from './State/Projects/projects.thunk';
import { introduceUser } from './State/User/user.thunk';

const App = () => {
  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.users.status.getAllUsersInfo);
  const projectsStatus = useSelector(
    (state) => state.projects.status.getAllProjects
  );

  useEffect(() => {
    dispatch(introduceUser());
    dispatch(getAllProjects());
  }, [dispatch]);

  if (
    userStatus === 'INITIAL' ||
    userStatus === 'LOADING' ||
    projectsStatus === 'INITAL' ||
    projectsStatus === 'LOADING'
  ) {
    return <LoadingComponent />;
  }

  if (userStatus === 'SUCCESS' && projectsStatus === 'SUCCESS') {
    return (
      <div className='app-wrapper'>
        <Header />
        <Switch>
          <Route exact path='/' component={Portfolio} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/my/data' component={MyData} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/add/project' component={AddProject} />
          <Route exact path='/edit/project/:id' component={EditProject} />
        </Switch>
        <Footer />
      </div>
    );
  }

  if (userStatus === 'FAILED' || projectsStatus === 'FAILED') {
    return <FetchingErrorComponent />;
  }
};

export default App;
