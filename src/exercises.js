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
    let runMaxCheck = true;
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
    let runIncreasingCheck = true;
    let increaseCount = 0;
    if (!numbers || numbers.length < 3) {
        runIncreasingCheck = false;
        return false;
    }
    else {
        for (let index of numbers) {
            if (Number.isNaN(Number(index))) {
                runIncreasingCheck = false;
                return false;
                break;
            }
            else if (Number(index) % 1 !== 0) {
                runIncreasingCheck = false;
                return false;
                break;
            }
        }
    }
    if (runIncreasingCheck) {
        for (let i = 0; i < numbers.length - 1; i++) {
            if (numbers[i] < numbers[i + 1]) {
                increaseCount++;
            }
            else {
                increaseCount = 0;
            }
            if (increaseCount === 2) {
                break;
            }
        }
        if (increaseCount >= 2) {
            return true;
        }
        else {
            return false;
        }
    }
}

function everywhere(values, x) {
    let isEverywhere = true;
    if (!values || values.length < 1 || !x) {
        return false;
    }
    else {
        for (let i = 1; i < values.length - 1; i++) {
            if (values[i] === x || values[i - 1] === x || values[i + 1] === x) {}
            else {
                isEverywhere = false;
            }
        }
        return isEverywhere;
    }
}

function consecutive(numbers) {
    let runConsecutiveCheck = true;
    let oddCount = 0;
    let evenCount = 0;
    if (!numbers || numbers.length < 3) {
        runIncreasingCheck = false;
        return false;
    }
    else {
        for (let index of numbers) {
            if (Number.isNaN(Number(index))) {
                runConsecutiveCheck = false;
                return false;
                break;
            }
            else if (Number(index) % 1 !== 0) {
                runConsecutiveCheck = false;
                return false;
                break;
            }
        }
    }
    if (runConsecutiveCheck) {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 === 0) {
                oddCount = 0;
                evenCount++;
            }
            else if (numbers[i] % 2 === 1) {
                evenCount = 0;
                oddCount++;
            }
            if (oddCount === 3 || evenCount === 3) {
                break;
            }
        }
        if (oddCount === 3 || evenCount === 3) {
            return true;
        }
        else {
            return false;
        }
    }
}

function balance(numbers) {
    let size = 0;
    let sumFirstHalf = 0;
    let sumSecondHalf = 0;
    let count = 0;
    if (!numbers || numbers.length < 2) {
        return false;
    }
    for (let i = 0; i < numbers.length; i++) {
        if (!(Number.isInteger(numbers[i]))) {
            return false;
        }
    }
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] == undefined) {
            return true;
        }
    }
    for (let x = numbers.length; x > -1; x--) {
        sumFirstHalf = 0;
        sumSecondHalf = 0;
        for (let y = numbers.length - x; y > -1; y--) {
            sumFirstHalf += numbers[y];
        }
        for (let a = numbers.length - 1; a > numbers.length - x; a--) {
            sumSecondHalf += numbers[a];
        }
        if (sumSecondHalf == sumFirstHalf) {
            count = 1;
            return true;
        }
    }
    if (count === 0) {
        return false;
    }
}

function clumps(values) {
    let isEqual = false;
    let clumpCount = 0;
    if (!values) {
        return -1;
    }
    else {
        for (let i = 0; i < values.length - 1; i++) {
            if (values[i] === values[i + 1]) {
                isEqual = true;
            }
            else if (isEqual && values[i] !== values[i + 1]) {
                clumpCount++;
                isEqual = false;
            }
        }
        if (isEqual && values.length > 0 && values[values.length - 1] === values[values.length - 2]) {
            clumpCount++;
        }
        return clumpCount;
    }
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
