import React from 'react'
import heart from '../Images/heart.png'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col justify-center items-center  w-full'>
            <div className="logo font-bold text-white text-2xl">
                <span className='text-green-500'> &lt;</span>
                <span>Pass</span><span className='text-green-500'>Manager/&gt;</span>
            </div>
            <div className='flex justify-center items-center'> Created with <img className='w-5 mx-2' src={heart} alt="" /> by Abhishek </div>
        </div>
    )
}

export default Footer