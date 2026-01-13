import React from 'react'

function Section5() {
  return (
    <section className="section-5 w-full relative z-0">
  
  {/* BIG BACKGROUND TEXT */}
  <div className="
    text-6xl 
    p-[4rem] 
    font-serif 
    pl-[6rem]
    relative 
    z-0
    pointer-events-none
    opacity-80
  ">
    <a href="#">We’re crafting</a><br />
    <a href="#">emotional</a><br />
    <a href="#">experiences aimed</a><br />
    <a href="#">at improving</a><br />
    <a href="#">results</a>
  </div>

  {/* PARAGRAPH CONTENT */}
  <div className="
    flex gap-4 
    opacity-50 
    pr-[8rem] 
    relative 
    z-0
  ">
    <div className="w-[25%]"></div>
    <div className="w-[25%]"></div>

    <div className="w-[25%]">
      <p>
        Dogstudio is a design &amp; technology firm working globally from our
        offices based in Belgium and Chicago. Our strong focus on producing
        high quality &amp; emotional brandings, digital products and
        experiences became a signature.
      </p>
    </div>

    <div className="w-[25%]">
      <p>
        We’re passionate about moving people and solving problems for the
        likes of Microsoft, The Museum of Science And Industry Of Chicago,
        The Kennedy Center of Washington, Dragone, Quanta Magazine, and many
        more.
      </p>
    </div>
  </div>

</section>

  )
}

export default Section5
