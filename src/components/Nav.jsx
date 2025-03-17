import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaShopify } from "react-icons/fa";
import { dataContext } from '../context/UserContext';
import { food_items } from '../Food';
import { useSelector } from 'react-redux';

function Nav() {
  let {input, setInput,cate,setCate,showCart,setShowCart}=useContext(dataContext)
  useEffect(
    ()=>{
      let newlist=food_items.filter((item)=>item.food_name.includes(input) ||item.food_name.toLowerCase().includes(input))
      setCate(newlist)
    },[input]
  )
  let items=useSelector(state=>state.cart)
  
  return (
    <div className='w-full h-[100px] bg-green-400 flex  justify-between items-center px-5 md:px-8'>
        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
        <MdFastfood className='w-[30px] h-[30px] text-green-500'/>
        </div>
       <form className='  w-[45%] h-[60px] flex items-center bg-white px-5 gap-5 rounded-md shadow-xl md:w-[70%]' onSubmit={(e)=>e.preventDefault}>
       <IoIosSearch className='text-green-500 w-[20px] h-20px'/>
       <input type='text' placeholder='Search Items...' className='w-[100%] outline-none text-[16px] md:text-[20px]' onChange={(e)=>setInput(e.target.value)} value={input} />
       </form>
       <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative transition-all duration-500' onClick={()=>{
        setShowCart(true)
       }}>
       <FaShopify className='w-[30px] h-[30px] text-green-500' />
       <span className='absolute top-0 right-3 text-green-500 font-bold text-[18px]'>{items.length}</span>
        </div>
        
    </div>
  )
}

export default Nav
