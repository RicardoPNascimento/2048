function moveLeft() {
    for (let row = 0; row < Table.length; row++) {
        let countNew = 0
        for (let col = 0; col < Table[0].length; col++) {
            if (Table[row][col] !== 0) {
                TableNew[row][countNew] = Table[row][col]
                countNew++
            }
        }
    }
}