"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _4lab_1 = require("./4lab");
const owner1 = new _4lab_1.Transport.OwnerClass("Иванов", "Константин", "Викторович", new Date(1973, 12, 20), _4lab_1.Transport.TypeOfDocument.Passport, "1234", "567890");
const car1 = new _4lab_1.Transport.CarImpl("Toyota", "Elysion", 2021, "QWERTYU789632", "ABC123", owner1, _4lab_1.Transport.BodyType.Sedan, _4lab_1.Transport.CarClass.Luxury);
const motorbike1 = new _4lab_1.Transport.MotorbikeImpl("Эндуро ", "Kayo ", 2024, "SRFGGDFGHYHB8889", "XYZ789", owner1, "Sport", true);
const storage = new _4lab_1.Transport.VehicleStorageImpl();
storage.addVehicle(car1);
storage.addVehicle(motorbike1);
storage.getAllVehicles().forEach(vehicle => vehicle.printInfo());
