
'use client'
import { OrbitControls, useGLTF } from '@react-three/drei'
import React, { Suspense, useRef } from 'react'
import { Html, useProgress } from "@react-three/drei";
import { Canvas, useFrame } from '@react-three/fiber';

export const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          marginTop: 40,
          fontWeight: 800,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export const Earth = () => {
  const earth = useGLTF('/planet/scene.gltf')
 const earthref=  useRef(null)
 useFrame(()=>{
    if(earthref.current){
        earthref.current.rotation.y+=0.001
    }
 })
  return (
    <primitive  ref={earthref} object={earth.scene} scale={4.2} position-y={0}  />

  )
}
const EarhCanvas = () => {
  return (
    <div className='absolute top-36 -end-96 w-full  h-[90vh] z-0'> {/* 👈 Full screen height */}
   
           <Canvas
             shadows
             frameloop="always"
             dpr={[1, 2]}
             gl={{ preserveDrawingBuffer: true }}
             camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
           >
             <Suspense fallback={<Loader />}>
               <OrbitControls
                //  autoRotate
                 enableZoom={false}
                 enablePan={false}
                 maxPolarAngle={Math.PI / 2}
                 minPolarAngle={0}
               />
               <Earth />
             </Suspense>
           </Canvas>
         </div>
  )
}

export default EarhCanvas