let input = {
    "product" : [
    {
        "variants": ["souffle","cake","ice-cream"]
        
    },
    {
         "variants": ["cherry","choco"]
    },
    {
         "variants": ["XL"]
    }
    ]
 }

//console.log(input.product[0].variants)
//input.product[0].variants.length
//solve 1
/* let output = [];
let c = 0;
let d = 0;
console.log(input.product[1].variants.length)
for (let i = 0; i < 6; i++,d++) {

    if(i==3){
        d = 0;
        c++;
    }
    output.push(input.product[0].variants[d] + " " + input.product[1].variants[c] + " " + input.product[2].variants[0]);
}*/
//console.log(output);




//solve 2



let output = [];

for (let i = 0; i < input.product[0].variants.length; i++) {
  for (let j = 0; j < input.product[1].variants.length; j++) {
    for (let k = 0; k < input.product[2].variants.length; k++) {
      let str = input.product[0].variants[i] + " " + input.product[1].variants[j] + " " + input.product[2].variants[k];
      output.push(str);
    }
  }
}

//function to sort cha 
output.sort(function (a, b) {


    // get Cherry and Choco to sort 
    let aVariant = a.split(" ")[1];
    let bVariant = b.split(" ")[1];

    //sort to output 
    if (bVariant > aVariant) {
        return -1;
    }
    if (aVariant > bVariant) {
        return 1;
    }
    return 0;

});
console.log(output);

