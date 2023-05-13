import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import state from "../store";

export default function Shirt() {
	const snap = useSnapshot(state);
	const { nodes, materials } = useGLTF(
		"https://raw.githubusercontent.com/alinbrg/3d-images/4ff0ae3a09512d72e46e48580ac2ceff1b46281e/public/shirt_baked.glb"
	);

	// console.log(nodes, materials);

	const logoTexture = useTexture(snap.logoDecal);
	const fullTexture = useTexture(snap.fullDecal);

	useFrame((state, delta) =>
		easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)
	);
	const stateString = JSON.stringify(snap);

	return (
		<group key={stateString}>
			<mesh
				castShadow
				geometry={nodes.T_Shirt_male.geometry}
				material={materials.lambert1}
				material-roughness={1}
				dispose={null}
			>
				{snap.isFullTexture && (
					<Decal
						position={[0, 0, 0]}
						rotation={[0, 0, 0]}
						scale={1}
						map={fullTexture}
					/>
				)}
				{snap.isLogoTexture && (
					<Decal
						position={[0.08, 0.07, 0.15]}
						rotation={[0, 0, 0]}
						scale={0.1}
						map={logoTexture}
						map-anisotropy={16}
						depthTest={false}
						depthWrite={true}
					/>
				)}
			</mesh>
		</group>
	);
}
