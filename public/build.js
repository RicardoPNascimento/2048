/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let Table = [\n    [0, 0, 0, 0],\n    [0, 0, 2, 1],\n    [3, 0, 0, 8],\n    [3, 0, 1, 9]\n]\n\nlet TableNew = [\n    [0, 0, 0, 0],\n    [0, 0, 0, 0],\n    [0, 0, 0, 0],\n    [0, 0, 0, 0]\n]\n\ndocument.onkeyup = function (e) {\n    if (e.code === 'ArrowUp') {\n        for (let col = 0; col < Table[0].length; col++) {\n            let countNew = 0\n            for (let row = 0; row < Table.length; row++) {\n                if (Table[row][col] !== 0) {\n                    TableNew[countNew][col] = Table[row][col]\n                    countNew++\n                }\n            }\n\n            for (let row = 1; row < Table.length; row++) {\n                if (Table[row][col] === Table[row-1][col] ) {\n                    TableNew[row-1][col] = Table[row][col] + Table[row-1][col]\n                    Table[row][col] = 0\n                }\n            }\n        }\n    } else if (e.code === 'ArrowDown') {\n        for (let col = 0; col < Table[0].length; col++) {\n            let countNew = 3\n            for (let row = 3; row >= 0; row--) {\n                if (Table[row][col] !== 0) {\n                    TableNew[countNew][col] = Table[row][col]\n                    countNew--\n                }\n            }\n        }\n        Table = TableNew\n    } else if (e.code === 'ArrowLeft') {\n        for (let row = 0; row < Table.length; row++) {\n            let countNew = 0\n            for (let col = 0; col < Table[0].length; col++) {\n                if (Table[row][col] !== 0) {\n                    TableNew[row][countNew] = Table[row][col]\n                    countNew++\n                }\n            }\n        }\n    } else if (e.code === 'ArrowRight') {\n        for (let row = 0; row < Table.length; row++) {\n            let countNew = 3\n            for (let col = 3; col >= 0; col--) {\n                if (Table[row][col] !== 0) {\n                    TableNew[row][countNew] = Table[row][col]\n                    countNew--\n                }\n            }\n        }\n\n    }\n    Table = TableNew\n    TableNew = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0],]\n\n\n    const myTable = document.getElementById(\"myTable\");\n    myTable.innerHTML = ''; // Clear the table before adding new rows\n\n    // Loop through each row in the Table array and create a new row in the HTML table\n    for (let row of Table) {\n        const newRow = document.createElement(\"tr\");\n\n        // Loop through each element in the row and create a new cell in the HTML table\n        for (let col of row) {\n            const newCell = document.createElement(\"td\");\n            newCell.innerText = col;\n            newRow.appendChild(newCell);\n        }\n\n        // Add the new row to the HTML table\n        myTable.appendChild(newRow);\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;