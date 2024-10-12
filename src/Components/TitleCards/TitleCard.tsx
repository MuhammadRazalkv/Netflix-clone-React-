import React, { useRef, useEffect, useState } from 'react'
import './TitleCard.css'
import { Link } from 'react-router-dom';
interface TitleCardProps {
  title?: string;
  category?: string; // optional prop
}


const TitleCard: React.FC<TitleCardProps> = ({ title , category }) => {
  const cardsRef = useRef<HTMLDivElement | null>(null);  // Initial value is set to null
 
  const [apiData , setApiData] = useState([])
  
 
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmRjNWM0ZmYxZWZkMTA2YmQ1YjQwMWY5YjNlMzZlYiIsIm5iZiI6MTcyODY1NzYxMC4zNTUxMzgsInN1YiI6IjY3MDkzNzkxNmFkZjY2MjAyMTMwM2U5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VouvB57LmKe17tpV0F5OKQ-3J78PvhcrrvdlK-o2aUE'
    }
  };
  
  

  // useEffect(() => {

  //   fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  //   .then(response => response.json())
  //   .then(response => setApiData(response.results))
  //   .catch(err => console.error(err));

  //   if (cardsRef.current) {
  //     cardsRef.current.addEventListener('wheel', (event) => {
  //       event.preventDefault()
  //       if (cardsRef.current) {

  //         cardsRef.current.scrollLeft += event.deltaY
  //       }
  //     });
  //   }
  // });
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));
  
    if (cardsRef.current) {
      cardsRef.current.addEventListener('wheel', (event) => {
        event.preventDefault();
        if (cardsRef.current) {
          cardsRef.current.scrollLeft += event.deltaY;
        }
      });
    }
  }, [category]); // Add category to the dependency array
  

  return (
    <div className='titleCards'>
      <h2>{title?title:'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card: { backdrop_path: string, original_title: string , id:string|number }, index: number) => {
          return <Link to={`/player/${card.id }`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCard
