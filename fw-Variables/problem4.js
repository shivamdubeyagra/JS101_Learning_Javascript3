// Problem 4
// Store the name, school, grade, section, rollno and the marks scored by the student in 3 subjects
// Print the report card of the student (You can make it look nice by using some keyboard symbols )
// Explore ASCII ART (https://en.wikipedia.org/wiki/ASCII_art (Links to an external site.)) or Text Art (https://fsymbols.com/text-art/ (Links to an external site.)) for some inspiration


// student Details

const name = "Shivam Dubey";
const school = "ABC School";
const grade = "10th";
const section = "A";
const rollno = "1001";

// Student marks in 3 subjects

const subject1 = "Maths";
const subject2 = "Science";
const subject3 = "English";
const marks1 = 85;
const marks2 = 90;
const marks3 = 80;

console.log("*********************************************");
console.log("**                REPORT CARD              **");
console.log("*********************************************");
console.log(`Student Name  : ${name}`);
console.log(`School        : ${school}`);
console.log(`Grade         : ${grade}`);
console.log(`Section       : ${section}`);
console.log(`Roll No.      : ${rollno}`);
console.log("---------------------------------------------");
console.log("|  SUBJECT    |  MARKS OBTAINED  |  GRADE  |");
console.log("---------------------------------------------");
console.log(`|  Maths      |        85        |   A     |`);
console.log(`|  Science    |        90        |   A+    |`);
console.log(`|  English    |        80        |   A     |`);
console.log("---------------------------------------------");
console.log(`|  TOTAL      |        255       |    A    |`);
console.log("---------------------------------------------");