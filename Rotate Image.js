var rotate = function(matrix) {
    const n = matrix.length;

    for(let layer = 0; layer < Math.floor(n / 2); layer++){
        const first = layer;
        const last = n - 1 - layer;

        for(let i = first; i < last; i++) {
            const offset = i - first;
            const top = matrix[first][i];
            matrix[first][i] = matrix[last - offset][first];
            matrix[last - offset][first] = matrix[last][last - offset];
            matrix[last][last - offset] = matrix[i][last];
            matrix[i][last] = top;
        }
    }
};

//Example usage:
const matrix1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
rotate(matrix1);
console.log(matrix1);

const matrix2 = [
    [5,1,9,11],
    [2,4,8,10],
    [13,3,6,7],
    [15,14,12,16]
];
rotate(matrix2);
console.log(matrix2);