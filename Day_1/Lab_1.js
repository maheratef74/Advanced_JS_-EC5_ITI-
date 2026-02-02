var LnkdLstObj = function() {
    this.data = [];
};


LnkdLstObj.prototype._exists = function(val) {
    for (var i = 0; i < this.data.length; i++) {
        if (this.data[i].val === val) return true;
    }
    return false;
};

LnkdLstObj.prototype.enqueue = function(val) {  /// handle the enqueue to insert in the first
    if (this._exists(val)) throw new Error("duplicate value not allowed.");
    
    if (this.data.length > 0 && val > this.data[0].val) {
        throw new Error("value must be in ascending order sequence.");
    }
    this.data.unshift({ val: val });
};

LnkdLstObj.prototype.pushVal = function(val) {
    if (this._exists(val)) throw new Error("duplicate value not allowed.");
    this.data.push({ val: val });
};

LnkdLstObj.prototype.insertAt = function(val) {
    if (this._exists(val)) {
        throw new Error("value already exists in the sequence.");
    }
    for (var i = 0; i < this.data.length; i++) {
        if (this.data[i].val > val) {
            this.data.splice(i, 0, { val: val });
            return; 
        }
    }
    throw new Error("value must be in ascending order sequence."); // error message if the the val is the biggest item
};

LnkdLstObj.prototype.popVal = function() {
    return this.data.pop();
};

LnkdLstObj.prototype.removeVal = function(val) {
    for (var i = 0; i < this.data.length; i++) {
        if (this.data[i].val === val) {
            this.data.splice(i, 1);
            return ; 
        }
    }
    return "data not found"; 
};

LnkdLstObj.prototype.dequeueVal = function() {
    return this.data.shift();
};

LnkdLstObj.prototype.display = function() {
    console.log("Current List:", JSON.stringify(this.data));
};

var myList = new LnkdLstObj();
myList.pushVal(1);
myList.pushVal(3);
myList.pushVal(5);
myList.insertAt(4); 
myList.enqueue(0);
myList.display(); 

console.log(myList.removeVal(3));
myList.display();
console.log(myList.removeVal(99)); 