// components/creedCreation/AnimatedModel.jsx
import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

function Model({ url }) {
    const groupRef = React.useRef();
    const { scene, animations } = useGLTF(url);
    const { actions } = useAnimations(animations, groupRef);

    // Play all animations when component mounts
    React.useEffect(() => {
        if (actions) {
            Object.values(actions).forEach(action => action.play());
        }
    }, [actions]);

    // Add subtle floating animation
    useFrame((state) => {
        const t = state.clock.getElapsedTime() * 0.2;
        if (groupRef.current) {
            groupRef.current.position.y = Math.sin(t) * 0.1;
            groupRef.current.rotation.y += 0.005;
        }
    });

    return (
        <group ref={groupRef}>
            <primitive
                object={scene}
                scale={[2.5, 2.5, 2.5]} // Adjust scale as needed
                position={[0, -2.8, 0]}
            />
        </group>
    );
}

function Scene({ modelUrl }) {
    const cameraRef = React.useRef();

    // Make camera look at the model continuously
    useFrame((state) => {
        if (cameraRef.current) {
            cameraRef.current.lookAt(0, 0, 0); // Look at the center where the model is
        }
    });

    return (
        <>
            {/* Environment lighting - keeping your aesthetic */}
            <ambientLight intensity={1.5} />
            <spotLight position={[10, 10, 10]} intensity={10} color={"#0000FF"} angle={0.3} penumbra={1} />
            <pointLight position={[-5, 5, 5]} intensity={10} color="#0000FF" />
            <pointLight position={[5, -5, 5]} intensity={10} color="#0000FF" />

            <Suspense fallback={null}>
                <Model url={modelUrl} />
            </Suspense>

            {/* Disable OrbitControls since we want fixed camera */}
            <OrbitControls
                enableZoom={false}
                fov={50}
                autoRotate
                autoRotateSpeed={-10}
                enableDamping
                dampingFactor={0.05}
            />

            {/* Perspective camera that will always face the model */}
            <perspectiveCamera
                ref={cameraRef}
                position={[0, 0, 0]}
                fov={65}
                makeDefault
            />
        </>
    );
}

function AnimatedModel({ modelUrl = "frontend/src/assets/3dModels/cute_robot.glb" }) {
    return (
        <Canvas
            className=""
            style={{ height: "450px", width: "450px", background: "transparent" }}
            gl={{
                alpha: true,
                antialias: true,
                preserveDrawingBuffer: true
            }}
        >
            <color attach="background" args={["transparent"]} />
            <Scene modelUrl={modelUrl} />
        </Canvas>
    );
}

export default AnimatedModel;














// // components/creedCreation/AnimatedModel.jsx
// import React, { Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
// import * as THREE from "three";

// function Model({ url }) {
//     const groupRef = React.useRef();
//     const { scene, animations } = useGLTF(url);
//     const { actions } = useAnimations(animations, groupRef);

//     // Play all animations when component mounts
//     React.useEffect(() => {
//         if (actions) {
//             Object.values(actions).forEach(action => action.play());
//         }
//     }, [actions]);

//     // Add subtle floating animation
//     useFrame((state) => {
//         const t = state.clock.getElapsedTime() * 0.2;
//         if (groupRef.current) {
//             groupRef.current.position.y = Math.sin(t) * 0.1;
//             groupRef.current.rotation.y += 0.005;
//         }
//     });

//     return (
//         <group ref={groupRef}>
//             <primitive
//                 object={scene}
//                 scale={[1.5, 1.5, 1.5]} // Adjust scale as needed
//                 position={[0, 0, 0]}
//             />
//         </group>
//     );
// }

// function Scene({ modelUrl }) {
//     return (
//         <>
//             {/* Environment lighting - keeping your aesthetic */}
//             <ambientLight intensity={0.3} />
//             <spotLight position={[10, 10, 10]} intensity={0.8} angle={0.3} penumbra={1} />
//             <pointLight position={[-5, 5, 5]} intensity={0.6} color="#9d4edd" />
//             <pointLight position={[5, -5, 5]} intensity={0.6} color="#00b4d8" />

//             <Suspense fallback={null}>
//                 <Model url={modelUrl} />
//             </Suspense>

//             <OrbitControls
//                 enableZoom={false}
//                 autoRotate
//                 autoRotateSpeed={1.2}
//                 enableDamping
//                 dampingFactor={0.05}
//             />
//         </>
//     );
// }

// function AnimatedModel({ modelUrl = "frontend/src/assets/3dModels/cute_robot.glb" }) {
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
//             <Scene modelUrl={modelUrl} />
//         </Canvas>
//     );
// }

// export default AnimatedModel;