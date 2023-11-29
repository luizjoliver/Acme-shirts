
import Products from '@/components/Product'
import React from 'react'

export default function ProductPage({searchParams}) {
  const selectedColor = searchParams.color || "black"
  const selectedSize = searchParams.size  || "M"
  return (
    <>
    <section className='w-full h-screen flex items-center justify-center bg-gray-200 '>
        <div className='flex items-center justify-center bg-white w-10/12 h-4/6 rounded-lg'>
            <Products selectedColor={selectedColor} selectedSize={selectedSize}/>
        </div>
    </section>
    </>
  )
}
