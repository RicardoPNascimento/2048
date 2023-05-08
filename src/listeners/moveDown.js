function moveDown() {
    for (let col = 0; col < Table[0].length; col++) {
        let countNew = 3
        for (let row = 3; row >= 0; row--) {
            if (Table[row][col] !== 0) {
                TableNew[countNew][col] = Table[row][col]
                countNew--;
            }
        }
    }
}