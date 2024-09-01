import React from 'react'
import "./Signup.css";
import HeadingCom from './HeadingCom';
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';
export default function Login() {
    const dispatch =useDispatch();
    const navigate = useNavigate();
    const [Inputs,setInputs] = useState({email:"",password : ""});
    const change = (e)=>{
        const {name,value} = e.target;
        setInputs({...Inputs,[name]:value});
    };
    const submit = async(e) =>{
        e.preventDefault();
        await axios.post(`${window.location.origin}/api/v1/login`,Inputs).then((response) =>{
          sessionStorage.setItem("id",response.data.others._id);
          dispatch(authActions.login());
            navigate("/todo");
        });
    };
  return (
    <div>
      <div className='signup'>
      <div className="container">
        <div className="row">
        <div className="col-lg-4 column col-left d-lg-flex justify-content-center align-items-center d-none ">
            <HeadingCom first="Log" second="In"/>
            </div>
            <div className="col-lg-8 column d-flex justify-content-center align-items-center">
                <div className='d-flex flex-column w-100 p-3'>
                    <input className='p-2 my-3 input-signup' name='email' type='email'  placeholder='Enter Your Email'  value={Inputs.email} onChange={change}
                    />
                    <input className='p-2 my-3 input-signup' name='password' type='password'  placeholder='Enter Your Password' value={Inputs.password} onChange={change}  />
                    <button className='btn-signup p-2 my-2 ' onClick={submit}>Log In </button>
                </div> 
            </div>
           
        </div>
      </div>
    </div>
    </div>
  )
}
