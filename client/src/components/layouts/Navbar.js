import React, { Fragment } from 'react'
 import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'
// import authReducer from '../../reducers/auth'



 const Navbar = ({authReducer:{isAuthenticated,loading},logout}) => {

  const authLink = (
    <ul>
    <li>< Link to ="/posts">Posts</Link></li>
    <li><a onClick ={logout} href ="/">logout</a></li>
  </ul>
  );
  const guestLinks = (
    <ul>
    
    <li><Link to ="/register">Register</Link></li>
    <li><Link to ="/login">Login</Link></li>
  </ul>
  );
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to ="/"><i className="fas fa-code"></i> Doubtnut</Link>
     </h1>
    {!loading && (<Fragment>{isAuthenticated ?authLink:guestLinks}</Fragment>)}
    </nav>
  )
}
Navbar.propTypes = {
  logout:PropTypes.func.isRequired,
  authReducer:PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
  authReducer:state.authReducer})
export default connect(mapStateToProps,{logout})(Navbar)
