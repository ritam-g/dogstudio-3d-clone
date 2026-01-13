import React from 'react'
import Nav from './Nav'
import Middle from './Middle'

function Section1() {
  return (
    <>
      <section className='
      w-full overflow-x-hidden
      lg:p-8
      ' 
      id='section-1'
      >
        <Nav/>
        <Middle/>
      </section>
    </>
  )
}

export default Section1
