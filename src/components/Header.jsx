import React, { useState } from 'react';
import logo from '../assets/images/disney-logo.png'

import { HiHome, HiMagnifyingGlass, HiPlayCircle, HiStar, HiTv } from 'react-icons/hi2'
import { HiPlus, HiDotsVertical } from 'react-icons/hi'
import HeaderItem from './HeaderItem';

function Header() {

    const [toggle, setToggle] = useState(false);

    const menu = [

        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },

        {
            name: 'WATCH LIST',
            icon: HiPlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        },
    ]



    return (
        <>
            <div className='flex items-center justify-between pl-8'>

                <div className='flex gap-8 items-center'>
                    <img src={logo}
                        alt="disney-logo"
                        className='w-[80px]
                 object-cover
                 md:w-[120px]
                 '
                    />

                    <div className='hidden md:flex gap-8'>

                        {menu.map((item) => (
                            <HeaderItem name={item.name} Icon={item.icon} key={item.name} />
                        ))}

                    </div>

                    <div className='flex md:hidden gap-8'>

                        {menu.map((item, index) => index < 3 && (
                            <HeaderItem name={''} Icon={item.icon} key={item.name} />
                        ))}

                        <div
                            className={`md:hidden`}
                            onClick={() => setToggle(!toggle)}
                        >

                            <HeaderItem name="" Icon={HiDotsVertical} />

                            {toggle ? <div className='absolute mt-3 bg-[#232323] border-[1px] py-3 border-gray-700 rounded-lg px-8'>
                                {menu.map((item, index) => index >= 3 && (
                                    <HeaderItem name={item.name} Icon={item.icon} key={item.name} />
                                ))}

                            </div> : null}

                        </div>

                    </div>
                </div>


                <div className="img-container flex">

                    <img src="https://avatars.githubusercontent.com/u/145199930?v=4" alt="user-avatar"
                        className='w-[40px] rounded-full'
                    />

                </div>

            </div>




        </>
    )
}

export default Header