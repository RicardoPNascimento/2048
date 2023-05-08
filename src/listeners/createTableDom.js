

export default function createTableDom(tableState) {
    const myTable = document.getElementById("myTable");
    const Table = tableState.table;
    // myTable.innerHTML = ''; // Clear the table before adding new rows
    // Loop through each row in the Table array and create a new row in the HTML table
    for (let row of Table) {
        const newRow = document.createElement("tr");

        // Loop through each element in the row and create a new cell in the HTML table
        for (let col of row) {
            const newCell = document.createElement("td");
            newCell.innerText = col;
            newRow.appendChild(newCell);
        }

        // Add the new row to the HTML table
        myTable.appendChild(newRow);
    }
    return myTable;
}
