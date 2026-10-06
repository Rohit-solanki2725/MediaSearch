import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection } from '../redux/features/collectionSlice'
import { removeToast } from '../redux/features/collectionSlice'

const CollectionCard = ({item}) => {

const dispatch=useDispatch()

const removeFromCollection=(item)=>{
dispatch(removeCollection(item.id))
dispatch(removeToast())
}
  return (
    
       <div className='w-80 h-80 relative bg-white rounded-xl overflow-hidden'>
        <a target='_blank' className='h-full' href={item.url}>
        {item.type=='photo'? < img className='h-full w-full object-cover object-center' src={item.src} alt="" />:''}
        {item.type=='video'?<video className='h-full w-full object-cover object-center' autoplay loop mute src={item.src} alt=""/>:''}
        </a>
      <div id='bottom' className='flex justify-between h-14 overflow-hidden items-center gap-3 w-full px-4 py-6 absolute bottom-0 text-white'>
        <h2 className='text-xl font-semibold capitalize'>{item.title}</h2>
        <button onClick={() => {
          removeFromCollection(item)
        }}
        className='bg-indigo-600 text-white active:scale-90 cursor-pointer rounded px-3 py-2 font-medium '>
            Remove
            </button>
      </div>

    </div>
    
  )
}

export default CollectionCard
