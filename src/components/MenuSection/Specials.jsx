import React from 'react'
import FoodCard from '../FoodCardComponent/FoodCard'
import { specialsData } from '../../data/data'

const Specials = () => {
  return (
    <div className="specials">
      <div className="header-container">
        <h1 className="specials-title">Specials</h1>
        {/* <Button title={"Online Menu"} onClick={onClickMenu} /> */}
      </div>

      <div className="header-list">
        {specialsData.map((special) => (
            <FoodCard
                key={special.id}
                title={special.title}
                description={special.description}
                image={special.image}
                price={special.price}
            />
        ))}
      </div>

    </div>
  )
}

export default Specials
