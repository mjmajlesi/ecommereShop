import React from 'react'

export interface IChildren{
    children : React.ReactNode
}

function Container({children} : IChildren) {
  return (
    <div className='px-4 md:px-6 lg:px-10 xl:px-12'>
        {children}
    </div>
  )
}

export default Container