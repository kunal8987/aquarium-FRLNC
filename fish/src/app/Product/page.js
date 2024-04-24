import React from 'react'
import ProductCard from './ProductCard'

const page = () => {
  return (
    <div className='background'>
      <div className='container mx-auto px-10'>
        <p className="text-white text-center text-2xl md:text-4xl font-bold p-5 md:p-10">
        Fish-Food
      </p>
        <ProductCard/>
        </div>
    </div>
  )
}

export default page