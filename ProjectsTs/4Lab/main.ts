import { Transport } from "./4lab";

const owner1 = new Transport.OwnerClass("Иванов", "Константин", "Викторович", new Date(1973, 12, 20), Transport.TypeOfDocument.Passport, "1234", "567890");
const car1 = new Transport.CarImpl("Toyota", "Elysion", 2021, "QWERTYU789632", "ABC123", owner1, Transport.BodyType.Sedan, Transport.CarClass.Luxury);
const motorbike1 = new Transport.MotorbikeImpl("Эндуро ", "Kayo ", 2024, "SRFGGDFGHYHB8889", "XYZ789", owner1, "Sport", true);
    
const storage = new Transport.VehicleStorageImpl<Transport.Vehicle>();
storage.addVehicle(car1);
storage.addVehicle(motorbike1);
    
storage.getAllVehicles().forEach(vehicle => vehicle.printInfo());