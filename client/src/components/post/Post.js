import React,{Fragment,useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PostItem from '../posts/PostItem'
import {getPost} from '../../actions/post'
import { Spinner } from 'react-bootstrap'
import Commentform from './commentform'
import CommentItem from './commentItem'

const Posts = ({getPost,post:{post,loading},comment:{comment},match}) => {
    console.log("id",match.params.id)
    useEffect(()=>{
        getPost(match.params.id);
    },[getPost]);
 
    return loading || post === null ? (
		<Spinner />
	) : (
		<Fragment>
			<Link to='/posts' className='btn submit'>
				<i className='fas fa-chevron-left' /> Back To Posts
			</Link>
			 <PostItem post={post} showActions={false} />
               <div className = 'comment'>
                {comment.map(comment=>(
                    <CommentItem key ={comment.comment_id} comment={comment} />
                ))}
            </div>    
            <Commentform post_id = {post.post_id} />
            
            </Fragment>
       
  )
}

Posts.propTypes = {
    getPost:PropTypes.func.isRequired,
    post:PropTypes.object.isRequired,
    comment:PropTypes.object.isRequired
}
const mapStateToProps = (state) =>({
    post:state.postReducer,
    comment:state.postReducer
  
})

export default connect(mapStateToProps,{getPost}) (Posts)