// ตัวอย่างการใช้ for loop พื้นฐาน
for (let i = 1; i <= 4; i++) {
  console.log("รอบที่: " + i);
}
// Output:
// รอบที่: 1
// รอบที่: 2
// รอบที่: 3
// รอบที่: 4

// การคำนวณหาผลรวมของเลข 1 ถึง 15
let sum = 0;
for (let i = 1; i <= 15; i++) {
  sum += i;
}
console.log("ผลรวมของ 1 ถึง 15 คือ: " + sum); // 120

// การวนลูปแสดงผลค่าในอาร์เรย์
let fruits = ["🍍", "🍓", "🍉"];
for (let i = 0; i < fruits.length; i++) {
  console.log("ผลไม้: " + fruits[i]);
}
// Output:
// ผลไม้: 🍍
// ผลไม้: 🍓
// ผลไม้: 🍉

// การหาผลรวมของอาร์เรย์ตัวเลข
let numbers = [5, 10, 15, 20];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log("ผลรวมของตัวเลขในอาร์เรย์: " + total); // 50

// การใช้ break ออกจากลูป
for (let i = 1; i <= 5; i++) {
  if (i === 4) {
    break; // ออกจาก loop เมื่อ i = 4
  }
  console.log(i);
}
// Output:
// 1
// 2
// 3

// การใช้ continue ข้ามรอบที่กำหนด
for (let i = 1; i <= 5; i++) {
  if (i === 4) {
    continue; // ข้ามรอบที่ i = 4
  }
  console.log(i);
}
// Output:
// 1
// 2
// 3
// 5

// การใช้ Nested for loop
for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}
// Output:
// i = 1, j = 1
// i = 1, j = 2
// i = 1, j = 3
// i = 2, j = 1
// i = 2, j = 2
// i = 2, j = 3
