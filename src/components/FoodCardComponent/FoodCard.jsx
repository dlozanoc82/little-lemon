import React from 'react'


const FoodCard = ({title = "Comida", description= "Comida", image, price = "Comida"}) => {
  return (
    <div className='food-card'>

      <div className="food-card-image">
        <img src={image} alt={title} />
      </div>

      <div className='food-card-body'>
        <div className='food-card-header'>
            <div className="food-card-title">
                <p className="food-title"> {title} </p>
                <p className='food-price'> {price} </p>
            </div>
            <p className='food-card-description'>{description}</p>
        </div>

        <div className="food-card-delivery">
            <p className="food-delivery-title">Order a delivery</p>
            <img src="" alt="" />
        </div>

      </div>

    </div>
  )
}

export default FoodCard
