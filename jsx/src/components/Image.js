import React from 'react'
import product from '../Product'

const Image = () => {
  return (
    <div>
        <img src={product.imageUrl}  alt={product.name}
        style={{ width: '270px', height: '270px' }}/>
      
    </div>
  )
}

export default Image
