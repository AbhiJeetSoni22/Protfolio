import React from 'react'

const NewsLatter = () => {
  return (
    <section className=' bg-white dark:bg-dark/90 rounded-lg overflow-hidden shadow-md animate-slide-up'>
      <div className='p-8 md:p-12'>
         <div className='md:max-w-3xl max-w-7xl mx-auto'>
            <div className='flex flex-col gap-8'>
                 <div className='text-center'>
                <h2 className='text-2xl font-bold mb-2'>Subscribe</h2>
             </div>
             <form action="" className='flex items-center flex-col md:flex-row gap-4'>
                <input type="email" placeholder='enter you email' className='flex-1 px-4 py-3 rounded-lg dark:text-white border-gray-300 md:max-w-xl w-full dark:border-gray-600 bg-gray-200 text-gray-800 dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-primary' />
                <button type='submit' className='bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90'>Subscribe</button>
             </form>
            </div>
         </div>
      </div>
    </section>
  )
}

export default NewsLatter
