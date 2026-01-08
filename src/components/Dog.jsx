import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

function Dog() {
  // Load the 3D model (this already contains geometry + materials)
  const model = useGLTF('/models/dog.drc.glb')

  // Load the normal map image (adds surface detail, not color)
  const normalMap = useTexture('/dog_normals.jpg')

  // Access the camera from the Three.js scene
  const { camera } = useThree()

  // Move the camera slightly forward so the model is visible
  camera.position.z = 1.5

  // Go through every object inside the 3D model
  model.scene.traverse((child) => {
    // Check:
    // 1. Object must be a mesh (geometry + material)
    // 2. Object name must start with "dog"
    if (
      child.isMesh &&
      child.name.toLowerCase().startsWith('dog')
    ) {
      // Set a base color so the model is visible
      child.material.color.set('#aaaaaa')

      // Add normal map to create surface details (bumps, depth)
      child.material.normalMap = normalMap
    }
  })

  return (
    <>
      {/* Render the 3D model in the scene */}
      <primitive
        object={model.scene}
        scale={2}                      // Resize the model
        position={[0.5, -1.1, 0]}      // Move the model in the scene
        rotation={[0, Math.PI / 2.9, 0]} // Rotate the model
      />

      {/* Mouse controls: rotate / zoom the model */}
      <OrbitControls />

      {/* Light that softly lights everything */}
      <ambientLight intensity={0.6} />

      {/* Light that creates direction, depth, and highlights */}
      <directionalLight position={[5, 5, 5]} />
    </>
  )
}

export default Dog
