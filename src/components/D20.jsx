import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function D20({ mouseDelta, spinKick, onSpinSettle }) {
  const groupRef = useRef()
  const rot = useRef({ x: -2.58, y: -1.58 })
  const mouseVel = useRef({ x: 0, y: 0 })
  const kickVel = useRef({ x: 0, y: 0 })
  const spinning = useRef(false)

  const geo = useMemo(() => new THREE.IcosahedronGeometry(1.9, 0), [])
  const edgesGeo = useMemo(() => new THREE.EdgesGeometry(geo), [geo])

  useFrame(() => {
    if (!groupRef.current) return

    // Button kick — slow damp so it keeps spinning
    if (spinKick.current) {
      kickVel.current.x += spinKick.current.x
      kickVel.current.y += spinKick.current.y
      spinKick.current = null
      spinning.current = true
    }
    kickVel.current.x *= 0.93
    kickVel.current.y *= 0.93

    // Fire once when a button-triggered spin has settled
    if (spinning.current) {
      const speed = Math.abs(kickVel.current.x) + Math.abs(kickVel.current.y)
      if (speed < 0.05) {
        spinning.current = false
        onSpinSettle?.()
      }
    }

    // Mouse delta — fast damp for snappy feel
    const sensitivity = 2
    mouseVel.current.y += mouseDelta.current.x * sensitivity
    mouseVel.current.x += mouseDelta.current.y * sensitivity
    mouseDelta.current.x = 0
    mouseDelta.current.y = 0
    mouseVel.current.x *= 0.3
    mouseVel.current.y *= 0.3

    rot.current.x += kickVel.current.x + mouseVel.current.x
    rot.current.y += kickVel.current.y + mouseVel.current.y

    groupRef.current.rotation.x = rot.current.x
    groupRef.current.rotation.y = rot.current.y

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
