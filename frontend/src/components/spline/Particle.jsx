import React from 'react';
import Spline from '@splinetool/react-spline';

export const Particle =()=> {
  return (
    <>
    <div className=" relative w-screen h-screen overflow-hidden" >
      <Spline style={{ width: '100%', height: '100%' }} scene="https://prod.spline.design/vVgJ3n2ye1FnHPU2/scene.splinecode"/>
    </div>
    </>
  );
}
