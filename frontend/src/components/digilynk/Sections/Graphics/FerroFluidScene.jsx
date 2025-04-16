// components/creedCreation/FerroFluidSphere.jsx
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const FerroFluidSphere = ({ isHovered, isClicked, mousePosition }) => {
    const sphereRef = useRef();
    const [clock] = useState(() => new THREE.Clock());
    const [colorMix, setColorMix] = useState(0);
    const [magnetField, setMagnetField] = useState({ x: 0, y: 0, strength: 0 });

    const shaderRef = useRef();
    const uniforms = {
        time: { value: 0 },
        distortion: { value: 0.05 },
        reactivity: { value: 1.0 },
        magnetField: { value: new THREE.Vector3(0, 0, 0) },
        color1: { value: new THREE.Color('#3b82f6') }, // Blue
        color2: { value: new THREE.Color('#10b981') }, // Green
        color3: { value: new THREE.Color('#06b6d4') }, // Cyan
        color4: { value: new THREE.Color('#8b5cf6') }, // Purple
        color5: { value: new THREE.Color('#ec4899') }, // Pink
        color6: { value: new THREE.Color('#ef4444') }, // Crimson/Red
        colorMix: { value: 0 },
    };

    useEffect(() => {
        if (mousePosition) {
            // Convert screen coordinates to 3D space influence
            setMagnetField({
                x: (mousePosition.x / window.innerWidth) * 2 - 1,
                y: -(mousePosition.y / window.innerHeight) * 2 + 1,
                strength: isClicked ? 2.0 : isHovered ? 1.0 : 0.2
            });
        }
    }, [mousePosition, isHovered, isClicked]);

    useFrame(() => {
        const time = clock.getElapsedTime();
        uniforms.time.value = time;
        
        // Faster color cycling
        setColorMix((prev) => (prev + 0.01) % 1);
        uniforms.colorMix.value = colorMix;
        
        if (sphereRef.current) {
            // Much more reactive distortion based on interaction
            const targetDistortion = isClicked ? 1.5 : isHovered ? 0.8 : 0.2;
            const targetReactivity = isClicked ? 3.0 : isHovered ? 2.0 : 1.0;
            
            sphereRef.current.material.uniforms.distortion.value = THREE.MathUtils.lerp(
                sphereRef.current.material.uniforms.distortion.value,
                targetDistortion,
                0.15
            );
            
            sphereRef.current.material.uniforms.reactivity.value = THREE.MathUtils.lerp(
                sphereRef.current.material.uniforms.reactivity.value,
                targetReactivity,
                0.15
            );
            
            // Update magnet field influence
            sphereRef.current.material.uniforms.magnetField.value.set(
                magnetField.x,
                magnetField.y,
                magnetField.strength
            );
            
            // Subtle pulsing
            sphereRef.current.scale.setScalar(1 + Math.sin(time * 1.5) * 0.08);
        }
    });

    return (
        <mesh ref={sphereRef}>
            <sphereGeometry args={[2, 192, 192]} />
            <shaderMaterial
                ref={shaderRef}
                uniforms={uniforms}
                vertexShader={`
                    uniform float time;
                    uniform float distortion;
                    uniform float reactivity;
                    uniform vec3 magnetField;
                    varying vec3 vNormal;
                    varying vec3 vPosition;
                    
                    // Simplex noise function for more organic movement
                    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
                    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
                    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
                    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
                    
                    float snoise(vec3 v) {
                        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
                        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
                        
                        // First corner
                        vec3 i  = floor(v + dot(v, C.yyy));
                        vec3 x0 = v - i + dot(i, C.xxx);
                        
                        // Other corners
                        vec3 g = step(x0.yzx, x0.xyz);
                        vec3 l = 1.0 - g;
                        vec3 i1 = min(g.xyz, l.zxy);
                        vec3 i2 = max(g.xyz, l.zxy);
                        
                        vec3 x1 = x0 - i1 + C.xxx;
                        vec3 x2 = x0 - i2 + C.yyy;
                        vec3 x3 = x0 - D.yyy;
                        
                        // Permutations
                        i = mod289(i);
                        vec4 p = permute(permute(permute(
                                i.z + vec4(0.0, i1.z, i2.z, 1.0))
                            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
                            
                        // Gradients
                        float n_ = 0.142857142857;
                        vec3 ns = n_ * D.wyz - D.xzx;
                        
                        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
                        
                        vec4 x_ = floor(j * ns.z);
                        vec4 y_ = floor(j - 7.0 * x_);
                        
                        vec4 x = x_ *ns.x + ns.yyyy;
                        vec4 y = y_ *ns.x + ns.yyyy;
                        vec4 h = 1.0 - abs(x) - abs(y);
                        
                        vec4 b0 = vec4(x.xy, y.xy);
                        vec4 b1 = vec4(x.zw, y.zw);
                        
                        vec4 s0 = floor(b0)*2.0 + 1.0;
                        vec4 s1 = floor(b1)*2.0 + 1.0;
                        vec4 sh = -step(h, vec4(0.0));
                        
                        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
                        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
                        
                        vec3 p0 = vec3(a0.xy, h.x);
                        vec3 p1 = vec3(a0.zw, h.y);
                        vec3 p2 = vec3(a1.xy, h.z);
                        vec3 p3 = vec3(a1.zw, h.w);
                        
                        // Normalise gradients
                        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
                        p0 *= norm.x;
                        p1 *= norm.y;
                        p2 *= norm.z;
                        p3 *= norm.w;
                        
                        // Mix final noise value
                        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
                        m = m * m;
                        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
                    }
                    
                    void main() {
                        vNormal = normal;
                        vPosition = position;
                        
                        // Base ferrofluid effect
                        float baseWave = distortion * (
                            snoise(position * 1.5 + time * 0.8) +
                            snoise(position * 2.5 + time * 0.4) * 0.5 +
                            snoise(position * 4.0 + time * 1.2) * 0.25
                        );
                        
                        // Magnet field influence - creates spikes toward magnet
                        vec3 magnetDir = normalize(magnetField);
                        float magnetInfluence = pow(max(0.0, dot(normalize(position), magnetDir)), 1.0);
                        float magnetEffect = magnetInfluence * magnetField.z * reactivity;
                        
                        // Create ferrofluid spikes
                        float spike = pow(magnetInfluence, 5.0) * magnetField.z * 1.5 * reactivity;
                        
                        // Combine effects
                        vec3 displacement = normal * (baseWave + spike);
                        
                        // Apply small ripples based on time
                        float ripple = sin(position.x * 5.0 + time * 3.0) * 
                                     sin(position.y * 5.0 + time * 2.0) * 
                                     sin(position.z * 5.0 + time * 4.0) * 0.03 * reactivity;
                        
                        vec3 newPosition = position + displacement + normal * ripple;
                        
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
                    }
                `}
                fragmentShader={`
                    uniform vec3 color1;
                    uniform vec3 color2;
                    uniform vec3 color3;
                    uniform vec3 color4;
                    uniform vec3 color5;
                    uniform vec3 color6;
                    uniform float colorMix;
                    uniform float time;
                    uniform vec3 magnetField;
                    varying vec3 vNormal;
                    varying vec3 vPosition;

                    void main() {
                        // Dynamic color cycling through 6 colors
                        float t = colorMix * 6.28318;
                        
                        // Create weights for each color using sine waves with phase shifts
                        float w1 = pow(0.5 + 0.5 * sin(t), 2.0);
                        float w2 = pow(0.5 + 0.5 * sin(t + 1.047), 2.0); // 60° phase shift
                        float w3 = pow(0.5 + 0.5 * sin(t + 2.094), 2.0); // 120° phase shift
                        float w4 = pow(0.5 + 0.5 * sin(t + 3.142), 2.0); // 180° phase shift
                        float w5 = pow(0.5 + 0.5 * sin(t + 4.189), 2.0); // 240° phase shift
                        float w6 = pow(0.5 + 0.5 * sin(t + 5.236), 2.0); // 300° phase shift
                        
                        // Normalize weights
                        float totalWeight = w1 + w2 + w3 + w4 + w5 + w6;
                        w1 /= totalWeight;
                        w2 /= totalWeight;
                        w3 /= totalWeight;
                        w4 /= totalWeight;
                        w5 /= totalWeight;
                        w6 /= totalWeight;
                        
                        // Mix all colors
                        vec3 baseColor = color1 * w1 + color2 * w2 + color3 * w3 + color4 * w4 + color5 * w5 + color6 * w6;
                        
                        // Add fresnel effect for edge glow
                        vec3 viewDir = normalize(vec3(0.0, 0.0, 1.0) - vPosition);
                        float fresnel = pow(1.0 - abs(dot(normalize(vNormal), viewDir)), 3.0);
                        
                        // Create shimmering effect
                        float shimmer = 0.3 * sin(vPosition.x * 10.0 + time * 2.0) * 
                                        sin(vPosition.y * 8.0 + time * 1.5) * 
                                        sin(vPosition.z * 6.0 + time * 1.0);
                        
                        // Enhanced subsurface scattering
                        vec3 subsurface = mix(
                            baseColor,
                            vec3(1.0, 1.0, 1.0),
                            fresnel * 0.6 + shimmer
                        );
                        
                        // Add magnetic field influence to color
                        float magnetInfluence = length(magnetField) * 0.5;
                        vec3 finalColor = mix(baseColor, subsurface, magnetInfluence);
                        
                        gl_FragColor = vec4(finalColor, 0.95);
                    }
                `}
                transparent
                side={THREE.DoubleSide}
            />
        </mesh>
    );
};

const FerroFluidScene = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef();

    useEffect(() => {
        if (isClicked) {
            const timeout = setTimeout(() => setIsClicked(false), 1500);
            return () => clearTimeout(timeout);
        }
    }, [isClicked]);

    const handleMouseMove = (e) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    };

    return (
        <div 
            ref={containerRef}
            className="md:size-[400px] size-[300px] p-2 relative"
            onMouseMove={handleMouseMove}
            onTouchMove={(e) => {
                if (e.touches[0]) {
                    handleMouseMove({
                        clientX: e.touches[0].clientX,
                        clientY: e.touches[0].clientY
                    });
                }
            }}
        >
            <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                className="h-full"
                gl={{ alpha: true, antialias: true }}
            >
                {/* Dramatic lighting setup */}
                <ambientLight intensity={0.3} />
                <pointLight position={[5, 5, 5]} intensity={1.2} color={0x00ffff} />
                <pointLight position={[-5, -5, 5]} intensity={1.2} color={0xff00ff} />
                <pointLight position={[0, 0, 8]} intensity={0.8} color={0x00ff00} />
                <pointLight position={[0, 5, -5]} intensity={0.5} color={0xff0088} />

                <group
                    onPointerOver={() => setIsHovered(true)}
                    onPointerOut={() => setIsHovered(false)}
                    onClick={() => setIsClicked(true)}
                >
                    <FerroFluidSphere 
                        isHovered={isHovered} 
                        isClicked={isClicked} 
                        mousePosition={mousePosition}
                    />
                </group>

                <OrbitControls 
                    enableZoom={false} 
                    autoRotate={!isHovered} 
                    autoRotateSpeed={0.5} 
                    enablePan={false} 
                    minPolarAngle={Math.PI / 8}
                    maxPolarAngle={Math.PI - Math.PI / 8}
                />
            </Canvas>
        </div>
    );
};

export default FerroFluidScene;



// // components/creedCreation/FerroFluidSphere.jsx
// import React, { useRef, useState, useEffect } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import * as THREE from 'three';

// const FerroFluidSphere = ({ isHovered, isClicked }) => {
//     const sphereRef = useRef();
//     const [clock] = useState(() => new THREE.Clock());
//     const [colorMix, setColorMix] = useState(0);

//     const shaderRef = useRef();
//     const uniforms = {
//         time: { value: 0 },
//         distortion: { value: 0.05 },
//         color1: { value: new THREE.Color('#3b82f6') }, // Blue-500
//         color2: { value: new THREE.Color('#ec4899') }, // Pink-500
//         color3: { value: new THREE.Color('#dc2626') }, // Red-600 (Crimson-like)
//         color4: { value: new THREE.Color('#f472b6') }, // Rose-400
//         colorMix: { value: 0 },
//     };

//     useFrame(() => {
//         const time = clock.getElapsedTime();
//         uniforms.time.value = time;
//         setColorMix((prev) => (prev + 0.005) % 1);
//         uniforms.colorMix.value = colorMix;

//         if (sphereRef.current) {
//             const targetDistortion = isClicked ? 0.5 : isHovered ? 0.3 : 0.05;
//             sphereRef.current.material.uniforms.distortion.value = THREE.MathUtils.lerp(
//                 sphereRef.current.material.uniforms.distortion.value,
//                 targetDistortion,
//                 0.1
//             );

//             sphereRef.current.scale.setScalar(1 + Math.sin(time * 0.5) * 0.05);
//         }
//     });

//     return (
//         <mesh ref={sphereRef}>
//             <sphereGeometry args={[2, 128, 128]} />
//             <shaderMaterial
//                 ref={shaderRef}
//                 uniforms={uniforms}
//                 vertexShader={`
//                     uniform float time;
//                     uniform float distortion;
//                     varying vec3 vNormal;
//                     varying vec3 vPosition;
                    
//                     void main() {
//                         vNormal = normal;
//                         vPosition = position;
//                         float wave = distortion * (
//                             sin(position.x * 3.0 + time * 2.0) * 
//                             sin(position.y * 2.0 + time * 1.5) * 
//                             sin(position.z * 1.5 + time * 1.0)
//                         );
//                         vec3 newPosition = position + normal * wave * 0.5;
//                         gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
//                     }
//                 `}
//                 fragmentShader={`
//                     uniform vec3 color1;
//                     uniform vec3 color2;
//                     uniform vec3 color3;
//                     uniform vec3 color4;
//                     uniform float colorMix;
//                     varying vec3 vNormal;
//                     varying vec3 vPosition;

//                     void main() {
//                         float blend1 = 0.5 * (1.0 + sin(colorMix * 3.1415));
//                         float blend2 = 0.5 * (1.0 + sin(colorMix * 3.1415 + 2.094));
//                         float blend3 = 0.5 * (1.0 + sin(colorMix * 3.1415 + 4.188));

//                         vec3 baseColor = mix(color1, color2, blend1);
//                         vec3 midColor = mix(baseColor, color3, blend2);
//                         vec3 finalColor = mix(midColor, color4, blend3);

//                         float fresnel = pow(1.0 - abs(dot(normalize(vNormal), vec3(0.0, 0.0, 1.0))), 2.0);
//                         vec3 subsurface = finalColor * fresnel * 0.5;

//                         gl_FragColor = vec4(finalColor + subsurface, 0.95);
//                     }
//                 `}
//                 transparent
//                 side={THREE.DoubleSide}
//             />
//         </mesh>
//     );
// };

// const FerroFluidScene = () => {
//     const [isHovered, setIsHovered] = useState(false);
//     const [isClicked, setIsClicked] = useState(false);

//     useEffect(() => {
//         if (isClicked) {
//             const timeout = setTimeout(() => setIsClicked(false), 1000);
//             return () => clearTimeout(timeout);
//         }
//     }, [isClicked]);

//     return (
//         <div className="md:size-[400px] size-[300px] p-2 relative">
//             <Canvas
//                 camera={{ position: [0, 0, 5], fov: 50 }}
//                 className="h-full"
//                 gl={{ alpha: true, antialias: true }}
//             >
//                 <ambientLight intensity={0.5} />
//                 <pointLight position={[10, 10, 10]} intensity={1} color={0xff00ff} />
//                 <pointLight position={[-10, -10, -10]} intensity={1} color={0x00ffff} />

//                 <group
//                     onPointerOver={() => setIsHovered(true)}
//                     onPointerOut={() => setIsHovered(false)}
//                     onClick={() => setIsClicked(true)}
//                 >
//                     <FerroFluidSphere isHovered={isHovered} isClicked={isClicked} />
//                 </group>

//                 <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} enablePan={false} />
//             </Canvas>
//         </div>
//     );
// };

// export default FerroFluidScene;
