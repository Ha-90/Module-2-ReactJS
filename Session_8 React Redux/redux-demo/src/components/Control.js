import React from 'react'
import { useDispatch } from 'react-redux'
import { act_up, act_down, act_random } from '../actions';

export default function Control() {
    const dispatch = useDispatch();
    const handleUp = (value) =>{
        dispatch(act_up(value))
    }
  return (
    <div>
        <button onClick={()=> handleUp(3)}>Up</button>
        <button onClick={()=> dispatch(act_down(2))}>Down</button>
        <button onClick={()=> dispatch(act_random())}>Random</button>
    </div>
  )
}
