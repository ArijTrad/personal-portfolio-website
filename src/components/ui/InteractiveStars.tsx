// src/components/ui/InteractiveStars.tsx
"use client";

import { useEffect, useRef } from "react";
import * as THREE from 'three';

export default function InteractiveStars({ height = 800 }: { height?: number }) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    /* ---------- 1. SCENE SETUP ---------- */
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0000ff, 0.001);

    const camera = new THREE.PerspectiveCamera(
      58,
      window.innerWidth / height,
      100,
      2000
    );
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, height);
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.zIndex = "-1";

    mountRef.current.appendChild(renderer.domElement);

    /* ---------- 2. PARTICLES ---------- */
    const geometry = new THREE.BufferGeometry();
    const vertices: number[] = [];
    const size = 500;

    for (let i = 0; i < 20000; i++) {
      const x = (Math.random() * size + Math.random() * size) / 2 - size / 2;
      const y = (Math.random() * size + Math.random() * size) / 2 - size / 2;
      const z = (Math.random() * size + Math.random() * size) / 2 - size / 2;
      vertices.push(x, y, z);
    }
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

    const material = new THREE.PointsMaterial({ size: 0.5, color: 0xffffff });
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    /* ---------- 3. ANIMATION LOOP ---------- */
    const animate = () => {
      scene.rotation.x += -0.0003;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    /* ---------- 4. CLEANUP ---------- */
    const onResize = () => {
      renderer.setSize(window.innerWidth, height);
      camera.aspect = window.innerWidth / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      mountRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [height]);

  return <div ref={mountRef} className="absolute inset-0" />;
}