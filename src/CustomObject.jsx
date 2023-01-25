import * as Three from 'three'
import { useEffect, useRef, useMemo } from 'react'

export default function CustomObject()
{
    const geometry = useRef()
    

    const verticesCount = 10 * 3
    

    const positions = useMemo(() =>
    {
        const positions = new Float32Array(verticesCount * 3)

        for(let i = 0; i < verticesCount * 3; i++)
        {
            positions[i] = (Math.random() -0.5) * 3
        }
        return positions
    }, [])

    useEffect(() => 
    {
        geometry.current.computeVertexNormals()
    }, [])

    return <mesh>
        <bufferGeometry ref={ geometry }>
            <bufferAttribute 
                attach="attributes-position"
                count={ verticesCount }
                itemSize={ 3 }
                array={ positions }
            />
        </bufferGeometry>
        <meshStandardMaterial color= 'red' side={ Three.DoubleSide } />
    </mesh>
}