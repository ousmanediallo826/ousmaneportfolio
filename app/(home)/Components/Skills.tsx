import React from 'react'
import { CardHoverEffectDemo } from './CardHoverEffectDemo'
import FadeInSection from './FadeInSection'

export default function Skills() {
  return (
    <div className='py-10'>
    <FadeInSection>
        <h1 className=' text-4xl text-center justify-center py-5 rotate-6 bg-clip-text  underline underline-offset-8 decoration-blue-500 py-10'>Skills</h1>
      <CardHoverEffectDemo/>
      </FadeInSection>
    </div>
  )
}
