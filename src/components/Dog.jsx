import { Canvas,useThree } from '@react-three/fiber'
import React, { useEffect } from 'react'
import { log } from 'three'
import { OrbitControls } from '@react-three/drei'
function Dog() {
    const {camera}=useThree()
    useEffect(() => {
      console.log(camera.position);
      
    }, [camera])
    
  return (
    <>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshBasicMaterial color="red" />
      </mesh>
      <OrbitControls/>
    </>
  )
}

export default Dog
