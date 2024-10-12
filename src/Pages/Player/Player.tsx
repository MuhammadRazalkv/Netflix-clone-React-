import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
import { options } from '../../../firebaseAuth'

const Player = () => {

  const {id} = useParams()
  const navigate = useNavigate()


  const [apiData,setApiData] = useState({
    name:'',
    key:'',
    published_at:'',
    typeof:''

  })


 
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[id])


  return (
    <div className='player'>
      <img src={back_arrow} onClick={()=>{navigate(-2)}} alt="" />
      <iframe  width='90%' height='90%'
      src={`http://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen  ></iframe>

      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.typeof}</p>
      </div>

    </div>
  )
}

export default Player