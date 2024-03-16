"use client"
import Hero from '@/components/Home/hero';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const page = () => {

  const router = useRouter();
  const {isAuthenticated} = useSelector((state)=> state.studentReducer)
  useEffect(() => {
    if(isAuthenticated) router.push('/student/auth');  
  }, [isAuthenticated]);
  


  return (
    <>
          <section class="bg-white">
        <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-gray-600">Unlock Your<br/> Future.</h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-6
                00">Discover internships and job opportunities tailored to your skills and ambitions on TalentLink Hub. Your career journey begins here, where you can easily apply for positions, showcase your talents, and take the first step toward a brighter future. Don't wait; seize your opportunities today!</p>
                <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    {/* <Link href="" class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                      
                    </Link> 
                    <Link href="" class="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">

                    </Link> */}
                </div>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="https://img.freepik.com/free-vector/happy-freelancer-with-computer-home-young-man-sitting-armchair-using-laptop-chatting-online-smiling-vector-illustration-distance-work-online-learning-freelance_74855-8401.jpg?w=1060&t=st=1696524982~exp=1696525582~hmac=5f66deb129e18984265b74dc48560a68a356b875b7e643a665cf48c7ea1fbb5c" alt="hero image"/>
            </div>                
        </div>
    </section>
    </>
  )
}

export default page