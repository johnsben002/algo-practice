/**
 * The prime numbers are not regularly spaced. For example from 2 to 3 the gap is 1. From 3 to 5 the gap is 2. From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-gaps primes: 3-5, 5-7, 11-13, 17-19, 29-31, 41-43
 * 
 * @param {*} g (integer >= 2) which indicates the gap we are looking for
 * @param {*} m (integer > 2) which gives the start of the search (m inclusive)
 * @param {*} n (integer >= m) which gives the end of the search (n inclusive)
 */

function xgap(g, m, n) {
  // initialize prevPrime variable to keep track of gaps
  let prevPrime;
  const isPrime = num => {
    // if number is not prime, return out
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return;
      }
    }
    // if num is prime, check to see if the gap between num and prevPrime is the desired gap
    if (prevPrime && num-prevPrime === g) {
      return [prevPrime, num];
    } else {
      prevPrime = num;
    }
  }
  // iterate through search window to find primes
  for (let i = m; i <= n; i++) {
    let result = isPrime(i)
    if (result !== undefined) {
      return result;
    };
  }
  return null;
}


// using Seive of Eratosthenes algortihm
function gap(g, m, n) {
 
  // mise en place
  let record = [];
  let primes = [];
  let max = Math.sqrt(n);

  // true represents 1 and false represents 0
  for (let number = 0; number < n; number++) {
    record.push(1);
  }

  // seive time
  for (let prime = 2; prime <= max; prime++) {
    if (record[prime]) {
      for (let multiple = prime * prime; multiple < n; multiple += prime) {
        // finds all multiples from prime to target and changes them in record to false 
        record[multiple] = 0;
      }
    }
  }

  // save seived primes from window to primes array
  for (let seivedNumber = m; seivedNumber <= n; seivedNumber++) {
    if (record[seivedNumber]) {
      primes.push(seivedNumber);
    }
  }

  // check for correct gap
  for (let i = 1; i < primes.length; i++) {
    if (primes[i]-primes[i-1] === g) {
      return [primes[i-1], primes[i]];
    }
  }
  return null;
}

console.log(gap(4,100,110)) // [103, 107]
console.log(gap(2,100,110)) // [101, 103]
console.log(gap(6,100,110)) // null
console.log(gap(8,300,400)) // [359, 367]
console.log(gap(10,300,400)) // [337, 347]