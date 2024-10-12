import React, { useEffect, useState } from 'react'
import Home from './Pages/Home/Home'
import { Routes , Route, useNavigate } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Player from './Pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  const navigate = useNavigate();
  const [navigated, setNavigated] = useState(false)  // Track navigation state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log('Logged in');
        if (!navigated) {
          navigate('/'); // Redirect to home or main page
          setNavigated(true); // Set navigated to true
        }
      } else {
        console.log('Logged out');
        if (navigated) {
          navigate('/login'); // Redirect to login page
          setNavigated(false); // Reset navigated to false
        }
      }
    });

    return () => unsubscribe();
  }, [navigate, navigated]); // Add navigated to dependency array


  return (
    <div>
       <ToastContainer theme='dark'/>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/player/:id' element={<Player/>}/>
      </Routes>
      
    </div>
  )
}
