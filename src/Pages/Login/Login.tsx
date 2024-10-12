import React, { useState , FormEvent } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login , signUp } from '../../firebase'
import netflixSpinner from '../../assets/netflix_spinner.gif'

const Login = () => {
  const [signState,setSignState] =  useState('Sign In')
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [loading,setLoading] = useState(false)


  const userAuth = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    if (signState === 'Sign In') {
      await login(email, password);
    } else {
      await signUp(name, email, password);
    }
    setLoading(false)
  };

  return (
    loading?<div className="login-spinner">
      <img src={netflixSpinner} alt="" />
    </div>:
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>{signState} </h1>
        <form onSubmit={userAuth}>
          {signState == 'Sign Up'? <input type="text" placeholder='Your name ' value={name} onChange={(e)=>{setName(e.target.value)}} required />:<></>}    
          <input type="email" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}  required />
          <input type="text" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required />
          <button  type='submit' >{signState}</button>
          <div className="from-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me </label>
            </div>
            <p>Need Help ? </p>
          </div>
        </form>
        <div className="form-switch">
          {signState == 'Sign In' ?
            <p>New to Netflix? <span onClick={()=>{setSignState('Sign Up')}}>Sign Up Now</span></p> : 
             <p>Already have one ? <span onClick={()=>{setSignState('Sign In')}}>Sign In Now</span></p>}
         
        
        </div>
      </div>
    </div>
  )
}

export default Login
