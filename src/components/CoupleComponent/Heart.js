import React, { useState , useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Heart = () =>{
    const [isBeat, setBeat] = useState(false)

    return(
        <FontAwesomeIcon
        icon={faHeart}
        style={{ color: isBeat ? '#FF5675' : '#E1E1E1' }}
        className='w-12 h-12'> 

    </FontAwesomeIcon>
    )
}

export default Heart