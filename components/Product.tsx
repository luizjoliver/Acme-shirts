import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import { ProductsInfo } from '@/types';

const imageUrls = {
  black:"/black.jpg",
  white:"/white.jpg",
  blue:"/blue.jpg"
}

const sizeVariants = ["X","M","P"]
const colorVariants = ["black","white","blue"]

export default function Products({selectedColor,selectedSize}:ProductsInfo) {

    const selectedColor2= selectedColor
    const selectedSize2= selectedSize
    
    

  return (
    <div className='flex flex-grow '>

      <div className='flex justify-center p-5'>
        <Image src={imageUrls[selectedColor2]} width={200}  height={110} alt='acmeShirt'/>
      </div>

      <div className='flex-1'>
        <h1 className='text-3xl font-semibold'>Acme Circles T-Shirt</h1>
        <section className='bg-blue-500 text-white inline-block px-2 py-1 rounded-full mt-3 mb-10'>
            $20.00 USD
        </section>
        <div>
          <section className='mb-5'>
            <h2 className='text-md uppercase mb-2'>Color</h2>
            <div className='flex gap-2'>
              {colorVariants.map((color,index)=>(
                <Link key={index}
                href={`?color=${color}&size=${selectedSize2}`}
                className={`bg-gray-100 px-4 py-1
                rounded-full border-2 ${selectedColor === color 
                  ? "border-blue-500"
                  : "border-gray-200"}`}
                  >
                    {color.charAt(0).toLocaleUpperCase() + color.slice(1)}
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className='text-md uppercase'>Sizes</h2>
            <div className='flex gap-2'>
              {sizeVariants.map((size,index)=>(
                <Link key={index}
                href={`?color=${selectedColor2}&size=${size}`}
                className={`bg-gray-100 px-4 py-1
                rounded-full border-2 ${selectedSize === size
                  ? "border-blue-500"
                  : "border-gray-200"}`}>
                    {size.toUpperCase()}
                </Link>
              ))}

            </div>
          </section>
        </div>

      </div>
    </div>
  )
}
