console.log("bla, bla, <eatable> something <a b c>".match(/<([^><]+)>/))

let str = "bla, bla, <eatable> something <a b c>"
let reg = /<([^><]+)>/gi;

console.log(reg.exec(str), reg.exec(str))
