function checkType(expectedType, inputValue, fieldName) {
    if (typeof inputValue !== expectedType) {
        throw new TypeError(`${fieldName} must be ${expectedType}`);
    }
}

function Vehicle(vehicleSpeed, vehicleColor) {
    checkType("number", vehicleSpeed, "Speed");
    checkType("number", vehicleColor, "Color");

    let privateSpeed = vehicleSpeed;
    let privateColor = vehicleColor;
    let isEngineStarted = false;

    Object.defineProperty(this, "speed", {
        get() {
            return privateSpeed;
        },
        set(newSpeed) {
            checkType("number", newSpeed, "Speed");
            privateSpeed = newSpeed;
        },
    });

    Object.defineProperty(this, "color", {
        get() {
            return privateColor;
        },
        set(newColor) {
            checkType("number", newColor, "Color");
            privateColor = newColor;
        },
    });

    this._isStarted = function () {
        return isEngineStarted;
    };

    this.start = function () {
        isEngineStarted = true;
        return true;
    };

    this.stop = function () {
        isEngineStarted = false;
        return false;
    };
}

Vehicle.prototype.turnLeft = function () {
    console.log("Turn Left");
};

Vehicle.prototype.turnRight = function () {
    console.log("Turn Right");
};

Vehicle.prototype.goForward = function (speed, acceleration) {
    checkType("number", speed, "Speed");
    checkType("number", acceleration, "Accel");

    this.speed += speed + acceleration;
};

Vehicle.prototype.goBackward = function (speed, acceleration) {
    checkType("number", speed, "Speed");
    checkType("number", acceleration, "Accel");

    this.speed -= speed + acceleration;
};

Vehicle.prototype.toString = function () {
    return `Vehicle | Speed: ${this.speed} | Color: ${this.color}`;
};

Vehicle.prototype.valueOf = function () {
    return this.speed;
};

function Bicycle(bicycleSpeed, bicycleColor) {
    Vehicle.call(this, bicycleSpeed, bicycleColor);
}

Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;

Bicycle.prototype.ringBell = function () {
    console.log("Ring Ring");
};

Bicycle.prototype.toString = function () {
    return `Bicycle | Speed: ${this.speed}`;
};

function MotorVehicle(motorSpeed, motorColor, engineSize, licensePlate) {
    Vehicle.call(this, motorSpeed, motorColor);

    checkType("number", engineSize, "Engine Size");
    checkType("string", licensePlate, "License Plate");

    let privateEngineSize = engineSize;
    let privateLicensePlate = licensePlate;

    Object.defineProperty(this, "engineSize", {
        get() {
            return privateEngineSize;
        },
    });

    Object.defineProperty(this, "licensePlate", {
        get() {
            return privateLicensePlate;
        },
    });
}

MotorVehicle.prototype = Object.create(Vehicle.prototype);
MotorVehicle.prototype.constructor = MotorVehicle;

MotorVehicle.prototype.getSizeOfEngine = function () {
    return this.engineSize;
};

MotorVehicle.prototype.getLicensePlate = function () {
    return this.licensePlate;
};

MotorVehicle.prototype.toString = function () {
    return `MotorVehicle | Engine: ${this.engineSize}`;
};

function Car(carSpeed, carColor, engineSize, licensePlate, numberOfDoors, numberOfWheels, carWeight) {
    MotorVehicle.call(this, carSpeed, carColor, engineSize, licensePlate);

    checkType("number", numberOfDoors, "Doors");
    checkType("number", numberOfWheels, "Wheels");
    checkType("number", carWeight, "Weight");

    let privateDoors = numberOfDoors;
    let privateWheels = numberOfWheels;
    let privateWeight = carWeight;

    Object.defineProperty(this, "doors", {
        get() {
            return privateDoors;
        },
    });

    Object.defineProperty(this, "wheels", {
        get() {
            return privateWheels;
        },
    });

    Object.defineProperty(this, "weight", {
        get() {
            return privateWeight;
        },
    });
}

Car.prototype = Object.create(MotorVehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.switchOnAirCon = function () {
    console.log("Air Conditioning ON");
};

Car.prototype.getNumOfDoors = function () {
    return this.doors;
};

Car.prototype.toString = function () {
    return `Car | Doors: ${this.doors} | Speed: ${this.speed}`;
};

function DumpTruck(truckSpeed, truckColor, engineSize, licensePlate, loadCapacity, numberOfWheels, truckWeight) {
    MotorVehicle.call(this, truckSpeed, truckColor, engineSize, licensePlate);

    checkType("number", loadCapacity, "Capacity");
    checkType("number", numberOfWheels, "Wheels");
    checkType("number", truckWeight, "Weight");

    let privateCapacity = loadCapacity;
    let privateWheels = numberOfWheels;
    let privateWeight = truckWeight;

    Object.defineProperty(this, "capacity", {
        get() {
            return privateCapacity;
        },
    });

    Object.defineProperty(this, "wheels", {
        get() {
            return privateWheels;
        },
    });

    Object.defineProperty(this, "weight", {
        get() {
            return privateWeight;
        },
    });
}

DumpTruck.prototype = Object.create(MotorVehicle.prototype);
DumpTruck.prototype.constructor = DumpTruck;

DumpTruck.prototype.raiseLoad = function () {
    console.log("Load Raised");
};

DumpTruck.prototype.lowerLoad = function () {
    console.log("Load Lowered");
};

DumpTruck.prototype.toString = function () {
    return `DumpTruck | Capacity: ${this.capacity}`;
};

const bike = new Bicycle(20, 1);
bike.ringBell();
console.log(bike.toString());

const car = new Car(120, 2, 2000, "test2", 4, 4, 1500);
car.speed = 2;
console.log(car.speed);
car.switchOnAirCon();
console.log(car.toString());

const truck = new DumpTruck(80, 3, 5000, "test", 20, 8, 8000);
truck.raiseLoad();
console.log(truck.toString());

console.log(car + truck);