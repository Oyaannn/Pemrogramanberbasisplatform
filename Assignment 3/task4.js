let num = 47;
let nextNum = num + 1;
let isPrime = false;

while (!isPrime) {
    isPrime = true;
    if (nextNum < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i < nextNum; i++) {
            if (nextNum % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (!isPrime) {
        nextNum++;
    }
}

console.log('The next prime number after ' + num + ' is: ' + nextNum);