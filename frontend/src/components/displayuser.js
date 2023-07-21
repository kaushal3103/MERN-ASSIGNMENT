import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Allusers =()=>{

  const [users,setUsers] = useState([]);

  useEffect(()=>{
    const fetchdata = async()=>{
      try{

          const res = await axios.get('https://mern-api-9k1u.onrender.com/api/v1/auth/alluser');
          setUsers(res.data.user);
      }
      catch(error){
        console.log(error);
      }
    }
    fetchdata();
  },[]);

    return (
        <div className="allusers">
          <h1>Display All Users</h1>
          <div className='page'>
            {
              users.map((data)=>(
                <div key={data._id} className='smalldata'>
                <h2>{data.firstname}</h2>
                <h3>{data.email}</h3>
                </div>
              ))
            }
            
            </div>
            <Link to ="/"><button style={{marginBottom:'30px'}}>Back To Home</button></Link>
        </div>
    )
}

export default Allusers;