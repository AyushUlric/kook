import React from 'react'
import { Link } from "react-router-dom";

const Footer =() => {
    return (
            <div className="w-full bg-white flex justify-center flex-col items-center mt-10 border-t-8">
                <ul className='flex justify-between w-full p-10 items-center'>
                    <li><img src="./logo.jpg" width={100} alt="" /></li>
                    <li className='text-white text-base'>
                        <ul className='flex justify-between items-center flex-col'>
                            <li className='text-black'>
                                <Link to="/">Home</Link>
                            </li>
                            <li  className='text-black'>
                                <Link to="/profile">About Us</Link>
                            </li>
                        </ul>    
                    </li>
                    
                </ul> 
                <ul className='flex justify-center items-center flex-col'>
                    <li>
                        <p className='text-black text-center text-sm'>Copyright© 2022-2023 Kook sportswear</p>
                    </li>
                    {/* <li>
                        <p className='text-black text-center text-sm'>Kook sportswear</p>
                    </li> */}
                    <li>
                    <p className='text-black text-center text-sm'>All rights reserved</p>
                    </li>
                </ul>
            </div>
    )
}

export default Footer