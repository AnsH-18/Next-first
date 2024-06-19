"use client"
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import FeaturedCourses from '@/components/FeaturedCourses'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import UpcomingWebinars from '@/components/UpcomingWebinars'

export default function Home() {
  const [todo, setTodo] = useState("")
  console.log("page")
  return (
    <main className="flex min-h-screen flex-col  justify-between ">
      <div>
       <Navbar/>
       <HeroSection/>
       <FeaturedCourses/>
       <WhyChooseUs/>
       <Testimonials/>
       <UpcomingWebinars/>
      </div>
    </main>
  )
}
