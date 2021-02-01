const students = [
    {id:1, name: "Manna"},
    {id:2, name: "DeepJol"},
    {id:3, name: "Omar Sunny"},
    {id:4, name: "BappaRaj"},
];
const names = [];

for(let i=0;i<students.length;i++){
    let element = students[i].name;
    names.push(element);
}
const name2 = students.map(element => element.name);
const ids = students.filter(element => element.id % 2 == 0);
const ids2 = students.find(element => element.id > 2);
console.log(ids2);
