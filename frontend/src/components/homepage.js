import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const Homepage = ()=>{

    const navigate = useNavigate();

    const [email,setEmail]=useState("");
    const [password,setPassword] = useState("");
    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname] = useState("");


    const [loginemail,setLoginEmail] = useState("");
    const [loginpassword,setLoginPassword] = useState("");
   
    const reg= async(e)=>{
        e.preventDefault();
        
        if(firstname.length < 3 || lastname.length < 3  || firstname.length > 20 || lastname.length > 20 ){
       return window.alert("Name length should be between 3 and 20 ")
    }

    try{
         const user = {email,firstname,lastname,password};
         const res = await axios.post('https://mern-api-9k1u.onrender.com/api/v1/auth/register',user);

         if(res){
             window.alert('Successfully Registered');
             
             window.location.reload(false);
         }
    }catch(error){
        
        window.alert(error.response.data.msg);
    }
    
    }



    const login = async(e)=>{
        e.preventDefault();

        try{
            const user = {email:loginemail,password:loginpassword};
            const res = await axios.post('https://mern-api-9k1u.onrender.com/api/v1/auth/login',user);
            
            
           if(res){
            window.alert('Successfully Login');
            navigate("/alluser")
            
           }
            

        }
        catch(error){
            window.alert("Invalid Credentials");
        }
    }


    return (
        <div className='homepage'>
            
            <div className="registeration">
                <h1>Registration</h1>
                <form>
                <input placeholder='First Name' onChange={(e)=>setFirstname(e.target.value)} /> 
                <input placeholder='Last Name' onChange={(e)=>setLastname(e.target.value)} /> 
                <input placeholder='Email' onChange={(e)=>setEmail(e.target.value)} /> 
                <input placeholder='Password' type="password" onChange={(e)=>setPassword(e.target.value)} />
                <button onClick={reg}>Register</button>
                </form>
            </div>

            <div className="Login">
                <h1>Login</h1>
                <form>
                    <input placeholder='Email' onChange={(e)=>setLoginEmail(e.target.value)}/>
                    <input placeholder='Pasword' type='password' onChange={(e)=>setLoginPassword(e.target.value)} style={{marginBottom:'110px'}}/>
                    <button onClick={login}>Login</button>
                </form>
            </div>

        </div>
    )
}

export default Homepage;