import React from 'react';
import { menu_list } from '../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div id='explore-menu' className='flex flex-col gap-5'>
            <h1 className='text-[#262626] font-[500] text-[2rem]'>
                Explore our menu
            </h1>
            <p className='max-w-[60%] columns-[#808080] text-[18px]'>
                Choose from a diverse menu featuring a delectable array of
                dishes. Our mission is to satisfy your cravings and elevate your
                dinning experience, one delicious meal at a time
            </p>
            <div className='explore-menu-list flex justify-between items-center gap-[30px] text-center my-[20px] mx-[0px] overflow-x-scroll'>
                {menu_list.map((item, index) => {
                    return (
                        <div
                            className=''
                            key={index}
                            onClick={() =>
                                setCategory((prev) =>
                                    prev === item.menu_name
                                        ? 'All'
                                        : item.menu_name
                                )
                            }
                        >
                            <img
                                src={item.menu_image}
                                alt=''
                                className={`${
                                    category === item.menu_name
                                        ? 'Active border-[4px] border-[#FF6347] p-[2px]'
                                        : ''
                                } 'w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] transition duration-[0.2s]'`}
                            />
                            <p className='mt-[10px] text-[#747474] text-[max(1.4vw,16px)] cursor-pointer'>
                                {item.menu_name}
                            </p>
                        </div>
                    );
                })}
            </div>
            <hr className='my-[10px] mx-0 h-[2px] bg-[#e2e2e2] border-none' />
        </div>
    );
};

export default ExploreMenu;
