"use client";
import React from 'react'
import HeroSection from './components/HeroSection'
import ContactUsForm from './components/ContactUsForm'
import FaqSection from './components/FaqSection'
import { useForm, FormProvider } from "react-hook-form";

const Page = () => {
    const methods = useForm();

  return (
    <FormProvider {...methods}>
      <>
        <HeroSection />
        <ContactUsForm />
        <FaqSection />
      </>
    </FormProvider>
  );
}

export default Page
