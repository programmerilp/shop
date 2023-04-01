import React, { useState } from 'react'
import {FaShoppingCart } from "react-icons/fa";
import Orders from './Orders';
import HamLogo from "./img/iconbr.svg"

const showOrders = (props) => {
let summa = 0
props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return (<div>
    {props.orders.map(el =>(
                  <Orders onDelete={props.onDelete} key={el.id} item={el} />
                ))}
                <p className='summa'>Сумма: { new Intl.NumberFormat().format(summa)}$</p>
  </div>
  )
}
const showNothing = () =>{
  return(
    <div className='empty'>
      <h2>Товаров нет</h2>
    </div>
  )
}


export default function Header(props) {
  let [cart,setCart] = useState(false)
  return (
    <header>
        <div>
            <span className='logo'>House Staff</span>
            <div>   
                
                <ul className='nav'>
                      <li>Про нас</li>
                      <li>Контакты</li>
                      <li>Кабинет</li>
                  </ul>
                  <FaShoppingCart onClick={() => setCart(cart = !cart)} className={`shop-cart-button ${cart && 'active'}`}/>
                  </div>
              </div>
        
            {cart && (
              <div className='shop-cart'>
                {props.orders.length > 0 ?
                  showOrders(props) :showNothing()}
              </div>
            )}
    </header>
  )
}
