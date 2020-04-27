const muzzu = () => {
    let a = "string a ";
   const b =() => {
        let c = "string c";
        let d = a + c;
        // console.log(d);
        return d;
    }

    // return {
    //     b : b
    // };
    return b;
}

// muzzu(); 
// b();
// muzzu();
// muzzu();
// muzzu()();
//this is simple;

let z = muzzu()();
// console.log(z);
// z is instantiated;
let f = () => {
    let g = "string g";
    let k = z + ' ' + g;
//     console.log(k);
//     console.log("this shall be shown");
}

f();

// const sana = muzzu();

// sana.b();
