import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice'

import { Base_URL } from '../utils/constants';


const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const  userData = useSelector((store)=>store.user)

  const fetchUser = async() => {  
    if(userData) return;

    try{
        const res = await axios.get( Base_URL + "/profile/view",{
          withCredentials:true
        })

        //console.log(res.data)
        dispatch(addUser(res?.data))
     }
      catch(error){
        if(error.status === 401){
          navigate('/login')
        }
        //console.error(error)
      }
    };


  useEffect(()=>{
    // Only call the API if userData is not present
    if (userData){
      fetchUser()
    }
  },[userData])

  return (
    <div className='flex flex-col mt-10'>
      
      <Outlet />      
    </div>
  )
}

export default Body;
