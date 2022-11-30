// const arr = [1,2,3,4,5];

// const [a,b, ...c] = arr;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(arr);

// const obj ={a:1,boja:2, c:3}

// const {boja} = obj;
// console.log(boja);


function useState(initialValue) {
    let state = initialValue;

    function setState(currentValue) {
        state = currentValue;
    }

    return [state, setState];
}