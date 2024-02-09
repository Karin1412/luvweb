import React, { useState , useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Heart = () =>{
    const [isBeat, setBeat] = useState(false)
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setBeat((prevColor) => !prevColor);
        }, 300);
    
        return () => clearTimeout(timeoutId);
      }, [isBeat]);
    
    const date = () =>{
        let firstDay = new Date("12/05/2023")
        let today = new Date()

        let soMiligiay = Math.abs(firstDay - today);

        let soNgay = Math.floor(soMiligiay / (1000 * 60 * 60 * 24));
        return soNgay;
    }
    return(
        <div className='p-28 text-center items-center'>
            <FontAwesomeIcon
                icon={faHeart}
                style={{ color: isBeat ? '#FF5977' : '#FF365A' }}
                className='w-32 h-32'> 
            </FontAwesomeIcon>
            <p className='font-custom text-pink-800'>Tụi mình đã bên nhau được {date()} ngày rồi nè</p>
        </div>
    )
}

export default Heart