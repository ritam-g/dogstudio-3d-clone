import { OrbitControls, useGLTF, useTexture,useAnimations } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Dog() {
  //! PLUGIN
  gsap.registerPlugin(useGSAP) 
  gsap.registerPlugin(ScrollTrigger) 
  // Load the 3D model (this already contains geometry + materials)
  const model = useGLTF('/models/dog.drc.glb')
  const{actions}=useAnimations(model.animations,model.scene)
  useEffect(()=>{
    actions["Take 001"].play()
  },[actions])


  const [normalMap,
    sampleMatCap,
  ]=(useTexture(["/dog_normals.jpg","/matcap/mat-2.png","/branches_diffuse.jpeg","/branches_normals.jpeg"])).map((texture=>{
    texture.flipY=false
    texture.colorSpace=THREE.SRGBColorSpace
    return texture
  }))

  const [branchMap,
    branchNormalMap]=(useTexture(["/branches_diffuse.jpeg","/branches_normals.jpeg"])).map(texture=>{
    texture.colorSpace=THREE.SRGBColorSpace
    return texture
    })

  // Access the camera from the Three.js scene
  useThree(({camera,scene,gl})=>{
    camera.position.z = 1
    gl.toneMapping = THREE.ReinhardToneMapping
    gl.outputColorSpace=THREE.SRGBColorSpace

  })

  // Move the camera slightly forward so the model is visible
  
  const dogMetarial=new THREE.MeshMatcapMaterial({
        normalMap:normalMap,
        matcap:sampleMatCap
      })

  const branchMatarial=new THREE.MeshMatcapMaterial({
    normalMap:branchNormalMap,
    map:branchMap
  })
  // Go through every object inside the 3D model
  model.scene.traverse((child) => {
    // Check:
    //! 1. Object must be a mesh (geometry + material)
    //! 2. Object name must start with "dog"
    if (
      child.isMesh &&
      child.name.toLowerCase().startsWith('dog')
    ) {

      child.material = dogMetarial
    }
    else{
      child.material=branchMatarial
    }
  })

  const DogModel=useRef(model)
  
  
  // GSAP ANIMATION 
  useGSAP(()=>{
    const tl=gsap.timeline({
      scrollTrigger:{
        trigger:"#section-1",
        endTrigger:"#section-3",
        start:"top top",
        end:"bottom bottom",
        markers:true,
        scrub:true
        
      }
    })
    tl
    .to(DogModel.current.scene.position,{
      z:"-=0.9",
      y:"+=0.25"
    }) 
    .to(DogModel.current.scene.rotation,{
      x: `+=${Math.PI/18}`
    })
    .to(DogModel.current.scene.rotation,{
      y:`-=${Math.PI}`,
    },"third")
    .to(DogModel.current.scene.position,{
      x:"-=0.8",
      z:"+=0.4",
      y:"+=0.1"
    },"third")
  },[])
  return (
    <>
      {/* Render the 3D model in the scene */}
      <primitive
        object={model.scene}
        scale={2}                      // Resize the model
        position={[0.5, -1.2, 0]}      // Move the model in the scene
        rotation={[0, Math.PI / 4, 0]} // Rotate the model
      />

      {/* Mouse controls: rotate / zoom the model */}
      {/* <OrbitControls /> */}

      {/* Light that softly lights everything */}
      <ambientLight intensity={0.6} />

      {/* Light that creates direction, depth, and highlights */}
      <directionalLight position={[5, 5, 5]} />
    </>
  )
}

export default Dog
