import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function Middle() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".middle-text", {
        y: 120,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.15
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className='Middle w-full flex capitalize font-bold text-white overflow-hidden'
    >
      <div
        className="
        Middle-child
        w-[60%]
        flex flex-col
        items-end
        text-[9rem]
        leading-none
        p-2
        "
      >
        <h1 className="middle-text m-0">we</h1>
        <h2 className="middle-text m-0">make</h2>
        <h3 className="middle-text m-0">good</h3>
        <h4 className="middle-text m-0">shit</h4>
      </div>

      <div className="Middle-child w-[40%]"></div>
    </div>
  )
}

export default Middle
