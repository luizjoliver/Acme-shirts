
import Products from '@/components/Product'
import React from 'react'

export default function ProductPage() {
  return (
    <>
    <section className='w-full h-screen flex items-center justify-center bg-gray-200 '>
        <div className='flex items-center justify-center bg-white w-10/12 h-4/6 rounded-lg'>
            <Products/>
        </div>
    </section>
    </>
  )
}
