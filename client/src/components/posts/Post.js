import React,{Fragment,useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { getPosts } from '../../actions/post'
import PostItem from './PostItem'
import PostForm from './PostForm'
//import Spinner from '../spinner/spinner';
const Post = ({getPosts,posts:{posts}}) => {
    useEffect(() =>{
        getPosts();
    },[getPosts]);


  return (


    <Fragment>
      <section className="container">
      <h1 className="large text-primary">
        Posts
      </h1>
      <p className="lead"><i className="fas fa-user"></i> Welcome to the community!</p>

      
      </section>
      <PostForm />
        <div className='posts'>
            {posts.map(post=>(
                <PostItem key ={post.post_id} post ={post}/>
            ))}
        </div>

    </Fragment>
  )
    
}

Post.propTypes = {
    getPosts:PropTypes.func.isRequired,
    posts:PropTypes.object.isRequired
}


const mapStateToProps = state =>({
    posts:state.postReducer
})

export default connect(mapStateToProps,{getPosts})(Post);