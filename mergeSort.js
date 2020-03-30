const mergeSort = (array) => {
  function merge(left, right) {
    let merged = [];

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        merged.push(left.shift());
      } else {
        merged.push(right.shift());
      }
    }

    return merged.concat(left.slice().concat(right.slice()));
  }

  function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }

    let middleIndex = Math.floor(array.length / 2);

    let left = array.slice(0, middleIndex);
    let right = array.slice(middleIndex, array.length);
    return merge(mergeSort(left), mergeSort(right));
  }
  return mergeSort(array)
};

console.log(mergeSort([9,6,7,4,7,2,2,4,2,3,7,7]))