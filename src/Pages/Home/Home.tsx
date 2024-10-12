import React from 'react'
import hero_banner from '../../assets/hero_banner.jpg'
import './Home.css'
import NavBar from '../../Components/NavBar/NavBar'
import hero_title from '../../assets/hero_title.png'
import playIcon from '../../assets/play_icon.png'
import infoIcon from '../../assets/info_icon.png'
import TitleCards from '../../Components/TitleCards/TitleCard'
import Footer from '../../Components/Footer/Footer'
const Home = () => {
  return (
    <div className='Home'>
      <NavBar />
      <div className="hero">
        <img src={hero_banner} className='banner-img' alt="" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit eveniet laudantium alias temporibus. Obcaecati asperiores officia itaque placeat quisquam facere! Quasi totam earum facilis! Possimus eum dignissimos eius mollitia consequuntur!</p>
          <div className="hero-btns">
            <button className='btn'><img src={playIcon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={infoIcon} alt="" />More info</button>
          </div>
          <div className='title-cards'>
          <TitleCards />
          </div>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={'Blockbuster Movies'} category={'top_rated'} />
      <TitleCards title={'Popular'} category={'popular'} />
      <TitleCards title={'Upcoming'} category={'upcoming'} />
      <TitleCards title={'Top pics for you '} category={'now_playing'} />
      </div>
      <Footer/>
    </div>
  )
}

export default Home
