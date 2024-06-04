import React from 'react'

interface Props{
    save:number
}

const Discount = ({save}:Props) => {
   
  return (
    <div className='px-1'>${+save.toFixed(2)}</div>
  )
}

export default Discount