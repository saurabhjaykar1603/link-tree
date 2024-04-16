import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer aria-label='Site Footer' className='fixed bottom-1 mt-20 left-1/2 -translate-x-1/2'>
      <Link target='_blank' href="https://github.com/saurabhjaykar1603" className='flex flex-row items-center  '>
        <img src="/images/favicon.ico" alt=""  className='hover:-rotate-45 transition-all duration-300'/>
        <h5 className='pl-3 text-indigo-400 font-bold hover:text-indigo-200 '>Develope by Saurabh</h5>
      </Link>
    </footer>
  )
}

export default Footer
