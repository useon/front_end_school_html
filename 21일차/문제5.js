// 1. 
let value = [1, 3, 4, 8, 13, 17, 20];

for (let i = 1; i < value.length; i++) {
    console.log(value[i - 1], value[i])
}

/* 또는 

for (let i = 0; i < value.length - 1; i++) {
    console.log(value[i], value[i + 1])
}

*/

// 2. 
let value = [1, 3, 4, 8, 13, 17, 20, 21, 28];
let temp = value[1] - value[0]
let result = 0

for (let i = 0; i < value.length - 1; i++) {
    if (tamp < (value[i - 1] - value[i]))) {
        result = temp;
    }
}

console.log(result)