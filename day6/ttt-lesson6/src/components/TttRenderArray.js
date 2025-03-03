import React from 'react'

export default function TttRenderArray() {

    const TttNumbers = [10,20,30,40,50];
    const TttElement = TttNumbers.map((item)=>{
        return <li>{item}</li>
    })
  return (
    <div className='alert alert-success'>
        {TttElement}
    </div>
  )
}
