// TODO-04: Write if/else if to check and print:
// Divisible by both 3 and 5 → "FizzBuzz"
// Divisible by only 3 → "Fizz"
// Divisible by only 5 → "Buzz"
// Otherwise → "Not divisible by 3 or 5"

// TODO BONUS: Rewrite with if

const num = 15;
// ตรวจสอบเงื่อนไขที่เฉพาะเจาะจงที่สุด (3 และ 5) ก่อน
if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
}
// ถ้าเงื่อนไขแรกเป็นเท็จ ให้ตรวจสอบเงื่อนไขถัดไป
else if (num % 3 === 0) {
    console.log("Fizz");
}
// ถ้าเงื่อนไขที่สองเป็นเท็จ ให้ตรวจสอบเงื่อนไขถัดไป
else if (num % 5 === 0) {
    console.log("Buzz");
}
// ถ้าทุกเงื่อนไขเป็นเท็จ ให้พิมพ์ผลลัพธ์สุดท้าย
else {
    console.log("Not divisible by 3 or 5");
}

// ผลลัพธ์สำหรับ num = 15 คือ "FizzBuzz"