import Container from '@/Components/Container'
import React from 'react'
import example from "../../../public/images/header.jpg"
import Image from 'next/image'
function CartPage() {
  return (
    <div>
      <Container>
        <div className='rounded-2xl flex flex-wrap items-center justify-center  gap-8'>
          <div className='rounded-2xl'>
            <Image className='w-full h-full' src={example} alt="images" />
          </div>
          <div className='rounded-2xl'>
            <Image className='w-full h-full' src={example} alt="images" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CartPage