import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import categories from '../Category'
import Card from '../components/Card'
import { food_items } from '../Food'
import { dataContext } from '../context/UserContext'
import { ImCross } from "react-icons/im";
import Card2 from '../components/Card2'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

function Home() {
    let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext)
    function Filter(Category) {
        if (Category === "All") {
            setCate(food_items);
        } else {
            let newList = food_items.filter((item) => (item.food_category.toLowerCase() === Category.toLowerCase()));
            console.log("Filtered List:", newList);
            setCate(newList);
        }
    }

    let items = useSelector(state => state.cart)
    let subtotal = items.reduce((total, item) => total + item.qty*item.price, 0)
    let deliveryFee = 20;
    let taxes = subtotal * 0.5 / 100;
    let total = Math.floor(subtotal + deliveryFee + taxes);

    return (<>
        <div className='bg-slate-200 min-h-screen'>
            <Nav />
            {!input ? <div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
                {categories.map((item) => (
                    <div key={item.id} className='w-[140px] h-[150px] bg-white  flex flex-col gap-5  px-7 text-[18px] font-semibold rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200' onClick={() => Filter(item.name)}>
                        {item.Icon} {item.name}
                    </div>
                ))}
            </div> : null}

            <div className='w-full flex flex-wrap justify-center items-center gap-5 px-5 pt-8 pb-8'>
                {cate.length>1 ?(cate.map((item) => (
                    <Card key={item.id} name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type} />
                ))):<div className='text-center text-2xl text-green-500 font-bold pt-5'>No Dish Found</div>}
                
            </div>
            <div className={`w-full md:w-[35%] h-[100%] fixed top-0 right-0 bg-white shadow-xl ${showCart ? "translate-x-0" : "translate-x-full"}`}>
                <header className='flex flex-row justify-between text-green-500 font-semibold text-2xl p-3'>
                    <span>
                        order items
                    </span>
                    <ImCross className='top-0 right-0 cursor-pointer hover:text-gray-600' onClick={() => { setShowCart(false) }} />
                </header>
                 {items.length>0? 
                  <>
                  <div className='w-full mt-9 flex flex-col gap-8 '>
                      {items.map((item) => (
  
                          <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} key={item.id} />
                      ))
  
                      }
                  </div>
                  {/* <span className='text-green-500 font-semibold text-2xl flex justify-center items-center py-[50%]'>
                      empty item list...
                  </span> */}
                  <div className='w-full border-t-2 
                  border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p=8'>
                      <div className='w-full flex justify-between items-center'>
                          <span className='text-lg text-gray-600 font-semibold'>Subtotal</span>
                          <span className='text-green-400 font-semibold text-lg'>Rs {subtotal} /-</span>
                      </div>
                      <div className='w-full flex justify-between items-center'>
                          <span className='text-lg text-gray-600 font-semibold'>DeleviryFee</span>
                          <span className='text-green-400 font-semibold text-lg'>Rs {deliveryFee} /-</span>
                      </div>
                      <div className='w-full flex justify-between items-center'>
                          <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
                          <span className='text-green-400 font-semibold text-lg'>Rs {taxes} /-</span>
                      </div>
  
                  </div>
                  <div className='w-full flex justify-between items-center p-9'>
                      <span className='text-xl text-gray-600 font-semibold'>Total</span>
                      <span className='text-green-400 font-semibold text-xl'>Rs {total} /-</span>
                  </div>
                  <div className="w-full flex justify-center my-4">
                      <button className='w-[80%] p-4 bg-green-400 rounded-xl text-white shadow-xl hover:bg-green-300 cursor-pointer transition-all duration-200' onClick={()=>{toast.success("Order Placed")}}>
                          Place Order
                      </button>
                  </div>
                  </>:<div className='text-center text-2xl text-green-500 font-bold pt-5'>Empty Cart
                    </div>}
               
            </div>
            

        </div>

    </>)
}

export default Home
