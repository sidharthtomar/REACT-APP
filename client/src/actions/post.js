import axios from "axios";



import{
    GET_POSTS,
    POST_ERROR,
    ADD_POST,
    GET_POST,
    ADD_COMMENT
} from './types';

//get Posts


export const getPosts = () => async dispatch =>{
    try{
        const res = await axios.get('api/posts');

        dispatch({
            type:GET_POSTS,
            payload :res.data
        });
        
    }catch(err){
        dispatch({
            type:POST_ERROR,
            payload :{msg:err.response.statusText,status:err.response.status}
        })

    }
}



//Add Posts
export const addPost = (formData) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	try {
		const res = await axios.post('api/posts', formData, config);

		dispatch({
			type: ADD_POST,
			payload: res.data
		});

		
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status }
		});
	}
};

//Get one post

export const getPost = id => async dispatch =>{
    console.log('id 2',id)
    try{
        const res = await axios.get(`/api/posts/${id}`);

        dispatch({
            type:GET_POST,
            payload :res.data
        });
        
    }catch(err){
        dispatch({
            type:POST_ERROR,
            payload :{msg:err.response.statusText,status:err.response.status}
        })

    }
}

//ADD comment
export const addComment= (post_id,formData) => async (dispatch) => {
    console.log(post_id)
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	try {
		const res = await axios.post(`/api/posts/comment/${post_id}`, formData, config);

		dispatch({
			type: ADD_COMMENT,
			payload: res.data
		});

		
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status }
		});
	}
};