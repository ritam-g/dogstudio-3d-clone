import React from 'react'

function Section3() {
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

    <div data-img-title="tomorrowland" className="title text-lg flex items-center gap-[10rem]">
      <span className='flex w-[10%]'>Loading</span>
      <span className="second-span w-full">Tomorrowland</span>
    </div>

    <div data-img-title="navy-pier" className="title flex items-center gap-[10rem]">
      <span className='flex w-[10%]'>2018 – Today</span>
      <span className="second-span w-full">Navy Pier</span>
    </div>

    <div data-img-title="msi-chicago" className="title flex items-center gap-[10rem]">
      <span className='flex w-[10%]'>2015 – Today</span>
      <span className="second-span w-full">MSI Chicago</span>
    </div>

    <div data-img-title="phone" className="title flex items-center gap-[10rem]">
      <span className='flex w-[10%]'>2016</span>
      <span className="second-span w-full">This Was Louise’s Phone</span>
    </div>

    <div data-img-title="kikk" className="title flex items-center gap-[10rem]">
      <span className='flex w-[10%]'>2012 – Today</span>
      <span className="second-span w-full">KIKK Festival 2018</span>
    </div>

    <div data-img-title="kennedy" className="title flex items-center gap-[10rem]">
      <span className='flex w-[10%]'>2017</span>
      <span className="second-span w-full">The Kennedy Center</span>
    </div>

    <div data-img-title="opera" className=" title flex items-center gap-[10rem]">
      <span className='flex w-[10%]'>2016 – Ongoing</span>
      <span className="second-span w-full">Royal Opera Of Wallonia</span>
    </div>

  </div>
</section>

  )
}

export default Section3
