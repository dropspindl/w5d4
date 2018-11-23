Array.prototype.myBubbleSort = function () {
  arr = this;
  
  let sorted = false; 
  while (!sorted) {
    sorted = true;
    
    for (let i = 0; i < arr.length - 1; i++) {
      let j = i + 1;
      
      if (arr[i] > arr[j]) {
        let reassign = arr[i]; 
        arr[i] = arr[j];
        arr[j] = reassign;
        sorted = false; 
      }
      
    }  
  }
  return arr;
}; 

String.prototype.mySubstrings = function () {
  subs = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length + 1; j++) {
      subs.push(this.slice(i, j));  
    }
  }
  return subs;
};