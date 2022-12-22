/* ====== Assignment 04 ====== */
// Problem No 01: radianToDegree
function radianToDegree(radian) {
  const degree = 57.2958;
  let result = degree * radian;
  // check typeOf
  if (typeof radian !== "number") {
    console.log("Please, Provide a number.");
  }
  return result.toFixed(2);
}
const degree = radianToDegree(10);
// Problem No 02: isJavaScriptFile
function isJavaScriptFile(fileName) {
  const fileExtension = fileName.endsWith(".js");
  // check typeOf
  if (typeof fileName !== "string") {
    console.log("Please, Provide a valid file name extension.");
  }
  return fileExtension;
}
// file name
const fileName = "app.js";
const file = isJavaScriptFile(fileName);
// Problem No 03: oilPrice
function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
  // oil rate
  const dieselRate = 114;
  const petrolRate = 130;
  const octaneRate = 135;
  // calculate oil rate
  let totalDieselPrice = dieselQuantity * dieselRate;
  let totalPetrolPrice = petrolQuantity * petrolRate;
  let totalOctanePrice = octaneQuantity * octaneRate;
  // check the typeOf
  if (
    typeof dieselQuantity !== "number" ||
    typeof petrolQuantity !== "number" ||
    typeof octaneQuantity !== "number"
  ) {
    console.log("Please, provide a valid number.");
  }
  // total oil rate
  const totalOilPrice = totalDieselPrice + totalPetrolPrice + totalOctanePrice;
  return totalOilPrice;
}
// oil quantity
const dieselQuantity = 0;
const petrolQuantity = 2;
const octaneQuantity = 3;
const totalPrice = oilPrice(dieselQuantity, petrolQuantity, octaneQuantity);
// Problem No 04: publicBusFare
function publicBusFare(passenger) {
  // fixed seat capacity
  const busCapacity = 50;
  const microCapacity = 11;
  const publicBusRate = 250;
  // after bus seat
  const remainingAfterBus = passenger % busCapacity;
  // after micro seat
  const remainingAfterMicro = remainingAfterBus % microCapacity;
  if (typeof passenger !== "number") {
    console.log("Please, provide a number.");
  }
  // cost of public bus fare
  let costOfPublicBus = remainingAfterMicro * publicBusRate;
  return costOfPublicBus;
}
// number of passenger
const passenger = 55;
const costOfBusFare = publicBusFare(passenger);
// Problem No 05: isBestFriend
function isBestFriend(friend1, friend2) {
  // check the typeOf
  if (typeof friend1 !== "object" || typeof friend2 !== "object") {
    console.log("Please, Provide an object or valid data.");
  }
  // check best friend
  if (friend1.name === friend2.friend && friend1.friend === friend2.name) {
    return true;
  } else {
    return false;
  }
}
// Friend info
let friend1 = { name: "morshed", friend: "rifat" };
let friend2 = { name: "rifat", friend: "morshed" };
const isBest = isBestFriend(friend1, friend2);
