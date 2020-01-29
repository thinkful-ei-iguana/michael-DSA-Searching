/* eslint-disable eqeqeq */
const BST = require('./BST');
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
  },

  createBST(){
    let newBST = new BST();
    newBST.insert(25);
    newBST.insert(15);
    newBST.insert(50);
    newBST.insert(10);
    newBST.insert(24);
    newBST.insert(35);
    newBST.insert(70);
    newBST.insert(4);
    newBST.insert(12);
    newBST.insert(18);
    newBST.insert(31);
    newBST.insert(44);
    newBST.insert(66);
    newBST.insert(90);
    newBST.insert(22);
    console.log(newBST);
    return newBST;
  }

}



export default Searching;