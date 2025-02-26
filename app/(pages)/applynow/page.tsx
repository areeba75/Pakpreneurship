import React from 'react'
import HeroSection from './components/HeroSection'
import PersonalInfoForm from './components/PersonalInfoForm'
import FaqSection from '../contactus/components/FaqSection'

const page = () => {
  return (
    <>
      <HeroSection />
      <PersonalInfoForm />
      <FaqSection />
    </>
  )
}

export default page
