import React from 'react'

export default function ProductComponent(props) {
  return (
    <>
    <div className='card'>
     <div className='card-header'>
          {props.Name}
     </div>
     <div className='card-body'>
         {props.Photo}
     </div>
     <div className='card-footer'>
      ${props.Price}
     </div>
    </div>
    </>
  )
}
