import React,{Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
const commentItem = ({
    
    comment:{comment_id,text,name,date},
    
    auth
}) => {
  return (
   
    <div class="post bg-white p-1 my-1">
      <div>
        <a href="profile.html">
         
          <h4>{name}</h4>
        </a>
      </div>
      <div>
        <p class="my-1">
       {text}
        </p>
         <p class="post-date">
            Posted on <Moment format ='YYYY/MM/DD'>{date}</Moment>
        </p>
      </div>
    </div>
  )
}

commentItem.propTypes = {
    comment:PropTypes.object.isRequired,
   
    
}
// const mapStateToProps = state =>({
//     auth:state.authReducer
// })

export default connect(null,{ })(commentItem)