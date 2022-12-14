import axios from 'axios';

import{
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from './types';
import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './alert';




//LOAD USer

export const loadUser =() => async dispatch=>{
    if(localStorage.token){
        setAuthToken(localStorage.token);

    }
    try{
        const res = await axios.get('api/auth');
        dispatch({
            type:USER_LOADED,
            payload:res.data
        })

    }catch(err){
        dispatch({
            type:AUTH_ERROR
        })

    }
}

//regsiter User

export const register = ({name,email,password})=> async dispatch=>{
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body = JSON.stringify({name,email,password});

    try{
        const res = await axios.post('api/users',body,config);


        dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        });
    }catch(err){
        dispatch({
            type:REGISTER_FAIL
        });
        dispatch(loadUser());

    }
}


//Login User

export const login = ({email,password})=> async dispatch=>{
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body = JSON.stringify({email,password});

    try{
        const res = await axios.post('api/auth',body,config);


        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        });
        dispatch(loadUser());
    }catch(err){
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(errors => {
                dispatch(setAlert(errors.msg,'danger'))
                
            });
        }
        dispatch({
            type:LOGIN_FAIL
        });

    }
}


// LOGOUT

export const logout = ()=> dispatch =>{
    dispatch({type:LOGOUT});
}

