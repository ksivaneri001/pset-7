function commonEnd(a, b) {
    if (!a || a.length === 0 || !b || b.length === 0) {
        return false;
    }
    else if (a[0] === b[0]) {
        return true;
    }
    else if (a[a.length - 1] === b[b.length - 1]) {
        return true;
    }
    else {
        return false;
    }
}

function endsMeet(values, n) {
    if (!values || values.length < n || n < 0) {
        return values = [];
    }
    else {
        let array = [];
        for (let i = 0; i < n; i++) {
            array.push(values[i]);
        }
        for (let j = values.length - n; j < values.length; j++) {
            array.push(values[j]);
        }
        return array;
    }
}

function difference(numbers) {
    let isUndefined = false;
    let max;
    let min;
    if (!numbers || numbers.length < 1) {
        return undefined;
        isUndefined = true;
    }
    else {
        for (number of numbers) {
            if (Number.isNaN(number)) {
                return undefined;
                isUndefined = true;
            }
        }
    }
    if (isUndefined === false) {
        max = numbers[0];
        min = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > numbers[i - 1]) {
                max = numbers[i];
            }
        }
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] < numbers[i - 1]) {
                min = numbers[i];
            }
        }
        return max - min;
    }

}

function max(number) {
  // write your code here
}

function middle(values) {
  // write your code here
}

function increasing(numbers) {
  // write your code here
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
