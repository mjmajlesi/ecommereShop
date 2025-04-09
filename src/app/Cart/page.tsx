import Container from '@/Components/Container'
import React from 'react'
import example from "../../../public/images/header.jpg"
import Image from 'next/image'
function CartPage() {
  return (
    <div>
      <Container>
        <div className='bg-slate-100 rounded-2xl grid grid-cols-12 gap-8'>
          <div className='col-span-6 rounded-2xl'>
            <Image className='h-full w-full' src={example} alt="images" />
          </div>
          <div className='col-span-6 rounded-2xl'>
            <Image className='h-full w-full' src={example} alt="images" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CartPage