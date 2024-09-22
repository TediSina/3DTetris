import * as BABYLON from "@babylonjs/core/Legacy/legacy";


export function calculateTetracubeCubePosition(tetracube: BABYLON.Mesh[], x: number, y: number, z: number) {
    const newTetracubeCubePositions: BABYLON.Vector3[] = [];
    const translationMatrix = BABYLON.Matrix.Translation(x, y, z);
    tetracube.forEach(cube => {
        newTetracubeCubePositions.push(BABYLON.Vector3.TransformCoordinates(cube.position, translationMatrix));
    });
    return newTetracubeCubePositions;
}


export function checkCubePosition(position: BABYLON.Vector3) {
    if (position.x >= -6 && position.x <= 3 && position.y >= 0 && position.y <= 22 && position.z >= 0 && position.z <= 9) {
        return true;
    } else {
        return false;
    }
}


export function checkTetracubePosition(tetracube: BABYLON.Mesh[], x: number, y: number, z: number) {
    const calculatedTetracubeCubePositions: BABYLON.Vector3[] = calculateTetracubeCubePosition(tetracube, x, y, z);
    const result: boolean[] = [];
    calculatedTetracubeCubePositions.forEach((position: BABYLON.Vector3) => {
        result.push(checkCubePosition(position))
    });
    
    return result.every(Boolean); // Returns true if all elements are true
}
