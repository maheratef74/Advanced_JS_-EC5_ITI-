var accessorGenerator = {

 getSetGen: function () {
  for (var prop in this) {

    if (typeof this[prop] === "function") continue;

    this["get" + prop[0].toUpperCase() + prop.slice(1)] = function () {
      return this[prop];
    };

    this["set" + prop[0].toUpperCase() + prop.slice(1)] = function (value) {
      this[prop] = value;
    };
  }
}

};


var obj = {
  id: "SD-10",
  location: "SV",
  addr: "123 st.",
  getSetGen: accessorGenerator.getSetGen
};

obj.getSetGen();

obj.setLocation("CA");
console.log(obj.getLocation());


var user = {
  name: "Ali",
  age: 10
};

accessorGenerator.getSetGen.call(user);

console.log(user.getName()); 
user.setAge(20);
console.log(user.getAge());  
