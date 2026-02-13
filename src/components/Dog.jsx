import { OrbitControls, useGLTF, useTexture, useAnimations } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef, useState, useMemo } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTransitionContext } from '../hooks/useTransitionStore'

function Dog({ quality = 'high' }) {
  //! PLUGIN
  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(ScrollTrigger)

  const { activeTitle } = useTransitionContext()

  // Fade-in animation state
  const [loaded, setLoaded] = useState(false);

  // Load the 3D model
  const model = useGLTF('/models/dog.drc.glb')
  const { actions } = useAnimations(model.animations, model.scene)

  useEffect(() => {
    if (actions && actions["Take 001"]) {
      actions["Take 001"].play()
    }
  }, [actions])

  const [normalMap] = (useTexture(["/dog_normals.jpg", "/matcap/mat-2.png", "/branches_normals.jpeg"])).map((texture => {
    texture.flipY = false
    texture.colorSpace = THREE.SRGBColorSpace
    return texture
  }))

  const [branchNormalMap] = (useTexture(["/branches_normals.jpeg"])).map(texture => {
    texture.colorSpace = THREE.SRGBColorSpace
    return texture
  })

  const [branchDiffuseMap] = (useTexture(["/branches_diffuse.jpeg"])).map(texture => {
    texture.colorSpace = THREE.SRGBColorSpace
    return texture
  })

  // Load all matcaps
  const matcaps = useTexture([
    "/matcap/mat-1.png", "/matcap/mat-2.png", "/matcap/mat-3.png", "/matcap/mat-4.png",
    "/matcap/mat-5.png", "/matcap/mat-6.png", "/matcap/mat-7.png", "/matcap/mat-8.png",
    "/matcap/mat-9.png", "/matcap/mat-10.png", "/matcap/mat-11.png", "/matcap/mat-12.png",
    "/matcap/mat-13.png", "/matcap/mat-14.png", "/matcap/mat-15.png", "/matcap/mat-16.png",
    "/matcap/mat-17.png", "/matcap/mat-18.png", "/matcap/mat-19.png", "/matcap/mat-20.png"
  ]).map(texture => {
    texture.colorSpace = THREE.SRGBColorSpace
    return texture
  })

  const [
    _mat1, mat2, _mat3, _mat4, _mat5, _mat6, _mat7, mat8, mat9, mat10,
    _mat11, mat12, mat13, _mat14, _mat15, _mat16, _mat17, _mat18, mat19, _mat20
  ] = matcaps

  // Mapping of project IDs to matcaps
  const matcapMapping = useMemo(() => ({
    'tomorrowland': mat19,
    'navy-pier': mat8,
    'msi-chicago': mat9,
    'phone': mat12,
    'kikk': mat10,
    'kennedy': mat8,
    'opera': mat13,
    'default': mat2
  }), [mat19, mat8, mat9, mat12, mat10, mat13, mat2])

  const material = useRef({
    uMatcap1: { value: mat19 },
    uMatcap2: { value: mat2 },
    uProgress: { value: 1.5 }
  })

  function onBeforeCompile(shader) {
    shader.uniforms.uMatcapTexture1 = material.current.uMatcap1
    shader.uniforms.uMatcapTexture2 = material.current.uMatcap2
    shader.uniforms.uProgress = material.current.uProgress

    shader.fragmentShader = shader.fragmentShader.replace(
      "void main() {",
      `
        uniform sampler2D uMatcapTexture1;
        uniform sampler2D uMatcapTexture2;
        uniform float uProgress;
        void main() {
        `
    )

    shader.fragmentShader = shader.fragmentShader.replace(
      "vec4 matcapColor = texture2D( matcap, uv );",
      `
          vec4 matcapColor1 = texture2D( uMatcapTexture1, uv );
          vec4 matcapColor2 = texture2D( uMatcapTexture2, uv );
          float transitionFactor  = 0.2;
          float progress = smoothstep(uProgress - transitionFactor, uProgress, (vViewPosition.x + vViewPosition.y) * 0.5 + 0.5);
          vec4 matcapColor = mix(matcapColor2, matcapColor1, progress );
        `
    )
  }

  useThree(({ camera, gl }) => {
    camera.position.z = 0.7
    gl.toneMapping = THREE.ReinhardToneMapping
    gl.outputColorSpace = THREE.SRGBColorSpace
  })

  // Optimized material creation
  const dogMaterial = useMemo(() => {
    const mat = new THREE.MeshMatcapMaterial({
      normalMap: normalMap,
      matcap: mat2,
      normalScale: new THREE.Vector2(1.2, 1.2)
    })
    mat.onBeforeCompile = onBeforeCompile
    return mat
  }, [normalMap, mat2])

  const branchMaterial = useMemo(() => {
    return new THREE.MeshMatcapMaterial({
      normalMap: branchNormalMap,
      matcap: branchDiffuseMap
    })
  }, [branchNormalMap, branchDiffuseMap])

  // Apply materials
  useEffect(() => {
    model.scene.traverse((child) => {
      if (child.isMesh) {
        if (child.name.toLowerCase().startsWith('dog')) {
          child.material = dogMaterial
        } else {
          child.material = branchMaterial
        }
      }
    })
  }, [model, dogMaterial, branchMaterial])

  const DogModel = useRef(model)

  // Transition Effect logic (Decoupled from DOM)
  useEffect(() => {
    const targetMatcap = matcapMapping[activeTitle] || matcapMapping['default']

    material.current.uMatcap1.value = targetMatcap
    gsap.to(material.current.uProgress, {
      value: 0.0,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        material.current.uMatcap2.value = targetMatcap
        material.current.uProgress.value = 1.5
      }
    })
  }, [activeTitle, matcapMapping])

  // GSAP Scroll Animations
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-1",
        endTrigger: "#section-5",
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    })
    tl
      .to(DogModel.current.scene.position, {
        z: "-=0.9",
        y: "+=0.25"
      })
      .to(DogModel.current.scene.rotation, {
        x: `+=${Math.PI / 30}`,
      }, "snd")
      .to(DogModel.current.scene.position, {
        z: "-=0.9"
      }, "snd")
      .to(DogModel.current.scene.rotation, {
        x: `+=${Math.PI / 18}`,
      })
      .to(DogModel.current.scene.rotation, {
        y: `-=${Math.PI}`,
      }, "four")
      .to(DogModel.current.scene.position, {
        x: "-=0.8",
        z: "+=1",
        y: "+=0.1"
      }, "four")
  }, [])

  // FPS monitoring (dev mode only)
  useFrame((state, delta) => {
    if (import.meta.env.DEV && Math.random() < 0.01) {
      const currentFps = Math.round(1 / delta);
      if (currentFps < 30) {
        console.warn('Low FPS detected:', currentFps);
      }
    }
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const scale = quality === 'low' ? 1.5 : 2;

  return (
    <group
      aria-label="Interactive 3D Dog Model"
      style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.6s ease-in' }}
    >
      <primitive
        object={model.scene}
        scale={scale}
        position={[0.4, -1.2, 0]}
        rotation={[0, Math.PI / 6, 0]}
      />
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} />
    </group>
  )
}

export default Dog
