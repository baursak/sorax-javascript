/*var object = Object.create({ x: 10, y: 20});  -  in this case delete operator doesn't work*/
// but using object creation via object literal - deletion works
var object = {
    x: 10,
    y: 20
};
console.log(object.x);
console.log(object.y);
delete object["x"];
console.log(object.x);