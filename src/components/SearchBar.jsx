import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'
const SearchBar = () => {

    const[text, setText]= useState('')
    const dispatch=useDispatch()

    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(setQuery(text))

        setText('')
    }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex bg-(--c1) gap-5 p-10'>

      <input 
      value={text}
      onChange={(e)=>{
        setText(e.target.value)
      }}
      required
      className='w-full border-2 px-4 py-2 text-xl rounder outline-none'
      type="text" placeholder='search anythingg..'/>

      <button className='cursor-pointer active:scale-105  border-2 px-4 py-2 text-xl rounder outline-none'>search</button>
      </form>
    </div>
  )
}

export default SearchBar
