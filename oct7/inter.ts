type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
};

const carYear: CarYear = 2000
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const cars: Car = {
  year: carYear,
  type: carType,
  model: carModel
};
console.log(cars);