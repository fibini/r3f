import { useThree, extend, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import CustomObject from './CustomObject.jsx'

extend({OrbitControls})

export default function Experience()
{
    const {camera, gl} = useThree()
    const group = useRef()

    useFrame((state, delta) =>
    {
        // group.current.rotation.y += delta
    })

    return <>

        <orbitControls args={[ camera, gl.domElement ]} />

        <directionalLight position={[1, 2, 3]} intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <group ref={ group }>
            <mesh rotation-y={ Math.PI * 0.25 } position-x={ 2 } scale={ 1.5 }>
                <boxGeometry scale={ 1.5 }  />
                <meshStandardMaterial color="blue"/>
            </mesh>

            <mesh position-x={ -2 } >
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>
        </group>

        <mesh position={ -1 } rotation-x={ -Math.PI * 0.5} scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

        <CustomObject />
    </>
}