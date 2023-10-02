import React,{useState, useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import '../App.css'
import {signinAuthUserWithEmailAndPassword} from '../utils/firebase'
import { getAuth } from "firebase/auth";
import '../Login.css'
import { UserContext } from '../user.context'


function DisplayLogin(handleChange, contact, handleSubmit)
{
    return <div className= 'header-div'>
    <br></br>
    <div className='container col-4'>
    <Link  to='/signup'>
        <p className='sign-up-link'>Sign Up</p>
    </Link>
    </div>


    <label>Your Username</label>
    <br/>
   <input 
   name= 'email'
   type= 'text'
   className='col-5 col-lg-3'
   onChange = {handleChange}
   value = {contact.email}
   />

   <br/><br/>

    <label>Your Password</label>
    <br/>
    <input 
    name='password'
    type= 'password'
    className='col-5 col-lg-3'
    onChange = {handleChange}
    value = {contact.password}
    />

    <br/><br/>

   <button className='btn btn-success col-4' onClick={handleSubmit}>
    Sign in
   </button>

   <br/><br/>  

    </div>
}

function DisplayLoggedin(currentUser, signOut) {
    return <div>
        <br/><br/>
            <h2>Logged in as {currentUser.email}</h2>
            <br/><br/>
            <button className='btn btn-success col-4' onClick={signOut}>
            Sign Out
            </button>
            <br/><br/>
        </div>
}

const LoginPage = (props)=> {
    const {currentUser, setCurrentUser} = useContext(UserContext)
    console.log(currentUser)
        const [contact, setContact] = useState({
            email: '',
            password: ''
        })
       
        const {email, password} = contact
    
        const navigate = useNavigate();
    
    const handleChange = (event)=>{
        const {name, value} = event.target
        setContact ((preValue)=>{  
        return {
        ...preValue,
        [name]: value
        }
        })
    }
    const handleSubmit = async(event) =>
    {
        event.preventDefault();

        try{
            const {user} = await signinAuthUserWithEmailAndPassword(email,password);
            setCurrentUser(user)
            navigate('/');
        }
        catch(error){
            console.log('error in login', error.message)

        }
    }

    const signOut = async(event) => {
        event.preventDefault();
        setCurrentUser(null)
    }

    if (currentUser == null) return DisplayLogin(handleChange, contact, handleSubmit);
    else return DisplayLoggedin(currentUser, signOut)

}
export default LoginPage