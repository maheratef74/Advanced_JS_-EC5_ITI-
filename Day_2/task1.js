var numericSequence = {
  list: [],
  step: 0,

  init: function (start, end, step) {
    if (step === 0) {
      throw new Error("step cannot be zero");
    }

    this.list = [];
    this.step = step;

    for (var i = start; i <= end; i += step) {
      this.list.push(i);
    }

    return this; 
  },

  append: function (value) {
    var last = this.list[this.list.length - 1];

    if (this.list.indexOf(value) !== -1) {
      throw new Error("duplicated value is not allowed");
    }

    if (value !== last + this.step) {
      throw new Error("Invalid sequential value");
    }

    this.list.push(value);
  },

  prepend: function (value) {
    var first = this.list[0];

    if (this.list.indexOf(value) !== -1) {
      throw new Error("duplicated value is not allowed");
    }

    if (value !== first - this.step) {
      throw new Error("Invalid sequential value");
    }

    this.list.unshift(value);
  },

  pop: function () {
    if (!this.list.length) {
      throw new Error("Sequence is empty");
    }
    return this.list.pop();
  },

  dequeue: function () {
    if (!this.list.length) {
      throw new Error("Sequence is empty");
    }
    return this.list.shift();
  },

    display: function () {
    console.log("Current Sequence:", JSON.stringify(this.list));
    }
};

let seq = Object.create(numericSequence).init(10, 50, 10);
seq.display();
seq.append(60);
seq.display();
seq.prepend(5);
seq.display();