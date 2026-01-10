import { useState } from 'react'

import './App.css'
import Dog from './components/Dog'
import { Canvas } from '@react-three/fiber'
import Section1 from './components/Section1'

function App() {

  return (
    <>
    <main className='
    w-screen overflow-y-scroll o bg-gray-600 
    lg:pt-14
    '>
    <Canvas
     style={{
      height:"100vh",
      width:"100%",
      overflow:"auto",
      position:"fixed",
      overflowX:"hidden",
      top:0,
      left:0,
      zIndex:1,
      backgroundImage:`url(/background-l.png)`,
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover"
    }}
    >
      <Dog/>
    </Canvas>
    <Section1 />
    <section id='section-2'></section>
    <section id='section-3'></section>
    
    
    </main>
    </>
  )
}

export default App
