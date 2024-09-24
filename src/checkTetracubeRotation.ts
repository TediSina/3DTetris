import * as BABYLON from "@babylonjs/core/Legacy/legacy";
import { checkCubePosition } from "./checkTetracubePosition";


export function calculateTetracubeCubeRotation(tetracube: BABYLON.Mesh[], rotation: BABYLON.Vector3): BABYLON.Vector3[] {
    const newTetracubeCubePositions: BABYLON.Vector3[] = [];
    const rotationMatrix = BABYLON.Matrix.RotationYawPitchRoll(rotation.y, rotation.x, rotation.z);

    // Find the center of the tetracube by averaging the positions of the cubes
    const center = tetracube.reduce((acc, cube) => acc.addInPlace(cube.position), BABYLON.Vector3.Zero()).scaleInPlace(1 / tetracube.length);

    tetracube.forEach(cube => {
        // Calculate local position relative to tetracube center
        const localPosition = cube.position.subtract(center);

        // Apply the rotation matrix to the local position
        const rotatedPosition = BABYLON.Vector3.TransformCoordinates(localPosition, rotationMatrix);

        // Add the center back and round the result to integers
        const finalPosition = new BABYLON.Vector3(
            Math.round(rotatedPosition.x + center.x),
            Math.round(rotatedPosition.y + center.y),
            Math.round(rotatedPosition.z + center.z)
        );

        newTetracubeCubePositions.push(finalPosition);
    });

    return newTetracubeCubePositions;
}


export function checkTetracubeRotation(tetracube: BABYLON.Mesh[], rotation: BABYLON.Vector3): boolean {
    const rotatedTetracubeCubePositions: BABYLON.Vector3[] = calculateTetracubeCubeRotation(tetracube, rotation);
    const result: boolean[] = [];

    rotatedTetracubeCubePositions.forEach((position: BABYLON.Vector3) => {
        result.push(checkCubePosition(position));
    });

    return result.every(Boolean); // Returns true if all positions are valid
}
