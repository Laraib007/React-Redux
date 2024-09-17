import React from 'react'
import { depositemoney } from './state/action-creator'
import { useSelector } from 'react-redux'

const Shop = () => {
  const amount = useSelector(state => state)
  const sellHandler =()=>{
    depositemoney(1)
  }
  return (
    <div>
        <h4>Your Shop</h4>
      <button type="button" class="mx-2 btn btn-primary">-</button>
      {amount}
      <button type="button" class=" mx-2 btn btn-primary">+</button>
    </div>
  )
}

export default Shop
