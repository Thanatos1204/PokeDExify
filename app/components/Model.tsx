'use client'
import React, { useRef, useEffect, useState } from 'react';
import { useLoader } from 'react-three-fiber';
import { useThree } from 'react-three-fiber'; 
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Model = () => {
  const modelRef = useRef();
  const [modelLoaded, setModelLoaded] = useState(false); // State to track if model is loaded
  const gltf = useLoader(GLTFLoader, '/scene.gltf', (loader) => {
    loader.setPath('/pokedex/'); // Set the path to where your model and resources are located
  }, (xhr) => {}, (error) => {}, () => {setModelLoaded(true)}); // Track when model is loaded

  const { camera, gl } = useThree();
useEffect(() => {
  const controls = new OrbitControls(camera, gl.domElement);
  controls.enableDamping = true;
  controls.dampingFactor =  0.25;
  controls.enableZoom = true;
  return () => {
    controls.dispose();
  };
}, [camera, gl]);

  return <primitive ref={modelRef} object={gltf.scene} />;
};

export default Model;
