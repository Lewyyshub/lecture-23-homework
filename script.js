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

let numberminus = [20,10];
function seeDiference(vaxo) {
  return vaxo.reduce((acc, cur) => {
    return acc - cur;
  });
}
let jamii = seeDiference(numberminus);
console.log(jamii);

