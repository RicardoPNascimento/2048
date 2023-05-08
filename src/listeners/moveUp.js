function moveUp() {
    for (let col = 0; col < Table[0].length; col++) {
        let countNew = 0;
        for (let row = 0; row < Table.length; row++) {
            if (Table[row][col] !== 0) {
                TableNew[countNew][col] = Table[row][col];
                countNew++;
            }
        }
    }
}