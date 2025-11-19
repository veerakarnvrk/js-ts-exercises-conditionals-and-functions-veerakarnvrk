// TODO-04: Write if/else if to check and print:
// Divisible by both 3 and 5 → "FizzBuzz"
// Divisible by only 3 → "Fizz"
// Divisible by only 5 → "Buzz"
// Otherwise → "Not divisible by 3 or 5"

// TODO BONUS: Rewrite with if

const num2 = 15;
let result = "";

// แนวคิดคือการสร้างคำว่า "Fizz" และ "Buzz" แยกกัน
// ถ้าหารด้วย 3 ลงตัว ให้เพิ่ม "Fizz" เข้าไป
if (num2 % 3 === 0) {
    result += "Fizz";
}

// ถ้าหารด้วย 5 ลงตัว ให้เพิ่ม "Buzz" เข้าไป
// หาก num2 หารด้วย 3 และ 5 ลงตัว จะได้ "Fizz" + "Buzz" = "FizzBuzz"
if (num2 % 5 === 0) {
    result += "Buzz";
}

// ถ้าตัวแปร result ยังว่างเปล่า (หมายถึงไม่ได้เป็น Fizz หรือ Buzz)
// ให้กำหนดค่าเริ่มต้น
if (result === "") {
    result = "Not divisible by 3 or 5";
}

// พิมพ์ผลลัพธ์สุดท้าย
console.log(result);

// ผลลัพธ์สำหรับ num2 = 15 คือ "FizzBuzz"