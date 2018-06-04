function chessBoardCellColor(cell1, cell2) {
  const desk = {
    "A": 1,
    "B": 2,
    "C": 3,
    "D": 4,
    "E": 5,
    "F": 6,
    "G": 7,
    "H": 8
  };
  var colorOne = (desk[cell1[0]] + parseInt(cell1[1])) % 2;
  var colorTwo = (desk[cell2[0]] + parseInt(cell2[1])) % 2;

  return colorOne == colorTwo;
}
