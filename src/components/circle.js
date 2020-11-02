const shape = require('./shape');


class circle extends shape {
    constructor(){
        super();
    }
    calculateArea(){
        console.log("Area of circle with color"+this.color);
        return 3.14*5*5;
    }
 }
 module.exports = circle;
