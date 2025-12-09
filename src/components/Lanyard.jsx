// src/components/Lanyard.jsx — GUARANTEED VISIBLE
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Lanyard() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 12], fov: 40 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={2} />
        <Scene />
      </Canvas>
    </div>
  )
}

function Scene() {
  const cardRef = useRef()
  const strapRef = useRef()

  // TEMPORARY: Use a placeholder image so you SEE something instantly
  const texture = new THREE.TextureLoader().load(
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=face'
  )

  useFrame((state) => {
    if (cardRef.current) {
      cardRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.4
      cardRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.3
    }
    if (strapRef.current) {
      strapRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.5) * 0.15
    }
  })

  return (
    <>
      {/* Purple strap */}
      <group ref={strapRef} position={[0, 4, 0]}>
        <mesh>
          <cylinderGeometry args={[0.08, 0.08, 7]} />
          <meshStandardMaterial color="#8b5cf6" />
        </mesh>
      </group>

      {/* THE CARD — NOW BIG AND VISIBLE */}
      <group ref={cardRef} position={[0, 0, 0]}>
        {/* White background card */}
        <mesh>
          <planeGeometry args={[4, 5.6]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Your photo on top */}
        <mesh position={[0, 0, 0.01]}>
          <planeGeometry args={[3.8, 5.4]} />
          <meshStandardMaterial map={texture} />
        </mesh>

        {/* Metal clip */}
        <mesh position={[0, 2.6, 0.1]}>
          <boxGeometry args={[1.2, 0.5, 0.2]} />
          <meshStandardMaterial color="#94a3b8" metalness={1} roughness={0.1} />
        </mesh>

        {/* Name text (no font needed) */}
        <mesh position={[0, -2.1, 0.1]}>
          <planeGeometry args={[3, 0.6]} />
          <meshBasicMaterial color="#1e293b" />
        </mesh>
      </group>
    </>
  )
}