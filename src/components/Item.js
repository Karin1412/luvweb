import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const Item = (props) =>{
    const [isLiked, setLiked] = useState(false)
    const handleClick =() =>{
        setLiked(!isLiked)
    }
    return(
        <div className='rounded-lg bg-white p-3 w-56 h-76'>
            <img src={props.Image} alt='avatar' className='rounded-md'/>
            <div className='flex'>
                <p className='text-pink-400 font-semibold font-serif text-lg mt-1 ml-2'>{props.Name}</p>
                <FontAwesomeIcon
                    className='h-6 w-6 m-1 ml-28'
                    icon={faHeart}
                    style={{color: isLiked ? 'FF5675' : 'E1E1E1' } }
                    onClick={handleClick}>
                </FontAwesomeIcon>
            </div>
        </div>
    )
}

export default Item