import React, { useContext, useState } from 'react'
import { CartContext } from './Usecontext'

function SingleHeader() {
    let { obj, add_add }=useContext(CartContext)
    console.log(obj)
  return (
    <>
     
    {
        obj.map((item, index)=>(
            <div className="single__header__right__dropdown">
            <div className="header__right__dropdown__img">
              <a href="#">
                <img
                  loading="lazy"
                  src={obj[index]["img"]}
                  alt="photo"
                />
              </a>
            </div>
            <div className="header__right__dropdown__content">
              <a href="shop.html">{obj[index]['title1']}</a>
              <p>
                1 x <span className="price">{obj[index]['price']}</span>
              </p>
            </div>
            <div className="header__right__dropdown__close">
              <a href="#">
                <i className="icofont-close-line" />
              </a>
            </div>
          </div>

        ))
    }
       
        </>
  )
}

export default SingleHeader