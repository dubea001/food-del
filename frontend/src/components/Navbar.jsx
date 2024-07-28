import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
    const [menu, setMenu] = useState('Home');
    return (
        <div className='py-[20px] px-0 flex justify-between items-center'>
            <img src={assets.logo} alt='logo' className='w-[150px]' />
            <ul className='flex gap-5 list-none text-[#49557e] text-[18px]'>
                <li
                    onClick={() => setMenu('Home')}
                    className={`cursor-pointer ${
                        menu === 'Home'
                            ? 'active pb-[2px] border-b-2 border-b-[#49557e]'
                            : ''
                    }`}
                >
                    Home
                </li>
                <li
                    onClick={() => setMenu('Menu')}
                    className={`cursor-pointer ${
                        menu === 'Menu'
                            ? 'active pb-[2px] border-b-2 border-b-[#49557e]'
                            : ''
                    }`}
                >
                    Menu
                </li>
                <li
                    onClick={() => setMenu('Mobile-app')}
                    className={`cursor-pointer ${
                        menu === 'Mobile-app'
                            ? 'active pb-[2px] border-b-2 border-b-[#49557e]'
                            : ''
                    }`}
                >
                    Mobile-app
                </li>
                <li
                    onClick={() => setMenu('Contact-us')}
                    className={`cursor-pointer ${
                        menu === 'Contact-us'
                            ? 'active pb-[2px] border-b-2 border-b-[#49557e]'
                            : ''
                    }`}
                >
                    Contact us
                </li>
            </ul>
            <div className='flex items-center gap-10'>
                <img src={assets.search_icon} alt='' />
                <div className='navbar-search-icon relative'>
                    <img src={assets.basket_icon} alt='' />
                    <div className='absolute min-w-[10px] min-h-[10px] bg-[#FF6347] rounded-[5px] -top-[8px] -right-[8px]'></div>
                </div>
                <button className='bg-transparent text-[16px] text-[#49557e] border border-[#FF6347] py-[10px] px-[30px] rounded-[50px] cursor-pointer transition duration-300 hover:bg-[#fff4f2]'>
                    Sign in
                </button>
            </div>
        </div>
    );
};

export default Navbar;
