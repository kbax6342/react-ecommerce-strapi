import React, {useState} from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./Navbar.scss"
import { width } from '@mui/system';
import Cart from '../Cart/Cart';

const Navbar = () => {
  const [open, setopen] = useState(false)
  const products = useSelector(state => state.cart.products)
  return (
    <div className='navbar flex w-full'>
      <div className='wrapper flex w-full justify-between'>
        <div className='left flex  items-center gap-5'>

          <div className='item flex'>
            <img src='/img/en.png' alt='' className='object-none'/>
            <KeyboardArrowDownIcon />
          </div>

          <div className='item flex self-center'>
            <span  className="text-xl">USD</span>
            <KeyboardArrowDownIcon />
          </div>

          <div className='item'>
            <Link to='products/1' className="text-xl">Woman</Link>
          </div>

          <div className='item'>
            <Link to='products/2' className="text-xl">Men</Link>
          </div>
          
          <div className='item' >
            <Link to='products/3' className="text-xl">Children</Link>
          </div>
        </div>
        <div className='center flex items-center'>
          <Link to='/' className='text-2xl uppercase'>Baxter Store</Link>
        </div>
        <div className='right flex items-center gap-5'>
       

          <div className='item'>
            <Link to="products/1" className="text-xl">Homepage</Link>
          </div>
          <div className='item'>
            <Link to='products/1' className="text-xl">About</Link>
          </div>

          <div className='item'>
            <Link to='products/2' className="text-xl">Contact</Link>
          </div>
          
          <div className='item'>
            <Link to='products/3' className="text-xl">Stores</Link>
          </div>
          <div className="icons flex text-gray-500 gap-1">
                <SearchIcon  />
                <PersonOutlineOutlinedIcon/>
                <FavoriteBorderOutlinedIcon/>
                
                <div className="cartIcon" onClick={(e) => setopen(!open)}>
                <ShoppingCartOutlinedIcon/>
                
                <span>{products.length}</span>
                </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
