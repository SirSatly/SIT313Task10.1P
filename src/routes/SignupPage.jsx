import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import '../App.css'
import '../Login.css'
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../utils/firebase'

const SignupPage = (props)=>{

        const [contact, setContact] = useState({
            displayName:'',
            email: '',
            password: '',
            confirmPassword:''
        })
       
    const {displayName, email, password, confirmPassword} = contact;

    const navigate = useNavigate();

    console.log(contact);
    
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

        if (password !== confirmPassword){
            alert('Passwords do not match!')
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocFromAuth (user, {displayName});
            navigate('/login')
        }
        catch(error){
            console.log('error in creating user', error.message)

        }
    }

    
 
    return <div className= 'header-div'>

        <br></br>
        <h2>Create a DevLink Account</h2>
        <br/>

        <label className='col-3 col-lg-2 col-xxl-1'>Name</label>

        <input 
        name= 'displayName'
        type= 'text'
        className='col-4 col-lg-2'
        onChange = {handleChange}
        value = {contact.displayName}
        />
            <br/><br/>

        <label className='col-3 col-lg-2 col-xxl-1'>Email</label>
        <input 
        name= 'email'
        type= 'email'
        className='col-4 col-lg-2'
        onChange = {handleChange}
        value = {contact.email}
        />

        <br/><br/>

        <label className='col-3 col-lg-2 col-xxl-1'>Password</label>
        <input 
        name='password'
        type= 'password'
        className='col-4 col-lg-2'
        onChange = {handleChange}
        value = {contact.password}
        />
        <br/><br/>


        <label className='col-3 col-lg-2 col-xxl-1'>Confirm Password</label>
        <input 
        name='confirmPassword'
        type= 'password'
        className='col-4 col-lg-2'
        onChange = {handleChange}
        value = {contact.confirmPassword}
        />

        <br/><br/>

      <button className='btn btn-success col-4' onClick={handleSubmit}> Create </button> 

      <br/><br/> 
    </div>

}
export default SignupPage