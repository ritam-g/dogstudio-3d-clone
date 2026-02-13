import React from 'react'
import Nav from './Nav'
import Middle from './Middle'
import { useTransitionContext } from '../hooks/useTransitionStore'

function Section1() {
  const { setActiveTitle } = useTransitionContext()

  return (
    <section
      id='section-1'
      className='w-full overflow-x-hidden lg:p-8'
      onMouseEnter={() => setActiveTitle(null)}
    >
      <Nav />
      <Middle />
    </section>
  )
}

export default Section1
