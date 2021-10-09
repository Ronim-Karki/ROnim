import React from 'react';
import { useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import ColorMap from '../../img/Moon.jpg';
import displacementMap from '../../img/displacement-map.jpg';
import { TextureLoader } from 'three';
export default function Earth(props) {
  const [color_Map, dis_Map] = useLoader(TextureLoader, [
    ColorMap,
    displacementMap,
  ]);
  return (
    <>
      <ambientLight intensity={1} />
      {/* <directionalLight intensity={1} /> */}
      {/* <pointLight color={'yellow'} position={[5, 0, 5]} intensity={1.2} /> */}
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshPhongMaterial displacementMap={dis_Map} />
        {/* <meshStandardMaterial moon={moon} /> */}
        <meshStandardMaterial map={color_Map} />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
}
