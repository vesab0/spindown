import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function SpinningD20() {
  const groupRef = useRef()
  const geo = useMemo(() => new THREE.IcosahedronGeometry(2.5, 0), [])
  const edgesGeo = useMemo(() => new THREE.EdgesGeometry(geo), [geo])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()
    groupRef.current.rotation.y = t * 0.9
    groupRef.current.rotation.x = Math.sin(t * 0.45) * 0.25
    groupRef.current.rotation.z = Math.sin(t * 0.35) * 0.12
    groupRef.current.position.y = Math.sin(t * 0.6) * 0.08
  })

  return (
    <group ref={groupRef}>
      <mesh geometry={geo}>
        <meshBasicMaterial color="#000000" side={THREE.FrontSide} />
      </mesh>
      <lineSegments geometry={edgesGeo}>
        <lineBasicMaterial color="#000000" />
      </lineSegments>
    </group>
  )
}

export default function DiceShowcase() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black">
      <div className="h-[80vh] w-full max-w-4xl">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
          <SpinningD20 />
        </Canvas>
      </div>
    </div>
  )
}
