import * as BABYLON from "@babylonjs/core/Legacy/legacy";


/**
 * Checks if a cube is positioned within the boundaries of the game.
 * The boundaries are: x = [-6, 3], y = [0, 22], z = [0, 9].
 * @param cube the cube to check.
 * @returns true if the cube is within the boundaries, false otherwise.
 */
export function checkCubePosition(cube: BABYLON.Mesh) {
    const absolutePosition = cube.getAbsolutePosition();
    if (absolutePosition.x >= -6 && absolutePosition.x <= 3 && absolutePosition.y >= 0 && absolutePosition.y <= 22 && absolutePosition.z >= 0 && absolutePosition.z <= 9) {
        return true;
    } else {
        return false;
    }
}


/**
 * Checks if all the cubes in a tetracube are positioned within the boundaries of the game.
 * The boundaries are: x = [-6, 3], y = [0, 22], z = [0, 9].
 * @param tetracube the tetracube to check.
 * @returns true if all the cubes are within the boundaries, false otherwise.
 */
export function checkTetracubePosition(tetracube: BABYLON.Mesh[]) {
    const result: boolean[] = [];
    tetracube.forEach((cube: BABYLON.Mesh) => {
        result.push(checkCubePosition(cube))
    });
    
    return result.every(Boolean); // returns true if all elements are true
}
