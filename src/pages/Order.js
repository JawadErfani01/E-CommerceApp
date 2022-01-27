import React from 'react';
import {useGlobalContext} from '../context'

function Order() {
  const {userInfo,order}=useGlobalContext()
  console.log(order);
  return <div>

    <h1 className='text-4xl text-center capitalize m-4'>your to day orders </h1>
    {userInfo.map(user=>{
      const {UserName,UserPassword}=user;
      return(
        <div className=' my-6  w-full mx-4  md:w-2/3 md:mx-auto'>
          <h2 className='text-blue-600 text-2xl'>Name: {UserName}</h2>
          <div>{order.map(list=>{
            const {title,image,price,category,rating}=list;
            return(
              <div className=''>
              <table className='table text-center border w-full p-4 '>
                <tr className='border bg-slate-700 text-white'>
                  <th className='border'>Product Name</th>
                  <th className='border'>Price</th>
                  <th className='border'>Rate</th>
                  <th className='border'>Image</th>
                </tr>
                <tr className='border '>
                  <td className='border justify-start'>{title}</td>
                  <td className='border'>{price}</td>
                  <td className='border'>{rating.rate}</td>
                  <td className='border py-4'> <img className='w-24 h-24 mx-auto' src={image} alt='title'/></td>
                </tr>

              </table>
              </div>
            )
          })}</div>
        </div>
      )
    })}
     
  </div>;
}

export default Order;
