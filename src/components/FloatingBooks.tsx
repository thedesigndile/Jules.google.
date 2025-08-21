"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

// A single book component
function Book(props: JSX.IntrinsicElements['mesh']) {
  const mesh = useRef<THREE.Mesh>(null!);

  // Randomize the rotation speed
  const rotationSpeed = useMemo(() => (Math.random() - 0.5) * 0.5, []);

  // Animate the book
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * rotationSpeed;
      mesh.current.rotation.y += delta * rotationSpeed;
    }
  });

  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[0.7, 1, 0.1]} />
      <meshStandardMaterial color={props.color || 'orange'} />
    </mesh>
  );
}

// The main scene component
const FloatingBooksScene = () => {
  const books = useMemo(() => {
    const bookData = [];
    const bookColors = ['#ff6347', '#4682b4', '#3cb371', '#6a5acd', '#d2b48c', '#ff8c00'];
    for (let i = 0; i < 20; i++) {
      bookData.push({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
        ],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
        color: bookColors[i % bookColors.length],
      });
    }
    return bookData;
  }, []);

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Background stars */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      {/* Render all the books */}
      {books.map((book, i) => (
        <Book key={i} position={new THREE.Vector3(...book.position)} rotation={new THREE.Euler(...book.rotation)} color={book.color} />
      ))}
    </Canvas>
  );
};

export default FloatingBooksScene;
