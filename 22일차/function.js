for (let i = 0; i < 10; i++) {
    console.log(i)
}

let a = [10, 20, 30, 40]
for (let i of a) {
    console.log(i);
}

let x = 0;
while (x < 10) {
    console.log(x);
    x++;
}

let x = 0;
do {
    console.log(x);
    x++;
} while (x < 10);

let a = [10, 20, 30, 40];
a.forEach(e => console.log(e ** 2));

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
}

for (let i = 0; i < 10; i++) {
    if (i == 5) break;
    console.log(i);
}


// 함수
function add(x, y) {
    return x + y;
}

add(3, 5)

function mul(x, y) {
    return x * y;
}

function cal(a, b) {
    a(10, 10) + b(10, 10)
}

cal(add, mul);

//화살표함수

function add(x, y) {
    return x + y
}

let addArrow = (x, y) => x + y;

// 기명 함수
let aa = function sum(x, y) {
    return x + y
}

//
