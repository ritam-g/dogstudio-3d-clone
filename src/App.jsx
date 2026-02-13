import { Suspense } from 'react'
import './App.css'
import Dog from './components/Dog'
import { Canvas } from '@react-three/fiber'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section5 from './components/Section5'
import Footer from './components/Footer'
import Loader from './components/Loader'
import CanvasErrorBoundary from './components/CanvasErrorBoundary'
import { getDeviceQuality } from './utils/deviceDetection'
import { TransitionProvider } from './hooks/useTransitionStore'
import Nav from './components/Nav'

function App() {
  const deviceQuality = getDeviceQuality();

  function sound() {
    const audio = new Audio('/sound/wolf.mp3')
    audio.play().catch(err => {
      console.log("Audio play failed:", err)
    })
  }

  return (
    <TransitionProvider>
      <main
        onClick={() => sound()}
        className='w-screen bg-black lg:pt-14 text-white'
      >
        <div className="images">
          <img id="img-tomorrowland" src="/tommorowland.png" alt="Tomorrowland" />
          <img id="img-phone" src="/phone.png" alt="Phone" />
          <img id="img-opera" src="/opera.png" alt="Opera" />
          <img id="img-navy-pier" src="/navy-pier.png" alt="Navy Pier" />
          <img id="img-msi-chicago" src="/msi-chicago.png" alt="MSI Chicago" />
          <img id="img-kikk" src="/kikk.png" alt="KIKK Festival" />
          <img id="img-kennedy" src="/kennedy.png" alt="Kennedy Center" />
        </div>

        <CanvasErrorBoundary>
          <Canvas
            id='canvas-ele'
            dpr={deviceQuality.dpr}
            performance={{ min: 0.5 }}
            style={{
              height: "100vh",
              width: "100%",
              overflow: "auto",
              position: "fixed",
              overflowX: "hidden",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          >
            <Suspense fallback={<Loader />}>
              <Dog quality={deviceQuality.quality} />
            </Suspense>
          </Canvas>
        </CanvasErrorBoundary>

        <Section1 />
        <Section2 />
        <Section3 />
        <Section5 />
        <Footer />
      </main>
    </TransitionProvider>
  )
}

export default App
