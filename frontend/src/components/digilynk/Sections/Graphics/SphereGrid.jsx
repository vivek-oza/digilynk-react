// components/creedCreation/SphereGrid.jsx
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Fixed configuration (options UI commented out)
const CONFIG = {
    color: "#919191",          // zinc-900 color
    latitudeDivisions: 16,     // Increased for smoother appearance
    longitudeDivisions: 12,    // Increased for smoother appearance
    radius: 1.7,                 // Sphere radius
    lineWidth: 0.9,          // Increased line thickness
    rotationSpeed: 1,       // Slightly slower rotation for elegant movement
    tiltAngle: Math.PI * 0.15  // Tilt angle (radians)
};

// Main component (options UI commented out)
function SphereGrid() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="md:hidden rounded-full cursor-pointer group overflow-hidden">
            {/* 
      // Controls Panel (commented out as requested)
      <div style={{ 
        width: '400px', 
        marginBottom: '10px',
        padding: '10px',
        background: '#f5f5f5',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
          <div>
            <label htmlFor="color" style={{ marginRight: '5px', fontSize: '14px' }}>Color:</label>
            <input
              type="color"
              id="color"
              name="color"
              value={CONFIG.color}
              style={{ width: '40px', height: '20px', verticalAlign: 'middle' }}
            />
          </div>
          
          <div>
            <label htmlFor="latitudeDivisions" style={{ marginRight: '5px', fontSize: '14px' }}>Latitude:</label>
            <input
              type="range"
              id="latitudeDivisions"
              name="latitudeDivisions"
              min="4"
              max="48"
              value={CONFIG.latitudeDivisions}
              style={{ width: '60px', verticalAlign: 'middle' }}
            />
            <span style={{ marginLeft: '5px', fontSize: '12px' }}>{CONFIG.latitudeDivisions}</span>
          </div>
          
          <div>
            <label htmlFor="longitudeDivisions" style={{ marginRight: '5px', fontSize: '14px' }}>Longitude:</label>
            <input
              type="range"
              id="longitudeDivisions"
              name="longitudeDivisions"
              min="4"
              max="48"
              value={CONFIG.longitudeDivisions}
              style={{ width: '60px', verticalAlign: 'middle' }}
            />
            <span style={{ marginLeft: '5px', fontSize: '12px' }}>{CONFIG.longitudeDivisions}</span>
          </div>
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <label htmlFor="lineWidth" style={{ marginRight: '5px', fontSize: '14px' }}>Line Width:</label>
            <input
              type="range"
              id="lineWidth"
              name="lineWidth"
              min="0.01"
              max="0.05"
              step="0.005"
              value={CONFIG.lineWidth}
              style={{ width: '60px', verticalAlign: 'middle' }}
            />
            <span style={{ marginLeft: '5px', fontSize: '12px' }}>{Number(CONFIG.lineWidth).toFixed(3)}</span>
          </div>
          
          <div>
            <label htmlFor="rotationSpeed" style={{ marginRight: '5px', fontSize: '14px' }}>Speed:</label>
            <input
              type="range"
              id="rotationSpeed"
              name="rotationSpeed"
              min="0"
              max="1"
              step="0.05"
              value={CONFIG.rotationSpeed}
              style={{ width: '60px', verticalAlign: 'middle' }}
            />
            <span style={{ marginLeft: '5px', fontSize: '12px' }}>{CONFIG.rotationSpeed}</span>
          </div>
        </div>
      </div>
      */}

            {/* Drag badge */}
            {/* <div id="#drag" className="absolute animate-bounce duration-1000 group-hover:opacity-0 transition-all size-12 text-white rounded-full cursor-pointer pointer-events-none bg-blue-800/60 flex justify-center items-center z-50 top-[45%]">
                drag
            </div> */}

            {/* 3D Canvas */}
            <Canvas
                camera={{ position: [0, 0, 6], fov: 34 }}
                style={{ height: "400px", width: "400px", background: "#eff6ff" }}
                gl={{
                    alpha: true,
                    antialias: true,
                    preserveDrawingBuffer: true,
                    logarithmicDepthBuffer: true // Helps with z-fighting for thin lines
                }}
            >
                <color attach="background" args={["#eff6ff"]} />
                <Scene config={CONFIG} />
            </Canvas>
        </div>
    );
}

// Scene component containing the grid
function Scene({ config }) {
    return (
        <>
            {/* Lighting */}
            <ambientLight intensity={0.7} />
            <spotLight position={[10, 10, 10]} intensity={0.8} />
            <pointLight position={[-10, -10, -10]} intensity={0.4} />

            {/* The spherical grid with tilt */}
            <group rotation={[config.tiltAngle, 0, config.tiltAngle / 2]}>
                <SphericalGrid {...config} />
            </group>

            {/* Controls */}
            <OrbitControls
                enableZoom={false}
                autoRotate={true}
                autoRotateSpeed={config.rotationSpeed * 5}
                dampingFactor={0.05}
                enableDamping
            />
        </>
    );
}

// Component that generates the spherical grid
function SphericalGrid({ color, latitudeDivisions, longitudeDivisions, radius, lineWidth }) {
    const groupRef = React.useRef();

    // Create material for the lines with thicker appearance
    const material = React.useMemo(() => {
        return new THREE.LineBasicMaterial({
            color: new THREE.Color(color),
            linewidth: 2,  // Note: WebGL has limited support for line width
        });
    }, [color]);

    // Create higher quality point material for intersections
    const pointMaterial = React.useMemo(() => {
        return new THREE.PointsMaterial({
            color: new THREE.Color(color),
            size: lineWidth * 2.8,
            sizeAttenuation: true,
            fog: true,
            alphaTest: 0.5
        });
    }, [color, lineWidth]);

    // Calculate the points for latitudinal circles with higher resolution
    const latitudeLines = React.useMemo(() => {
        const lines = [];

        // Create circles for latitude at different heights
        for (let i = 0; i <= latitudeDivisions; i++) {
            if (i === 0 || i === latitudeDivisions) continue; // Skip poles

            const phi = Math.PI * i / latitudeDivisions;
            const circleRadius = radius * Math.sin(phi);
            const y = radius * Math.cos(phi);

            const points = [];
            // Higher segment count for smoother circles
            const segments = Math.max(96, longitudeDivisions * 2);

            for (let j = 0; j <= segments; j++) {
                const theta = (j / segments) * Math.PI * 2;
                const x = circleRadius * Math.cos(theta);
                const z = circleRadius * Math.sin(theta);
                points.push(new THREE.Vector3(x, y, z));
            }

            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            lines.push(geometry);
        }

        return lines;
    }, [latitudeDivisions, longitudeDivisions, radius]);

    // Calculate the points for longitudinal lines
    const longitudeLines = React.useMemo(() => {
        const lines = [];

        // Create longitudinal lines from pole to pole
        for (let i = 0; i < longitudeDivisions; i++) {
            const theta = (i / longitudeDivisions) * Math.PI * 2;
            const points = [];

            // More points for smoother curves
            const segments = Math.max(64, latitudeDivisions * 2);
            for (let j = 0; j <= segments; j++) {
                const phi = Math.PI * j / segments;
                const x = radius * Math.sin(phi) * Math.cos(theta);
                const y = radius * Math.cos(phi);
                const z = radius * Math.sin(phi) * Math.sin(theta);
                points.push(new THREE.Vector3(x, y, z));
            }

            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            lines.push(geometry);
        }

        return lines;
    }, [longitudeDivisions, radius]);

    // Animation effect for subtle movement
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        // Subtle breathing effect
        const scale = 1 + Math.sin(t * 0.3) * 0.01;
        groupRef.current.scale.set(scale, scale, scale);
    });

    return (
        <group ref={groupRef}>
            {/* Render latitude lines */}
            {latitudeLines.map((geometry, index) => (
                <line key={`lat-${index}`} geometry={geometry}>
                    <primitive object={material} />
                </line>
            ))}

            {/* Render longitude lines */}
            {longitudeLines.map((geometry, index) => (
                <line key={`lon-${index}`} geometry={geometry}>
                    <primitive object={material} />
                </line>
            ))}

            {/* Add points at intersections for thicker appearance */}
            <Points
                latitudeDivisions={latitudeDivisions}
                longitudeDivisions={longitudeDivisions}
                radius={radius}
                pointMaterial={pointMaterial}
            />
        </group>
    );
}

// Component to add dots at grid intersections
function Points({ latitudeDivisions, longitudeDivisions, radius, pointMaterial }) {
    // Generate points at grid intersections
    const points = React.useMemo(() => {
        const vertices = [];

        // Add points at all line intersections
        for (let lat = 1; lat < latitudeDivisions; lat++) {
            const phi = Math.PI * lat / latitudeDivisions;

            for (let lon = 0; lon < longitudeDivisions; lon++) {
                const theta = (lon / longitudeDivisions) * Math.PI * 2;

                const x = radius * Math.sin(phi) * Math.cos(theta);
                const y = radius * Math.cos(phi);
                const z = radius * Math.sin(phi) * Math.sin(theta);

                vertices.push(x, y, z);
            }
        }

        // Add points at poles
        vertices.push(0, radius, 0);  // North pole
        vertices.push(0, -radius, 0); // South pole

        return new Float32Array(vertices);
    }, [latitudeDivisions, longitudeDivisions, radius]);

    return (
        <points>
            <bufferGeometry>
                <bufferAttribute
                    attachObject={['attributes', 'position']}
                    array={points}
                    itemSize={3}
                    count={points.length / 3}
                />
            </bufferGeometry>
            <primitive object={pointMaterial} />
        </points>
    );
}

export default SphereGrid;