import * as BABYLON from "@babylonjs/core/Legacy/legacy";


export function calculateTetracubeCubePosition(tetracube: BABYLON.Mesh[], position: BABYLON.Vector3): BABYLON.Vector3[] {
    const newTetracubeCubePositions: BABYLON.Vector3[] = [];
    const translationMatrix = BABYLON.Matrix.Translation(position.x, position.y, position.z);

    tetracube.forEach(cube => {
        newTetracubeCubePositions.push(BABYLON.Vector3.TransformCoordinates(cube.position, translationMatrix));
    });

    return newTetracubeCubePositions;
}


export function checkCubePosition(position: BABYLON.Vector3): boolean {
    if (position.x >= -6 && position.x <= 3 && position.y >= 0 && position.y <= 22 && position.z >= 0 && position.z <= 9 && Number.isInteger(position.x) && Number.isInteger(position.y) && Number.isInteger(position.z)) {
        return true;
    } else {
        return false;
    }
}


export function checkTetracubePosition(tetracube: BABYLON.Mesh[], position: BABYLON.Vector3): boolean {
    const calculatedTetracubeCubePositions: BABYLON.Vector3[] = calculateTetracubeCubePosition(tetracube, position);
    const result: boolean[] = [];

    calculatedTetracubeCubePositions.forEach((position: BABYLON.Vector3) => {
        result.push(checkCubePosition(position))
    });
    
    return result.every(Boolean); // Returns true if all elements are true
}
