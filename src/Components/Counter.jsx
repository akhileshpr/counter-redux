import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../Redux/counterSlice'


function Counter() {
  const dispatch=useDispatch()
  const count=useSelector((state)=>state.counterSlice.count)
  const [amount,setAmount]=useState(0)
  const handleIncrement=()=>{
    if(amount>0){
      dispatch(incrementByAmount(+amount))
       setAmount('')
    }
    else{
      alert('enter valid amount')
    }
  }
  return (
    <div>
    <h1 className='text-center p-2'>counter</h1>
    <div className='border container w-100'>
    <h1 className='text-center p-3'>{count}</h1>

    <div className='text-center p-2 '>
       <button onClick={()=>dispatch(increment())} className='btn btn-primary m-2' type='button'>Increment</button> 
       <button onClick={()=>dispatch(reset())} className='btn btn-danger m-2'>Reset</button>
       <button onClick={()=>dispatch(decrement())} className='btn btn-primary m-2'>Decrement</button>
    </div>
    <div className='d-flex justify-content-between mt-5'>
      <input onChange={(e)=>setAmount(e.target.value)} value={amount} type="text" className='form-control' placeholder='enter the amount tobe incremented' />
      <button onClick={handleIncrement} className='btn btn-primary m-2'>Increment</button>
    </div>
    </div>

    </div>
  )
}

export default Counter