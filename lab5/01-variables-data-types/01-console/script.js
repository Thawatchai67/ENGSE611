function printOutput(message) {
    let outputDiv = document.getElementById("output");
    let p = document.createElement("p");
    p.textContent = message;
    p.classList.add("log");
    outputDiv.appendChild(p);
}

const personA = "ต้ม";
let personB = "ตุ๋น";

printOutput("Greeting: " + "สวัสดีโลก!");
printOutput("Calculation: " + (15 * 3));
printOutput("Result: " + (45.67 + 12.33));
printOutput("คนที่หนึ่ง: " + personA);
printOutput("คนที่สอง: " + personB);
