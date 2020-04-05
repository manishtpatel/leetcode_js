/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {

    // int n = matrix.length;

    // // transpose matrix
    // for (int i = 0; i < n; i++) {
    //   for (int j = i; j < n; j++) {
    //     int tmp = matrix[j][i];
    //     matrix[j][i] = matrix[i][j];
    //     matrix[i][j] = tmp;
    //   }
    // }
    // // reverse each row
    // for (int i = 0; i < n; i++) {
    //   for (int j = 0; j < n / 2; j++) {
    //     int tmp = matrix[i][j];
    //     matrix[i][j] = matrix[i][n - j - 1];
    //     matrix[i][n - j - 1] = tmp;
    //   }
    // }


    // transpose matrix
    for (let x = 0; x < matrix.length; x++) {
        for (let y = x; y < matrix.length; y++) {
            let tmp = matrix[y][x]

            matrix[y][x] = matrix[x][y]

            matrix[x][y] = tmp
        }
    }

    // reverse
    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix.length / 2; y++) {
            let tmp = matrix[x][y]

            matrix[x][y] = matrix[x][matrix.length - 1 - y]
            matrix[x][matrix.length - 1 - y] = tmp
        }
    }
};

var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(matrix.toString())
rotate(matrix)
console.log(matrix.toString())