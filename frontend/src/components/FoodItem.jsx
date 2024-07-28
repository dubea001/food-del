import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { StoreContext } from '../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
    return (
        <div className='w-full m-auto rounded-[15px] transition duration-[0.3s] animate-fadein2s'>
            <div className='relative'>
                <img
                    src={image}
                    alt=''
                    className='w-full rounded-t-[15px] rounded-b-[0px]'
                />
                {!cartItems[id] ? (
                    <img
                        onClick={() => {
                            addToCart(id);
                        }}
                        src={assets.add_icon_white}
                        alt=''
                        className='w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]'
                    />
                ) : (
                    <div className='absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white'>
                        <img
                            onClick={() => removeFromCart(id)}
                            src={assets.remove_icon_red}
                            alt=''
                            className='w-[20px]'
                        />
                        <p className=''>{cartItems[id]}</p>
                        <img
                            onClick={() => addToCart(id)}
                            src={assets.add_icon_green}
                            alt=''
                            className='w-[20px]'
                        />
                    </div>
                )}
            </div>
            <div className='p-[20px]'>
                <div className='flex justify-between items-center mb-[10px]'>
                    <p className='text-[20px] font-[500]'>{name}</p>
                    <img
                        src={assets.rating_starts}
                        alt=''
                        className='w-[70px]'
                    />
                </div>
                <p className='text-[12px] text-[#676767]'>{description}</p>
                <p className='text-[#FF6347] text-[20px] font-[500] my-[10px] mx-0'>
                    ${price}
                </p>
            </div>
        </div>
    );
};

export default FoodItem;
