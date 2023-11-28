"use client";
import Image from 'next/image';
import React from 'react'
import { useState,useEffect } from 'react';

const imageUrls = {
  black:"/black.jpg",
  white:"/white.jpg",
  blue:"/blue.jpg"
}

const sizeVariants = ["X","M","P"]
const colorVariants = ["black","white","blue"]

export default function Products() {
    const [selectedSize,setSelectedSize] = useState("M")
    const [selectedColor,setSelectedColor] = useState("black")

  return (
    <div className='flex flex-grow '>

      <div className='flex justify-center p-5'>
        <Image src={imageUrls[selectedColor]} width={200}  height={110} alt='acmeShirt'/>
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
                <button key={index}
                className={`bg-gray-100 px-4 py-1
                rounded-full border-2 ${selectedColor === color 
                  ? "border-blue-500"
                  : "border-gray-200"}`}
                  onClick={() => setSelectedColor(color)}>
                    {color.charAt(0).toLocaleUpperCase() + color.slice(1)}
                </button>
              ))}
            </div>
          </section>

          <section>
            <h2 className='text-md uppercase'>Sizes</h2>
            <div className='flex gap-2'>
              {sizeVariants.map((size,index)=>(
                <button key={index}
                className={`bg-gray-100 px-4 py-1
                rounded-full border-2 ${selectedSize === size
                  ? "border-blue-500"
                  : "border-gray-200"}`}
                  onClick={() => setSelectedSize(size)}>
                    {size.toUpperCase()}
                </button>
              ))}

            </div>
          </section>
        </div>

      </div>
    </div>
  )
}
