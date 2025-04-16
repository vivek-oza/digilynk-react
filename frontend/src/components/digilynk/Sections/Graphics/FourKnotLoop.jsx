// components/creedCreation/FourKnotLoop.jsx
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Color Variables - Simple blue palette
const COLORS = [
    "#0077b6", // Dark blue
    "#00b4d8", // Medium blue
    "#90e0ef", // Light blue
    "#caf0f8"  // Very light blue
];

// Component that contains the scene with all 3D elements
function Scene() {
    // Group ref for the entire scene
    const groupRef = React.useRef();

    useFrame((state) => {
        // Subtle overall movement for the entire group
        const t = state.clock.getElapsedTime() * 0.2;
        groupRef.current.rotation.x = Math.sin(t) * 0.1;
        groupRef.current.rotation.y = Math.cos(t) * 0.1;
    });

    // Define knot configuration - 4 knots with different parameters
    const knotConfigs = [
        // {
        //     position: [0, 0, 0],
        //     rotation: [0, 0, 0],
        //     colorIndices: [0, 1],         // Dark blue to Medium blue
        //     phaseOffset: 0,
        //     amplitude: 0.15,
        //     p: 2, q: 3 // p:q ratio determines knot type
        // },
        // {
        //     position: [0, 0, 0],
        //     rotation: [Math.PI / 4, 0, 0],
        //     colorIndices: [1, 2],         // Medium blue to Light blue
        //     phaseOffset: 1.5,
        //     amplitude: 0.12,
        //     p: 3, q: 4
        // },
        // {
        //     position: [0, 0, 0],
        //     rotation: [0, Math.PI / 4, 0],
        //     colorIndices: [2, 3],         // Light blue to Very light blue
        //     phaseOffset: 3.0,
        //     amplitude: 0.1,
        //     p: 3, q: 2
        // },
        {
            position: [0, 0, 0],
            rotation: [Math.PI / 4, Math.PI / 4, 0],
            colorIndices: [0, 3],         // Dark blue to Very light blue
            phaseOffset: 4.5,
            amplitude: 0.08,
            p: 4, q: 3
        }
    ];

    return (
        <>
            {/* Environment lighting */}
            <ambientLight intensity={0.4} />
            <spotLight position={[10, 10, 10]} intensity={0.7} angle={0.3} penumbra={1} />

            {/* Accent lighting for depth and color */}
            <pointLight position={[-5, 5, 5]} intensity={0.5} color={COLORS[0]} />
            <pointLight position={[5, -5, 5]} intensity={0.5} color={COLORS[2]} />

            <group ref={groupRef}>
                {/* Generate knots using the loop */}
                {knotConfigs.map((config, index) => (
                    <FlowingKnot
                        key={index}
                        position={config.position}
                        rotation={config.rotation}
                        colorA={COLORS[config.colorIndices[0]]}
                        colorB={COLORS[config.colorIndices[1]]}
                        phaseOffset={config.phaseOffset}
                        amplitude={config.amplitude}
                        p={config.p}
                        q={config.q}
                    />
                ))}
            </group>

            <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={1.0}
                enableDamping
                dampingFactor={0.05}
            />
        </>
    );
}

function FlowingKnot({ position, rotation, colorA, colorB, phaseOffset = 0, amplitude = 0.15, p = 2, q = 3 }) {
    const meshRef = React.useRef();

    // Use physical material
    // You can easily modify these material properties later
    const material = React.useMemo(() => {
        return new THREE.MeshPhysicalMaterial({
            color: colorA,
            transmission: 0.6,      // How much light passes through (0-1)
            thickness: 0.5,         // Thickness of the material
            roughness: 0.1,         // Surface roughness (0-1)
            metalness: 0.3,         // Metallic look (0-1)
            clearcoat: 1,           // Clear coat layer (0-1)
            clearcoatRoughness: 0.1, // Roughness of clear coat
            envMapIntensity: 1.5,   // Environment map intensity
            attenuationColor: new THREE.Color(colorB),  // Color for attenuation
            attenuationDistance: 0.5, // Distance for attenuation effect
            transparent: true,      // Enable transparency
            opacity: 0.85           // Overall opacity (0-1)
        });
    }, [colorA, colorB]);

    useFrame((state) => {
        // Animate rotation
        meshRef.current.rotation.z += 0.001;

        // Shift color based on time
        const t = state.clock.getElapsedTime() + phaseOffset;
        const colorValue = Math.sin(t * 0.3) * 0.5 + 0.5;
        meshRef.current.material.color.set(
            new THREE.Color(colorA).lerp(new THREE.Color(colorB), colorValue)
        );

        // Add subtle morphing motion
        meshRef.current.scale.x = 1 + Math.sin(t * 0.5) * amplitude;
        meshRef.current.scale.y = 1 + Math.sin(t * 0.4) * amplitude;
    });

    return (
        <mesh
            ref={meshRef}
            position={position}
            rotation={rotation}
            material={material}
        >
            {/* TorusKnot geometry: args = [radius, tube, tubularSegments, radialSegments, p, q] */}
            {/* p and q determine the knot type: p winds around the axis of the torus, q winds around the interior */}
            <torusKnotGeometry args={[1.5, 0.3, 128, 32, p, q]} />
        </mesh>
    );
}

// Main component
function FourKnotLoop() {
    return (
        <Canvas
            camera={{ position: [0, 0, 8], fov: 45 }}
            style={{ height: "400px", width: "400px", background: "transparent" }}
            gl={{
                alpha: true,
                antialias: true,
                preserveDrawingBuffer: true
            }}
        >
            <color attach="background" args={["transparent"]} />
            <Scene />
        </Canvas>
    );
}

export default FourKnotLoop;