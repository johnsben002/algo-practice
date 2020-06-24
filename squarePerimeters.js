// return the perimeters of all fib sequance sqares in which there are n+1 squares

function perimeter(n) {
  const squares = [1];
  while (squares.length <= n) {
    if (squares.length === 1) {
      squares.push(1);
    } else {
      squares.push(squares[squares.length-1] + squares[squares.length-2]);
    }
  }
  return squares.reduce((acc, cur) => acc + cur, 0) * 4;
}


console.log(perimeter(5))
console.log(perimeter(7))
console.log(perimeter(20))
console.log(perimeter(0))