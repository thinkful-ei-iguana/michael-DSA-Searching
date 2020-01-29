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
    newBST.insert(25, 25);
    newBST.insert(15, 15);
    newBST.insert(50, 50);
    newBST.insert(10, 10);
    newBST.insert(24, 24);
    newBST.insert(35, 35);
    newBST.insert(70, 70);
    newBST.insert(4, 4);
    newBST.insert(12, 12);
    newBST.insert(18, 12);
    newBST.insert(31, 31);
    newBST.insert(44, 44);
    newBST.insert(66, 66);
    newBST.insert(90, 90);
    newBST.insert(22, 22);
    console.log(newBST);
    return newBST;
  },

  createRankTree() {
    let starTrek = new BST();
    starTrek.insert(5, 'Captain Picard');
    starTrek.insert(6, 'Commander Data');
    starTrek.insert(3, 'Commander Riker');
    starTrek.insert(2, 'Lt. Cmdr. Worf');
    starTrek.insert(1, 'Lieutenant Security Officer');
    starTrek.insert(4, 'Lt. Cmdr. LaForge');
    starTrek.insert(9, 'Lt. Cmdr. Crusher');
    starTrek.insert(8, 'Lieutenant Selar');


    return starTrek;
  }

}



export default Searching;