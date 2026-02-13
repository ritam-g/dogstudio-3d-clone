import React from 'react'
import { useTransitionContext } from '../hooks/useTransitionStore'

function Section2() {
  const { setActiveTitle } = useTransitionContext()

  return (
    <section
      id='section-2'
      className='w-full overflow-x-hidden lg:p-8  flex flex-row-reverse'
      onMouseEnter={() => setActiveTitle(null)}
    >
      <div className="child">

      </div>
      <div className="child w-[50%] 
        lg:  flex flex-col gap-8 justify-center items-start pl-[6rem] font-serif
        ">
        <div className='
            lg:text-2xl'>
          <h1>Dogstudio is a multidisciplinary <br />
            creative studio at the intersection <br />
            of art, design and technology.</h1>
        </div>
        <div className='text-gray-400'>
          Our goal is to deliver amazing experiences that make <br />
          people talk, and build strategic value for brands, tech, <br />
          entertainment, arts & culture.
        </div>
        <div className="aLink text-[0.8rem] flex gap-2">
          <a href="">Facebook</a> /
          <a href=""> Instagram</a>/
          <a href=""> Dribbble</a>/

          <a href=""> Twitter</a>/

          <a href=""> Newsletter</a>
        </div>
      </div>

    </section>
  )
}

export default Section2
