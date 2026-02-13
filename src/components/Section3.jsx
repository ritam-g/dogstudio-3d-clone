import React from 'react'
import { useTransitionContext } from '../hooks/useTransitionStore'

const projectData = [
  { id: 'tomorrowland', label: 'Tomorrowland', year: 'Loading' },
  { id: 'navy-pier', label: 'Navy Pier', year: '2018 – Today' },
  { id: 'msi-chicago', label: 'MSI Chicago', year: '2015 – Today' },
  { id: 'phone', label: "This Was Louise’s Phone", year: '2016' },
  { id: 'kikk', label: 'KIKK Festival 2018', year: '2012 – Today' },
  { id: 'kennedy', label: 'The Kennedy Center', year: '2017' },
  { id: 'opera', label: 'Royal Opera Of Wallonia', year: '2016 – Ongoing' },
]

function Section3() {
  const { setActiveTitle } = useTransitionContext()

  return (
    <section className='section-3'>
      <div
        className="w-full flex flex-col text-gray-500 font-semibold leading-tight space-y-2 cursor-pointer 
    [&>div>span:nth-child(2)]:text-7xl gap-4
    [&>div:hover]:text-white
    [&>div>span:nth-child(2)]:transition-all
    [&>div>span:nth-child(2)]:duration-300
    [&>div:hover>span:nth-child(2)]:translate-x-2"
        id="section-3"
      >
        {projectData.map((project) => (
          <div
            key={project.id}
            data-img-title={project.id}
            className="title text-lg flex items-center gap-[10rem]"
            onMouseEnter={() => setActiveTitle(project.id)}
            onMouseLeave={() => setActiveTitle(null)}
          >
            <span className='flex w-[10%]'>{project.year}</span>
            <span className="second-span w-full">{project.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Section3
