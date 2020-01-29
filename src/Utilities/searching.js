/* eslint-disable eqeqeq */
// const BST = require('./BST');
//////// SEARCHES ////////


const Searching = {
  
  indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == value) {
        return i;
      }
    }
    return -1;
  },

  binarySearch(array, value, start, end, count=0) {
    count++;
    start = start === undefined ? 0 : start;
    end = end === undefined ? array.length : end;
  
    if (start > end) {
      return -1;
    }
  
    const index = Math.floor((start+end) / 2);
    const item = array[index];
  
    if (item == value) {
      return count;
    }
    else if (item < value) {
      return this.binarySearch(array, value, index + 1, end, count);
    }
    else if (item > value) {
      return this.binarySearch(array, value, start, index - 1,count);
    }
  }

}



export default Searching;