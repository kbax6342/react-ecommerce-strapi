import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer flex-col px-5'> 
      <div className="top flex gap-20">
      <div className="item flex flex-col flex-1 ">
        <h1 className='text-xl text-gray-500'>Categories</h1>
        <span>Women</span>
        <span>Men</span>
        <span>Shoes</span>
        <span>Accessories</span>
        <span>New Arrivals</span>
      </div>
      <div className="item flex flex-col flex-1 ">
      <h1 className='text-xl text-gray-500'>Links</h1>
        <span>Women</span>
        <span>Men</span>
        <span>Shoes</span>
        <span>Accessories</span>
        <span>New Arrivals</span>
      </div>
      <div className="item flex  flex-col flex-1 text-justify">
        <h1 className='text-xl text-gray-500'>About</h1> 
        <p>Aliqua cillum deserunt enim sit duis. Ut qui duis nostrud nulla eu laboris et sit voluptate eiusmod cupidatat nulla sunt. Consequat ad culpa labore non ipsum deserunt </p> 
        
      </div>
      <div className="item flex flex-col flex-1 text-justify">
      <h1 className='text-xl text-gray-500'>Contact</h1> 
        <p>Aliqua cillum deserunt enim sit duis. Ut qui duis nostrud nulla eu laboris et sit voluptate eiusmod cupidatat nulla sunt. Consequat ad culpa labore non ipsum deserunt </p> 
      </div>
      </div>
      <div className="bottom flex justify-between items-center">
      <div className="left flex w-full items-center">
       <span className='logo text-2xl flex justify-start'>Baxter Store</span>
       <span className="copyright ml-5 text-gray-500">Copyright all rights reserved</span>
      </div>
      <div className="right">
        <img src="/img/payment.png" alt="" />
      </div>
      </div>
    </div>
  )
}

export default Footer
