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
    let runDifferenceCheck = true;
    let max;
    let min;
    if (!numbers || numbers.length < 1) {
        runDifferenceCheck = false;
        return undefined;
    }
    else {
        for (let number of numbers) {
            if (Number.isNaN(Number(number))) {
                runDifferenceCheck = false;
                return undefined;
                break;
            }
        }
    }
    if (runDifferenceCheck) {
        max = Math.max(...numbers);
        min = Math.min(...numbers);
        return max - min;
    }
}

function max(number) {
    let runMaxCheck = true;;
    if (!number || number.length < 3 || number.length % 2 === 0) {
        runMaxCheck = false;
        return undefined;
    }
    else {
        for (let index of number) {
            if (Number.isNaN(Number(index))) {
                runMaxCheck = false;
                return undefined;
                break;
            }
        }
    }
    if (runMaxCheck) {
        const max = Math.max(number[0], number[(number.length - 1) / 2], number[number.length - 1]);
        return max;
    }
}

function middle(values) {
    if (!values || values.length < 3 || values.length % 2 === 0) {
        return values = [];
    }
    else {
        let array = [];
        let middle = (values.length - 1) / 2;
        array.push(values[middle - 1], values[middle], values[middle + 1]);
        return array;
    }
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
