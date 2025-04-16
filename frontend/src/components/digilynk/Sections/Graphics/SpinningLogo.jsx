// components/creedCreation/SpinningLogo.jsx
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Color Variables - Aesthetic palette
const COLORS = [
    "#9d4edd", // Purple
    "#3a86ff", // Blue
    "#00b4d8", // Teal
    "#ff70a6", // Pink
    "#b388eb"  // Lavender
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

    // Define torus configuration
    const torusConfigs = [
        {
            rotation: [0, 0, 0],          // XY plane
            colorIndices: [0, 1],         // Purple to Blue
            phaseOffset: 0,
            amplitude: 0.15
        },
        {
            rotation: [Math.PI / 2.1, 0, 0], // YZ plane
            colorIndices: [1, 2],          // Blue to Teal
            phaseOffset: 2.1,
            amplitude: 0.1
        },
        {
            rotation: [0, Math.PI / 2.1, 0], // XZ plane
            colorIndices: [3, 4],          // Pink to Lavender
            phaseOffset: 4.2,
            amplitude: 0.12
        }
    ];

    return (
        <>
            {/* Environment lighting */}
            <ambientLight intensity={0.3} />
            <spotLight position={[10, 10, 10]} intensity={0.8} angle={0.3} penumbra={1} />

            {/* Accent lighting for depth and color */}
            <pointLight position={[-5, 5, 5]} intensity={0.6} color={COLORS[0]} />
            <pointLight position={[5, -5, 5]} intensity={0.6} color={COLORS[2]} />

            <group ref={groupRef}>
                {/* Generate toruses using the loop */}
                {torusConfigs.map((config, index) => (
                    <FlowingTorus
                        key={index}
                        rotation={config.rotation}
                        colorA={COLORS[config.colorIndices[0]]}
                        colorB={COLORS[config.colorIndices[1]]}
                        phaseOffset={config.phaseOffset}
                        amplitude={config.amplitude}
                    />
                ))}
            </group>

            <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={1.2}
                enableDamping
                dampingFactor={0.05}
            />
        </>
    );
}

function FlowingTorus({ rotation, colorA, colorB, phaseOffset = 0, amplitude = 0.15 }) {
    const meshRef = React.useRef();

    // Use physical material
    const material = React.useMemo(() => {
        return new THREE.MeshPhysicalMaterial({
            color: colorA,
            transmission: 0.6,
            thickness: 0.5,
            roughness: 0.1,
            metalness: 0.3,
            clearcoat: 1,
            clearcoatRoughness: 0.1,
            envMapIntensity: 1.5,
            attenuationColor: new THREE.Color(colorB),
            attenuationDistance: 0.5,
            transparent: true,
            opacity: 0.85
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
        <mesh ref={meshRef} rotation={rotation} material={material}>
            <torusGeometry args={[2, 0.4, 128, 64]} />
        </mesh>
    );
}

// Main component
function SpinningLogo() {
    return (
        <Canvas
            camera={{ position: [0, 0, 8], fov: 40 }}
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

export default SpinningLogo;






// // components/creedCreation/SpinningLogo.jsx
// import React from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import * as THREE from "three";

// // Color Variables - Aesthetic palette with gradients
// const COLORS = {
//     purple: "#9d4edd",
//     blue: "#3a86ff",
//     pink: "#ff70a6",
//     teal: "#00b4d8",
//     lavender: "#b388eb"
// };

// // Component that needs to use hooks INSIDE the Canvas
// function Scene() {
//     // Group ref for the entire scene
//     const groupRef = React.useRef();

//     useFrame((state) => {
//         // Subtle overall movement for the entire group
//         const t = state.clock.getElapsedTime() * 0.2;
//         groupRef.current.rotation.x = Math.sin(t) * 0.1;
//         groupRef.current.rotation.y = Math.cos(t) * 0.1;
//     });

//     return (
//         <>
//             {/* Environment lighting */}
//             <ambientLight intensity={0.3} />
//             <spotLight position={[10, 10, 10]} intensity={0.8} angle={0.3} penumbra={1} />

//             {/* Accent lighting for depth and color */}
//             <pointLight position={[-5, 5, 5]} intensity={0.6} color={COLORS.purple} />
//             <pointLight position={[5, -5, 5]} intensity={0.6} color={COLORS.teal} />

//             <group ref={groupRef}>
//                 {/* First torus - XY plane with purple-blue gradient */}
//                 <FlowingTorus
//                     rotation={[0, 0, 0]}
//                     colorA={COLORS.purple}
//                     colorB={COLORS.blue}
//                     phaseOffset={0}
//                 />

//                 {/* Second torus - YZ plane with blue-teal gradient */}
//                 <FlowingTorus
//                     rotation={[Math.PI / 2.1, 0, 0]}
//                     colorA={COLORS.blue}
//                     colorB={COLORS.teal}
//                     phaseOffset={2.1}
//                     amplitude={0.1}
//                 />

//                 {/* Third torus - XZ plane with pink-lavender gradient */}
//                 <FlowingTorus
//                     rotation={[0, Math.PI / 2.1, 0]}
//                     colorA={COLORS.pink}
//                     colorB={COLORS.lavender}
//                     phaseOffset={4.2}
//                     amplitude={0.12}
//                 />
//             </group>

//             <OrbitControls
//                 enableZoom={false}
//                 autoRotate
//                 autoRotateSpeed={5}
//                 enableDamping
//                 dampingFactor={0.05}
//             />
//         </>
//     );
// }

// function FlowingTorus({ rotation, colorA, colorB, phaseOffset = 0, amplitude = 0.15 }) {
//     const meshRef = React.useRef();

//     // Use shader material
//     const material = React.useMemo(() => {
//         return new THREE.MeshPhysicalMaterial({
//             color: colorA,
//             transmission: 0.6,
//             thickness: 0.5,
//             roughness: 0.1,
//             metalness: 0.3,
//             clearcoat: 1,
//             clearcoatRoughness: 0.1,
//             envMapIntensity: 1.5,
//             attenuationColor: new THREE.Color(colorB),
//             attenuationDistance: 0.5,
//             transparent: true,
//             opacity: 0.85
//         });
//     }, [colorA, colorB]);

//     useFrame((state) => {
//         // Animate rotation
//         meshRef.current.rotation.z += 0.001;

//         // Shift color based on time
//         const t = state.clock.getElapsedTime() + phaseOffset;
//         const colorValue = Math.sin(t * 0.3) * 0.5 + 0.5;
//         meshRef.current.material.color.set(
//             new THREE.Color(colorA).lerp(new THREE.Color(colorB), colorValue)
//         );

//         // Add subtle morphing motion
//         meshRef.current.scale.x = 1 + Math.sin(t * 0.5) * amplitude;
//         meshRef.current.scale.y = 1 + Math.sin(t * 0.4) * amplitude;
//     });

//     return (
//         <mesh ref={meshRef} rotation={rotation} material={material}>
//             <torusGeometry args={[2, 0.4, 128, 64]} />
//         </mesh>
//     );
// }

// // The main component that doesn't use hooks directly
// function SpinningLogo() {
//     return (
//         <Canvas
//             camera={{ position: [0, 0, 8], fov: 40 }}
//             style={{ height: "400px", width: "400px", background: "transparent" }}
//             gl={{
//                 alpha: true,
//                 antialias: true,
//                 preserveDrawingBuffer: true
//             }}
//         >
//             <color attach="background" args={["transparent"]} />
//             <Scene />
//         </Canvas>
//     );
// }

// export default SpinningLogo;













// // components/creedCreation/SpinningLogo.jsx
// import React, { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import * as THREE from "three";

// // Color Variables - Iridescent palette
// const PRIMARY_COLOR = "#8a2be2";    // Purple base
// const SECONDARY_COLOR = "#00bfff";  // Bright blue accent
// const TERTIARY_COLOR = "#ff1493";   // Pink highlight

// function IridescentShape({ rotation, color, offset = 0 }) {
//     const meshRef = useRef();

//     useFrame((state) => {
//         // Subtle individual movement for each ring
//         meshRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.2 + offset) * 0.1;
//     });

//     return (
//         <mesh ref={meshRef} rotation={rotation}>
//             <torusGeometry args={[2, 0.5, 96, 48]} />
//             <meshPhysicalMaterial
//                 color={color}
//                 transmission={0.6}
//                 thickness={0.5}
//                 roughness={0.1}
//                 metalness={0.3}
//                 clearcoat={1}
//                 clearcoatRoughness={0.1}
//                 envMapIntensity={1.5}
//                 iridescence={1.0}
//                 iridescenceIOR={1.5}
//                 iridescenceThicknessRange={[100, 1000]}
//                 attenuationColor={SECONDARY_COLOR}
//                 attenuationDistance={0.5}
//             />
//         </mesh>
//     );
// }

// function SpinningLogo() {
//     return (
//         <Canvas
//             camera={{ position: [0, 0, 8], fov: 45 }}
//             style={{ height: "400px", width: "400px", background: "transparent" }}
//             gl={{ alpha: true }}
//         >
//             <color attach="background" args={["transparent"]} />

//             {/* Lighting setup for the glass effect */}
//             <ambientLight intensity={0.3} />
//             <spotLight position={[10, 10, 10]} intensity={1} angle={0.3} penumbra={1} />
//             <pointLight position={[-10, -10, -10]} intensity={0.5} color={TERTIARY_COLOR} />
//             <pointLight position={[5, 5, 5]} intensity={0.8} color={SECONDARY_COLOR} />

//             {/* Colorful rim lighting */}
//             <pointLight position={[0, 3, 0]} intensity={1.2} color={PRIMARY_COLOR} />
//             <pointLight position={[3, 0, 3]} intensity={0.8} color={TERTIARY_COLOR} />

//             <group>
//                 {/* First torus - default orientation (XY plane) */}
//                 <IridescentShape
//                     rotation={[0, 0, 0]}
//                     color={PRIMARY_COLOR}
//                     offset={0}
//                 />

//                 {/* Second torus - rotated 90° around X axis (YZ plane) */}
//                 <IridescentShape
//                     rotation={[Math.PI / 2, 0, 0]}
//                     color={SECONDARY_COLOR}
//                     offset={Math.PI / 3}
//                 />

//                 {/* Third torus - rotated 90° around Y axis (XZ plane) */}
//                 <IridescentShape
//                     rotation={[0, Math.PI / 2, 0]}
//                     color={TERTIARY_COLOR}
//                     offset={Math.PI / 1.5}
//                 />
//             </group>

//             <OrbitControls
//                 enableZoom={false}
//                 autoRotate
//                 autoRotateSpeed={1.5}
//             />
//         </Canvas>
//     );
// }

// export default SpinningLogo;












// // components/creedCreation/SpinningLogo.jsx
// import React, { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import * as THREE from "three";

// // Color Variables - Iridescent palette
// const PRIMARY_COLOR = "#8a2be2";  // Purple base
// const SECONDARY_COLOR = "#00bfff"; // Bright blue accent
// const HIGHLIGHT_COLOR = "#ff1493"; // Pink highlight

// function IridescentShape() {
//     const meshRef = useRef();

//     useFrame((state) => {
//         // Subtle movement even with OrbitControls
//         meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
//     });

//     return (
//         <mesh ref={meshRef}>
//             {/* This geometry better matches the reference image's twisted torus look */}
//             <torusGeometry args={[2, 0.6, 128, 64]} />
//             <meshPhysicalMaterial
//                 color={PRIMARY_COLOR}
//                 transmission={0.6}  // Makes it transparent/glassy
//                 thickness={0.5}     // Glass thickness
//                 roughness={0.1}     // Very smooth surface
//                 metalness={0.3}     // Slightly metallic
//                 clearcoat={1}       // High gloss coating
//                 clearcoatRoughness={0.1}
//                 envMapIntensity={1.5}
//                 iridescence={1.0}   // Strong iridescent effect
//                 iridescenceIOR={1.5}
//                 iridescenceThicknessRange={[100, 1000]}
//                 attenuationColor={SECONDARY_COLOR}
//                 attenuationDistance={0.5}
//             />
//         </mesh>
//     );
// }

// function SpinningLogo() {
//     return (
//         <Canvas
//             camera={{ position: [0, 0, 7], fov: 45 }}
//             style={{ height: "400px", width: "400px", background: "transparent" }}
//             gl={{ alpha: true }}  // Ensures transparent background
//         >
//             {/* Environment lighting for reflections */}
//             <color attach="background" args={["transparent"]} />

//             {/* Lighting setup for the glass effect */}
//             <ambientLight intensity={0.3} />
//             <spotLight position={[10, 10, 10]} intensity={1} angle={0.3} penumbra={1} />
//             <pointLight position={[-10, -10, -10]} intensity={0.5} color={HIGHLIGHT_COLOR} />
//             <pointLight position={[5, 5, 5]} intensity={0.8} color={SECONDARY_COLOR} />

//             {/* Colorful rim lighting */}
//             <pointLight position={[0, 3, 0]} intensity={1.2} color={PRIMARY_COLOR} />
//             <pointLight position={[3, 0, 3]} intensity={0.8} color={HIGHLIGHT_COLOR} />

//             <OrbitControls
//                 enableZoom={false}
//                 autoRotate
//                 autoRotateSpeed={2}
//             />
//             <IridescentShape />
//         </Canvas>
//     );
// }

// export default SpinningLogo;