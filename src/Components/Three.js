import { React, Suspense } from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import Earth from './Earth';

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  opacity: 0.5;

  filter: brigthness(200);
`;

const Three = () => {
  return (
    <CanvasContainer>
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
};
export default Three;
