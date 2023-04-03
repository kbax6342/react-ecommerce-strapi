import React from 'react';
import './Cart.scss';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useSelector } from 'react-redux';

const Cart = () => {
  // const data = [
  //   {
  //     id: 1,
  //     img: 'https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     img2: 'https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     title: 'Hat',
  //     desc: 'Pariatur labore nulla ad aliqua irure. Minim officia duis occaecat nostrud id aute cupidatatNulla ut excepteur minim voluptate labore Lorem consequat consectetur deserunt irure. Irure sit id minim Lorem. Fugiat consectetur nisi sint nulla magna duis consequat ex consectetur proident. Qui incididunt occaecat excepteur ad deserunt aute eu laboris. ',
  //     isNew: true,
  //     oldPrice: 19,
  //     price: 12,
  //   },
  // ];

  const products = useSelector(state => state.cart.products)
  
  return (
    <div>
      <div className='cart bg-white'>
        <h1>Products in you cart</h1>
        {products?.map((item) => (
          <div className='item' key={item.id}>
            <img src={item.img} alt='' />
            <div className='details'>
              <h1>{item.attributes.title}</h1>
              <p>{item.desc?.substring(0, 100)}</p>
              <div className='price'>1 x ${item.price}</div>
            </div>
            <DeleteOutlinedIcon className='delete' />
          </div>
        ))}
        <div className='total'>
          <span>SUBTOTAL</span>
          <span>$%123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'>Reset Cart</span>
      </div>
    </div>
  );
};

export default Cart;
