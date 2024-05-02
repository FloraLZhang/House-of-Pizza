import ContactUsForm from '@/components/common/form/ContactUsForm'
import React from 'react'

const ContactPage = () => {
  return (
    <div className='py-20 container'>
      <div className="grid grid-cols-2">
        <div className="container flex flex-col gap-8">
          <h1 className='mb-4'>Contact Information</h1>
          <p >Address: <span className='text-primary'>1 Pink St, Boston, MA, 02215 </span></p>
          <p>Phone: <span className='text-primary'>+1 857-888-8888</span></p>
          <p>Email: <span className='text-primary'>info@houseofpizza.com</span></p>
          <p>Business Hours: <span className='text-primary'>Monday-Sunday 11:00am - 9:00pm</span></p>
        </div>
        <div className='container'>
          <ContactUsForm />
        </div>
      </div>
    </div>
  )
}

export default ContactPage