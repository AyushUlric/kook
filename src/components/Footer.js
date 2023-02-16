import React from 'react'
import { Link } from "react-router-dom";

const Footer =() => {
    return (
        <>
            <div className="w-full bg-black flex justify-center flex-col items-center mt-10">
                <ul className='flex justify-center w-full p-10 items-center'>
                    <li><img src="./logo.jpg" width={100} alt="" /></li>
                    {/* <li className='text-white text-base'>
                        <ul className='flex justify-center items-center flex-col'>
                            <li className='text-white'>
                                <Link to=""></Link>
                            </li>
                            <li  className='text-white'>
                                <Link to=""></Link>
                            </li>
                        </ul>    
                    </li> */}
                    
                </ul> 
                <ul className='flex justify-center items-center flex-col'>
                    <li>
                        <p className='text-white text-center text-sm'>Copyright© 2022-2023</p>
                    </li>
                    <li>
                        <p className='text-white text-center text-sm'>Kook sportswear</p>
                    </li>
                    <li>
                    <p className='text-white text-center text-sm'>All rights reserved</p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Footer