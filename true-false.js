// Truthy values:
// if (true)
// if ({})
// if ([])
// if (42)
// if ("0")
// if ("false")
// if (new Date())
// if (-42)
// if (12n)
// if (3.14)
// if (-3.14)
// if (Infinity)
// if (-Infinity)

// Falsy Values:
// if (false)
// if (null)
// if (undefined)
// if (0)
// if (-0)
// if (0n)
// if (NaN)
// if ("")

let age = '';
if(age){
    console.log('Condition is true');
}else{
    console.log('Condition is false');
}