const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

// const BMI = mass / height ** 2;

const bmi = (mass, height) => {
  let BMI = mass / height ** 2;
  return BMI;
};

let markBMI = bmi(markWeight, markHeight);
let johnBMI = bmi(johnWeight, johnHeight);

let markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);
