import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function RockingD20() {
  const groupRef = useRef()
  const geo = useMemo(() => new THREE.IcosahedronGeometry(1.9, 0), [])
  const edgesGeo = useMemo(() => new THREE.EdgesGeometry(geo), [geo])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()
    groupRef.current.rotation.y = Math.sin(t * 2.4) * 0.5
    groupRef.current.rotation.x = Math.sin(t * 3.1 + 1) * 0.2
    groupRef.current.rotation.z = Math.sin(t * 3.7 + 2) * 0.16
    groupRef.current.position.y = Math.sin(t * 4.2) * 0.06
  })

  return (
    <group ref={groupRef}>
      <mesh geometry={geo}>
        <meshPhongMaterial
          color="#D93A44"
          specular="#ff9999"
          shininess={50}
          side={THREE.FrontSide}
        />
      </mesh>
      <lineSegments geometry={edgesGeo}>
        <lineBasicMaterial color="#a8d8f0" linewidth={1.5} />
      </lineSegments>
    </group>
  )
}

export default function RockingDieCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 6, 5]} intensity={1.4} />
      <directionalLight position={[-4, -3, 2]} intensity={0.3} color="#ffcccc" />
      <RockingD20 />
    </Canvas>
  )
}