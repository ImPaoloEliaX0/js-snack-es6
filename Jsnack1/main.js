/*
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template 
literal  */

// ARRAY 
let bikelist = [

    {
        bname: 'BIKE1',
        weight: 15
    },

    
    {
        bname: 'BIKE2',
        weight: 8
    },

   
    {
        bname: 'BIKE3',
        weight: 6
    },

    
    {
        bname: 'BIKE4',
        weight: 7
    },

    
    {
        bname: 'BIKE5',
        weight: 11
    },

    
];

console.log(bikelist);

let minBike = bikelist[0];

for (let i = 0; i < bikelist.length; i++) {
    
    if (bikelist[i].weight < minBike.weight) {
        minBike = bikelist[i];
    }
};

const {bname, weight} = minBike;

console.log(`La bici più leggera è ${bname} con peso ${weight}`);

document.getElementById('bike').innerHTML = `La bici più leggera è ${bname} con peso ${weight}`;