import React from 'react';

const Header = () => {
    return (
        <div
            className='relative h-[34vw] my-[30px] mx-auto bg-contain bg-center bg-no-repeat'
            style={{ backgroundImage: `url('/header_img.png')` }}
        >
            <div className='absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadein3s'>
                <h2 className='font-[500] text-white text-[max(4.5vw,22px)]'>
                    Order your favourite food here
                </h2>
                <p className='text-white text-[1vw]'>
                    Choose from a diverse menu featuring a delectable array of
                    dishes crafted with the finest ingredients and culinery
                    expertise. Our mission is to satisfy your cravings and
                    elevate your dinning experience, one delicious meal at a
                    time
                </p>
                <button className='border-none text-[#747474] font-[500] py-[1vw] px-[2.3vw] bg-white text-[max(1vw,13px)] rounded-[50px]'>
                    View Menu
                </button>
            </div>
        </div>
    );
};

export default Header;
