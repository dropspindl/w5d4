Array.prototype.myEach = function (func){
  for (let i = 0; i < this.length; i++) {
    func(this[i]);
  }
}; 

Array.prototype.myMap = function (func) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(func(this[i]));
  }
  return result;
}; 

Array.prototype.myReduce = function (func, initial) {
  arr = this;
  
  if (initial === undefined) {
    initial = arr.shift();
  }
  
  arr.myEach (el => initial = func(initial, el));
  
  return initial;
};
