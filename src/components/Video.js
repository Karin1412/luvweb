import React, {useState} from 'react';
import videoSource from '../assets/myvideo.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const VideoComponent = () => {
    const [isLiked, setLiked] = useState(false)

    const handleClick = () =>{
        setLiked(!isLiked)
    }
    return (
        <div className='p-3 rounded-lg bg-white w-[660px] h-fit'>
            <div className='flex'>
                <h2 className='font-semibold font-serif m-2 text-lg text-pink-400'>My demo</h2>
                <FontAwesomeIcon
                    className='w-6 h-6 mt-1 ml-[500px]'
                    icon={faHeart}
                    style={{color: isLiked? '#FF5675' : 'E1E1E1'}}
                    onClick={handleClick}>

                </FontAwesomeIcon>
            </div>
            <video className='w-fit h-fit' controls>
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoComponent;