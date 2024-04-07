import React from 'react'

function HeaderItem({ name, Icon }) {
    return (
        <div className='text-white flex items-center gap-3 text-[16px] font-semibold cursor-pointer hover:underline underline-offset-8 hover:transition-all hover:animate-puls hover:duration-[1s] duration-[0.5s] mb-3'>
            <Icon />
            <h2 className=''>{name}</h2>

        </div>
    )
}

export default HeaderItem