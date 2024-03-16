import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <>
    <nav class="bg-white border-gray-200 dark:bg-gray-200">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" class="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-blue-500">TalentLink Hub</span>
  </a>
  <div class="flex gap-5 md:order-2">
      <Link href="/student"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Apply</Link>
      <Link href="/employe"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Hire Talent</Link>
     
  </div>
   
  </div>
</nav>
    </>
  )
}

export default Nav