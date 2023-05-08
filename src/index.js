import Table from './states/tableState'
import createTableDom from './listeners/createTableDom'

// let Table = [
//     [0, 0, 0, 0],
//     [3, 0, 2, 1],
//     [3, 0, 0, 8],
//     [3, 2, 1, 9]
// ]
//
// let TableNew = [
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0]
// ]

// document.onkeyup = function (e) {
//     if (e.code === 'ArrowUp') {
//         for (let col = 0; col < Table[0].length; col++) {
//             let countNew = 0;
//             for (let row = 0; row < Table.length; row++) {
//                 if (Table[row][col] !== 0) {
//                     TableNew[countNew][col] = Table[row][col];
//                     countNew++;
//                 }
//             }
//         }
//     } else if (e.code === 'ArrowDown') {
//         for (let col = 0; col < Table[0].length; col++) {
//             let countNew = 3
//             for (let row = 3; row >= 0; row--) {
//                 if (Table[row][col] !== 0) {
//                     TableNew[countNew][col] = Table[row][col]
//                     countNew--;
//                 }
//             }
//         }
//     } else if (e.code === 'ArrowLeft') {
//         for (let row = 0; row < Table.length; row++) {
//             let countNew = 0
//             for (let col = 0; col < Table[0].length; col++) {
//                 if (Table[row][col] !== 0) {
//                     TableNew[row][countNew] = Table[row][col]
//                     countNew++
//                 }
//             }
//         }
//     } else if (e.code === 'ArrowRight') {
//         for (let row = 0; row < Table.length; row++) {
//             let countNew = 3
//             for (let col = 3; col >= 0; col--) {
//                 if (Table[row][col] !== 0) {
//                     TableNew[row][countNew] = Table[row][col]
//                     countNew--
//                 }
//             }
//         }
//
//     }
// }

let Game = new Table()
Game.addListener(createTableDom)
Game.initGame()
