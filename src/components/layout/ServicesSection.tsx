'use client'
import { DietFoodIcon } from '@/icons/DietFoodIcon'
import { PizzaIcon } from '@/icons/PizzaIcon'
import { ScooterIcon } from '@/icons/ScooterIcon'
import { SectionProps } from '@/types/SectionProps'
import { motion } from "framer-motion"

const ServicesSection = ({className}:SectionProps) => {
  return (
    <section className={`bg-[url('/assets/bg_wallpaper.png')] bg-repeat text-dark ${className}`}>
      <div className='container py-12'>
        <div className="container max-w-4xl text-center mb-10">
          <h1 className="font-semibold mb-4">Our Services</h1>
          <p>
            We've tailored a seamless experience to satisfy your pizza cravings, ensuring swift and reliable delivery, a wide range of healthy choices, and the authenticity of original recipes.
          </p>
        </div>
        <div className='grid grid-cols-3 gap-6'>
          <div className='flex flex-col gap-3 text-center p-6'>
            <div className="flex items-center text-center justify-center mb-5">
              <motion.span
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 225, transition: { duration: 1, ease: 'easeInOut' } }}
                className='w-[100px] h-[100px] border border-dark/20 flex justify-center items-center hover:bg-light relative '>
              </motion.span>
              <span className='absolute' ><DietFoodIcon className={'w-16'} /></span>
            </div>

            <h3 className='uppercase mb-4'>Healthy Food</h3>
            <div>
            Indulge in our healthy options, thoughtfully crafted to strike the perfect balance between nutritious ingredients and delightful taste.
            </div>
          </div>
          <div className='flex flex-col gap-3 text-center p-6'>
            <div className="flex items-center text-center justify-center mb-5">
              <motion.span
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 225, transition: { duration: 1, ease: 'easeInOut' } }}
                className='w-[100px] h-[100px] border border-dark/20 flex justify-center items-center hover:bg-light relative'>
              </motion.span>
              <span className='absolute'><ScooterIcon className={'w-16'} /></span>
            </div>
            <h3 className='uppercase mb-4'>Fast Delivery</h3>
            <div>Enjoy the unmatched convenience of Fast Delivery, as we ensure the piping hot perfection of our pizzas is delivered directly to your doorstep.</div>
          </div>
          <div className='flex flex-col gap-3 text-center p-6'>
            <div className="flex items-center text-center justify-center mb-5">
              <motion.span
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 225, transition: { duration: 1, ease: 'easeInOut' } }}
                className='w-[100px] h-[100px] border border-dark/20 flex justify-center items-center hover:bg-light relative'>
              </motion.span>
              <span className='absolute'><PizzaIcon className={'w-16'} /></span>
            </div>
            <h3 className='uppercase mb-4'>Original Recipes</h3>
            <div>
            Indulge your taste buds in the authenticity of our Original Recipe pizzas, where each slice is a tribute to enduring flavors and culinary craftsmanship.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection