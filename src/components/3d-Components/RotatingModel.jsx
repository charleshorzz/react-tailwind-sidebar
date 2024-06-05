import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Model from "./SL63"; // Import your car model here

const RotatingModel = () => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2; // Adjust the speed as needed
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Model />
    </group>
  );
};

export default RotatingModel;
