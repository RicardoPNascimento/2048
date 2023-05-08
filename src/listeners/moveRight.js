function moveRight() {
    for (let row = 0; row < Table.length; row++) {
        let countNew = 3
        for (let col = 3; col >= 0; col--) {
            if (Table[row][col] !== 0) {
                TableNew[row][countNew] = Table[row][col]
                countNew--
            }
        }
    }
}