import {
    GET_POSTS,
    POST_ERROR,
    ADD_POST,
    GET_POST,
    ADD_COMMENT
} from '../actions/types'


const initialState = {
    posts:[],
    post :null,
    comment:[],
    loading:true,
    error:{}
}


const  postReducer =(state=initialState,action)=>{
    const { type,payload} = action;

    switch(type){
        case GET_POSTS:
            return{
                ...state,
                posts:payload,
                loading:false
            };
            case GET_POST:
                return{
                    ...state,
                    post:payload,
                    loading:false
                }
            case ADD_POST:{
                return{
                    ...state,
                    posts:[payload,...state.posts],
                    loading:false
                }
            }
            case POST_ERROR:
                return{
                    ...state,
                    error:payload,
                    loading:false
                }
                default:
                    return state;
            case ADD_COMMENT:
                return{
                    ...state,
                   comment:[ ...state.comment,payload],
                    loading:false
                }
    }
}
export default postReducer;