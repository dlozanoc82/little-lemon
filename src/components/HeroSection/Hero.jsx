import React from 'react'
import imageHero from '../../assets/ma_b.jpg'
import Button from '../ButtonComponent/Button'
import { useNavigate } from 'react-router-dom';

const Hero = () => {

  const navigate = useNavigate();

  const onClickReserve = () => {
    navigate("/reservations");
  }

  return (
    <div className='hero-background'>
      <div className="hero">
        <div>
          <h1 className="title">Little Lemmon</h1>
          <h2 className="subtitle">Chicago</h2>
          <p className='description-text'>
            Nestled in the heart of bustling Chicago, Little Lemon is where modern flair meets cozy nostalgia. Our diverse, artisanal menu, featuring delectable bruschettas, succulent burgers, and refreshing Greek salads, is a testament to our belief that food is an art.
          </p>
          <Button title={"Reserve a table"} onClick={onClickReserve} />
        </div>
        <img src={imageHero} alt="Restaurant" className="image" />
      </div>
    </div>
  )
}

export default Hero
