Array.prototype.myUniq = function () {
  let unique = [this[0]]; 
  
  for (let i = 1; i < this.length; i++) {
    
    if ( !this.slice(0, i).includes(this[i]) ) {
      unique.push(this[i]);
    }
  }
  return unique;  
} ;

Array.prototype.myTwoSum = function () {
  let pairs = []; 
  
  for (let i = 0; i < this.length; i++) {
    for (let j = (i + 1); j < this.length; j++) {
      if (this[i] === -this[j]) {
        pairs.push([i, j]);
      }    
    }
  }
  return pairs;
};

Array.prototype.myTranspose = function () {
  let transposed = [];
  
  this[0].forEach (function (el) {
    transposed.push([el]);
  });
    
  for (let i = 1; i < this.length; i++) { 
    for (let j = 0; j < this[i].length; j++) {
      transposed[j].push(this[i][j]);  
    }
  }
  
  return transposed;  
};


