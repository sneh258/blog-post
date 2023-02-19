import Sidebar from '../../sidebar/Sidebar'
import React from './single.css'
import SinglePost from '../../singlePost/SinglePost'
    
export default function Single() {
  return (
      <div className='single'>
          <SinglePost />
          <Sidebar/>
    </div>
  )
}
