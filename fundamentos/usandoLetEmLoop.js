for (let i = 0; i < 10; i++) {
    console.log(i);
};
// console.log("i= ", i); // i não é visivel.


const funcs = [];
for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    });
};
funcs[2]();
funcs[3]();