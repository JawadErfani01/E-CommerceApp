import React from 'react';

import {useGlobalContext} from '../context'

const UserBy=()=> {
const {userList}=useGlobalContext()

    console.log(userList);

  return <div>
    <h1 className='text-3xl text-blue-600 text-center p-4'>You order this products</h1>
    <div className="flex flex-wrap flex-col m-4 justify-center items-center">
  {
  userList.map(item=>{
    const {  image,price, title, description,id } = item;
    
    return(
      <div className='shadow-2xl p-2   m-4 w-3/5'>
      <div key={id} className=" flex">
        <div className=' w-1/2'>
      <img className='h-72 w-4/5 mx-auto '  src={image} alt={title} />
      <h2><span className='font-bold mr-2'>Name:</span>{title}</h2>
      <h3><span className='font-bold mr-2'>Price:</span> {price}</h3>
      </div>
      <div className='w-1/2'>
      <p className='text-lg mt-10'><span className='font-bold mr-2'>Description:</span> {description}</p>
      </div>

    </div>
        <button className='flex mx-auto  items-center justify-center px-6 py-2 rounded-full w-1/3 bg-red-400 hover:bg-red-500'>Remove</button>
    </div>
    )
  })
  

  }
  </div>
</div>;

  
}

export default UserBy;
