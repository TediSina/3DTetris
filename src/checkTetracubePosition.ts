import * as BABYLON from "@babylonjs/core/Legacy/legacy";


export function checkCubePosition(cube: BABYLON.Mesh) {
    const absolutePosition = cube.getAbsolutePosition();
    if (absolutePosition.x >= -6 && absolutePosition.x <= 3 && absolutePosition.y >= 0 && absolutePosition.y <= 22 && absolutePosition.z >= 0 && absolutePosition.z <= 9) {
        return true;
    } else {
        return false;
    }
}


export function checkTetracubePosition(tetracube: BABYLON.TransformNode) {
    const result: boolean[] = [];
    tetracube.getChildren().forEach((cube: BABYLON.Mesh) => {
        result.push(checkCubePosition(cube))
    });
    
    return result.every(Boolean); // returns true if all elements are true
}
