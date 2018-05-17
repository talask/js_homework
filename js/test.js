const fruits = [
    {
        name: "orange",
        weight: 150
    },
    {
        name: "pineapple",
        weight: 500
    },
    {
        name: "kiwi",
        weight: 100
    },
    {
        name: "apple",
        weight: 250
    },
    {
        name: "pear",
        weight: 200
    },
    {
        name: "mango",
        weight: 300
    },
    {
        name: "apple",
        weight: 99
    },
    {
        name: "grapefruit",
        weight: 400
    },
    {
        name: "grapefruit",
        weight: 300
    },
    
];

for (let i of fruits) { 
    if (((i.name === 'apple') || (i.name === 'APPLE')) && (i.weight <= 100)) { 
        console.log(i.name + " " + i.weight); 
        break; 
    } 
}

for (let i of fruits) { 
    if ((i.name.toLowerCase() === 'apple') && (i.weight <= 100)) { 
        console.log(i.name + " " + i.weight); 
        break; 
    } 
}