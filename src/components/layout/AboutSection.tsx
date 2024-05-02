import { SectionProps } from '@/types/SectionProps'
import React from 'react'

const AboutSection = ({className}:SectionProps) => {
  return (
    <section id="about" className={className}>
      <div className='grid grid-cols-2'>
        <div className="bg-[url('/assets/about.jpg')] bg-center bg-no-repeat bg-cover"></div>
        <div className="p-24">
          <h1 className="mb-4">Welcome to <span className=" text-primary">House of Pizza</span></h1>
          <div className='text-gray-300'>
            <p className='mb-4'>
             At House of Pizza, we celebrate a tale of passion and flavor. Our journey began with an unwavering love for crafting the ultimate pizza, marrying tradition and innovation. Inspired by Italy's rich culinary legacy, our chefs meticulously select the finest ingredients to craft pizzas that are nothing short of masterpieces. From our artisanal crusts to our sumptuous toppings, every slice serves as a testament to our commitment to excellence and quality.
            </p>
            <p>
            With a dedication to excellence, we've fostered a community that savors every slice. Embark on this culinary journey with us, where each order adds a chapter to our story—a narrative woven from taste, tradition, and the pleasure of sharing remarkable food.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection