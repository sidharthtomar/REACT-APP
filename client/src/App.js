import React ,{Fragment,useEffect} from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import {Landing} from './components/layouts/Landing';
import Register  from './components/auth/register';
import  Login  from './components/auth/login';
import setAuthToken from './utils/setAuthToken';
import Post from './components/posts/Post';
import Posts from './components/post/Post';
import PrivateRoute from './components/routing/PrivateRoute';
import { LOGOUT } from './actions/types';
//redux
import { Provider } from 'react-redux';
import store from './store';
import  {loadUser}  from './actions/auth';
import './App.css';


if(localStorage.token){
  setAuthToken(localStorage.token);


}



const App=()=> {
  useEffect(() =>{
   
   
    store.dispatch(loadUser());

    
  },[]);

  return (
  <Provider store = {store}>
  <Router>
   <Fragment>
    <Navbar />
    <Route exact path ='/' component={Landing}/> 
    <section className='container'>
    
    
      <Switch>
      
        <Route exact path ="/Register" component={Register}/>
        <Route exact path ="/Login" component={Login}/>
         <Route exact path='/posts' component={Post} />
				 <Route exact path='/posts/:id'  component={Posts} /> 
        
      </Switch>
      </section>
   
  
   </Fragment>
  </Router>
  </Provider>
  )}
;
export default App;
