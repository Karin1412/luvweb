import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Item = (props) => {
  const [isLiked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!isLiked);
  };

  return (
    <div className='rounded-lg bg-white p-3 w-[360px] h-full m-2'>
      <img src={props.Image} alt='avatar' className='rounded-md w-screen mb-2' />
      <div className='flex justify-between items-center'>
        <p className='text-pink-400 font-semibold font-serif text-lg mt-1 ml-2'>{props.Name}</p>
        <FontAwesomeIcon
          className='h-6 w-6 m-1'
          icon={faHeart}
          style={{ color: isLiked ? '#FF5675' : '#E1E1E1' }}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Item;
