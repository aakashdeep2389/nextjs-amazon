import React from 'react';
import Link from 'next/link';
import CartButton from './cart-button';

const Menu = () => {
  return (
    <div className='flex justify-end'>
      <nav className='flex gap-3 w-full'>
        <Link href='/signin' className='flex items-center header-button'>
          Hello, Sign in
        </Link>
        <nav className='flex gap-3 w-full'>
          <CartButton />
        </nav>
        {/* <Link href='/cart' className='header-button'>
          <div className='flex  items-end'>
            <ShoppingCartIcon className='h-8 w-8' />
            Cart
          </div>
        </Link> */}
      </nav>
    </div>
  );
};

export default Menu;
