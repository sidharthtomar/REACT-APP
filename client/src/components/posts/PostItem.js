import React,{Fragment} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Moment from 'react-moment';
import { connect } from 'react-redux';

const PostItem = ({auth,post:{post_id,text,name,date,user,comments},showActions}) => {
    
    return(
    
    <div className="post bg-white p-1 my-1">
      <div>
        <Link  to ="profile.html">
          
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">
          {text}
        </p>
         <p className="post-date">
            Posted On 12/4/2022
        </p>


        {showActions &&<Fragment>
          <button type="button" className="btn btn-light">
          <i className="fas fa-thumbs-up"></i>
          <span>4</span>
        </button>
        <button type="button" className="btn btn-light">
          <i className="fas fa-thumbs-down"></i>
        </button>
        <Link to = {`/posts/${post_id}`} className="btn btn-primary">
          Discussion <span className='comment-count'>2</span>
        </Link>
        <button      
        type="button"
        className="btn btn-danger">
        <i className="fas fa-times"></i>
      </button>
          
          </Fragment>
          }
            

            
        
      </div>
    </div>
   
       
 )
}
PostItem.defaultProps={
  showActions :true

};




PostItem.propTypes = {
    post:PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired,
    showActions: PropTypes.bool
  
}

const mapStateToProps = state =>({
    auth:state.authReducer
})

export default connect(mapStateToProps) (PostItem)