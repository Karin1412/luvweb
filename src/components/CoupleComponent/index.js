import React from 'react'
import Item from './Item'
import Girl from '../../assets/mindiii.webp'
import Boy from '../../assets/mintiii.jpg'
import Heart from './Heart'

const Couple = () =>{
    return(
        <div className='flex-1 justify-center items-center md:flex'>
            <Item Image={Girl} Name='Mind'></Item>
            <Heart></Heart>
            <Item Image={Boy} Name='Mint'></Item>
        </div>
    )
}

export default Couple