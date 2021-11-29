// 구글 입사 문제 (더 간단하게 풀 수 있지만 ~ 일단 우리가 배운걸로만 풀기!)

let text = '';
let count = 0;

for (let i = 0; i < 10001; i++) {
    text += i;
}
// console.log(text);
for (let i = 0; i < text.length; i++) {
    if (text[i] == '8') {
        count += 1;
    }
}

console.log(count);