"use strict";
//функция суммы, первое задание, в традиционном виде(function declaration)
function traditionalSum(term, previous = 0) {
  if (term) {
    return addendum => traditionalSum(addendum, term + previous);
  } else {
    return previous;
  }
}

// стрелочной функцией.

const sum = (add, pre = 0) => (add ? arg => sum(arg, add + pre) : pre);

//Второе задание
// лично я считаю плохим тоном изменять переданный массив, но вот реализация с помощью splice
shift = (array, direction, n) =>
  array.splice(0, array.length, ...array.splice(n * -direction).concat(array));

//Реализация с помощью shift/unshift push/pop

function shiftSecondVersion(array, direction, n) {
  if (direction == 1) {
    for (let i = n; i > 0; i--) {
      array.unshift(array.pop());
    }
  } else {
    for (let i = n; i > 0; i--) {
      array.push(array.shift());
    }
  }
}

// Третье задание
function reversePrint(someList) {
  let array = [],
    temp = someList;
  while (temp) {
    array.unshift(temp.value);
    temp = temp.next;
  }
  return array;
}
