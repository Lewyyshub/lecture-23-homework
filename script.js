// ex 1 //
let numberss = [1, 2, 3, 4, 5];

function numbers(index) {
  return index.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
}
let sum = numbers(numberss);
console.log(sum);

// ex 2 //
let bignumbers = [2, 5, 6, 9, 11];

function findBig(numb) {
  return numb.reduce((acc, cur) => {
    if (cur > acc) {
      return cur;
    }
  });
}
let bignumber = findBig(bignumbers);
console.log(bignumber);

// ex 4 (მესამე არარის) //

let words = ["Hello", "javaScript"];

function MakeThemTogether(magic) {
  return magic.reduce((acc, cur) => {
    return acc + cur + "";
  });
}
let fullWords = MakeThemTogether(words);
console.log(fullWords);

// ex 5 //

let numbres = [1, 2, 3, 4, 5];

function multiply(numz) {
  return numz.reduce((acc, cur) => {
    return acc * cur;
  });
}
let jami = multiply(numbres);
console.log(jami);

// ex 7 (მეექვსე არარი) //

let numberminus = [20, 10];
function seeDiference(vaxo) {
  return vaxo.reduce((acc, cur) => {
    return acc - cur;
  });
}
let jamii = seeDiference(numberminus);
console.log(jamii);

// ex 8 //

let multiplye = [1, 2, 3, 4, 5];

function multiplyTwo(multiplye) {
  return multiplye.map((numb) => {
    return numb * 2;
  });
}
let results = multiplyTwo(multiplye);
console.log(results);

// ex 9 //

let strings = ["KUKLA", "DZVUCHKA", "VASHLI", "SAMIKILOLARI"];

function stringsToLowerKey(strings) {
  return strings.map((stringz) => {
    return stringz.toLowerCase();
  });
}
let newStrings = stringsToLowerKey(strings);
console.log(newStrings);

// ex 11 //

let elements = [document.createElement("p")];

elements = elements.map((element, index) => {
  element.textContent = "მე ვარ ელემენტი";
  return element;
});
let container = document.getElementById("container");
elements.map((element) => {
  container.appendChild(element);
});

// ex 12 //

let squares = [1, 2, 3, 4, 5];
function Squared(numbresz) {
  return squares.map((n) => {
    return n ** 2;
  });
}
let resu = Squared(squares);
console.log(resu);

// ex 13 //
  
// ex 14 //
let students = [
  { name: "მარიამი", score: 80 },
  { name: "გიორგი", score: 75 },
  { name: "ნინო", score: 90 },
];

students.forEach((student) => {
  student.score += 5;
});
console.log(students);

// ex 16 //

// ex 17 //
let elementz = ["ელემენტი 1", "ელემენტი 2"];
let containerr = document.getElementById("container");

for (let index = 0; index < elementz.length; index++) {
  let div = document.createElement("div");
  div.textContent = elementz[index];
  container.appendChild(div);
}

// ex 18 //

let = arrOfNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let index = 0; index < arrOfNums.length; index++) {

}

// ex 19 //

let cifrebi = [2, 11, 532, 7];

function moreThanTen(numbers) {
  return cifrebi.filter((numz) => {
    return numz > 10;
  });
}
let filtered = moreThanTen(numbers);
console.log(filtered);

// ex 20 //
let ArrOfDivs = [];

for (let index = 0; index < 6; index++) {
  let div = document.createElement("div");
  ArrOfDivs.push(div);
}
ArrOfDivs[0].classList.add("box");
ArrOfDivs[1].classList.add("yuti");
ArrOfDivs[2].classList.add("vigac");
ArrOfDivs[3].classList.add("ragac");
ArrOfDivs[4].classList.add("rame");
ArrOfDivs[5].classList.add("box");

let newArray = ArrOfDivs.filter((index) => {
  return index.classList.contains("box");
});

console.log(newArray);
