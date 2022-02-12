var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here

let arr = []
for (let i of mix) {
    arr.push(typeof(i))
}

console.log(arr)

// let arr = mix.map(item => typeof(item));
    



