import { useState } from 'react'
import UserCard from './UserCard'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { Base_URL } from '../utils/constants'

const EditProfile = ({ user }) => {

      const [ firstName, setFirstName] = useState(user.firstName);
      const [ lastName, setLastName] = useState(user.lastName);
      const [ photoUrl, setPhotoUrl] = useState(user.photoUrl);
      const [ age, setAge] = useState(user.age || '');
      const [ gender, setGender] = useState(user.gender || '');
      const [ about, setAbout] = useState(user.about || '');

      const [error,setError] = useState('');
      const dispatch = useDispatch();

      const [showToast, setShowToast] = useState(false)

      
      const savedProfile = async() => {
        setError("")
        try{
            const res = await axios.put(`${Base_URL}/profile/edit`,
                { 
                    firstName,
                    lastName,
                    photoUrl,
                    age,
                    gender,
                    about,
                },
                { withCredentials: true }
            )
            //console.log(res?.data?.data)

            dispatch(addUser(res.data?.data))
            setShowToast(true)
            setTimeout(() => {
              setShowToast(false);
            },2000);
        }catch(error){
            setError(error.message)
        }
      }

  return (
    <>
    <div className='flex justify-center my-10 '>
      <div className='flex justify-center  mx-10'>
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Edit Profile </h2>
          <div className=''>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">First Name:</span>
              </div>
              <input 
                type="text"
                value={firstName} 
                placeholder="Enter First Name" 
                className="input input-bordered w-full max-w-xs"
                onChange={(e)=> setFirstName(e.target.value)} 
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Last Name:</span>
              </div>
              <input 
                type="text" 
                value={lastName}
                placeholder="Enter Last Name" 
                className="input input-bordered w-full max-w-xs"
                onChange={(e)=> setLastName(e.target.value)} 
              />
            </label>
            
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Photo URL :</span>
              </div>
              <input 
                type="text" 
                value={photoUrl}
                placeholder="Enter photo url" 
                className="input input-bordered w-full max-w-xs"
                onChange={(e)=> setPhotoUrl(e.target.value)} 
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Age:</span>
              </div>
              <input 
                type="text" 
                value={age}
                placeholder="Enter age" 
                className="input input-bordered w-full max-w-xs"
                onChange={(e)=> setAge(e.target.value)} 
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Gender:</span>
              </div>
              <select 
                value={gender} 
                onChange={(e)=> {setGender(e.target.value)}} 
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled value={''}>Who shot first?</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>

            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">About:</span>
              </div>
              <textarea value={about} onChange={(e)=> setAbout(e.target.value)} className="textarea textarea-bordered" placeholder="Bio"></textarea>
            </label>
          </div>
          <p className='text-red-600'>{error}</p>
          <div className="card-actions justify-end">
            <button  onClick={savedProfile} className="btn btn-primary">Save Profile</button>
          </div>
        </div>
      </div>
      </div>
      <UserCard user={{ firstName, lastName, photoUrl, age, gender, about }}/>
    </div>
    { showToast && (<div className="toast toast-top toast-center">
      <div className="alert alert-success">
        <span>Profile saved successfully.</span>
      </div>
    </div>
    )}
    </>
  )
}

export default EditProfile
