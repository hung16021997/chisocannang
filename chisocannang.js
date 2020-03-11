let a = Number(prompt("nhập cân nặng"));
let b = Number(prompt("nhập chiều cao"));
let bmi = a / (b * b);
if (bmi < 18){
    document.write("anderweight");
} else if (bmi < 25){
    document.write("nomal");
} else  if (bmi < 30){
    document.write("overweight");
} else
    document.write("obese");

