let str = "ProGrad";
let len = str.length;
let rev = [];
let index = 0;
for (let i = len - 1; i >= 0; i--) {
    rev.push(str[i]);
}
rev = rev.join('');

console.log(rev);