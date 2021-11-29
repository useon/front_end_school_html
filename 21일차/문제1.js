let result = 0;

for (let x = 0; x < 101; x++) {
    // console.log(x);
    if (x % 3 == 0 || x % 5 == 0) {
        // console.log(x);
        result += x // result = result + x
    }
}

console.log(result);