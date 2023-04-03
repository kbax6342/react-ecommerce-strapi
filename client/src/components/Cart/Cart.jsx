import React from 'react';
import './Cart.scss';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from "../../redux/cartReducer";
import {loadStripe} from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest';


const Cart = () => {
  const dispatch = useDispatch()
  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      img2: 'https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Hat',
      desc: 'Pariatur labore nulla ad aliqua irure. Minim officia duis occaecat nostrud id aute cupidatatNulla ut excepteur minim voluptate labore Lorem consequat consectetur deserunt irure. Irure sit id minim Lorem. Fugiat consectetur nisi sint nulla magna duis consequat ex consectetur proident. Qui incididunt occaecat excepteur ad deserunt aute eu laboris. ',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];

  const products = useSelector(state => state.cart.products)
  console.log(products)

  const totalPrice = () =>{
    let total = 0;
    products.forEach((item) => (
      total += item.quantity * item.price
     
      ))
      return total.toFixed(2)
  }

  const stripePromise = loadStripe(
    "pk_test_51Msc4yG4kity2TnwJ8F1uwtaJJaHtMBUs1Cbvo3D4GmHvHqxyVO0u3jzrxddw66Jn5woq6mFUBOph18Ze6M8VNaB00pEtAH93Y"
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div>
      <div className='cart bg-white'>
        <h1>Products in you cart</h1>
        {products?.map((item) => (
          <div className='item' key={item.id}>
            <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt='' />
            <div className='details'>
              <h1>{item.title}</h1>
              <p>{item.desc?.substring(0, 100)}</p>
              <div className='price'>{item.quantity} x $ {item.price}</div>
            </div>
            <DeleteOutlinedIcon className='delete' onClick={() =>dispatch(removeItem(item.id))} />
          </div>
        ))}
        <div className='total'>
          <span>SUBTOTAL</span>
          <span>${totalPrice()}</span>
        </div>
        <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
        <span className='reset' onClick={() =>dispatch(resetCart())}>Reset Cart</span>
      </div>
    </div>
  );
};

export default Cart;
