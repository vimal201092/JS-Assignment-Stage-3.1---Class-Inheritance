class shape{
    constructor(){
        this.color = "red";
    }
    drawShape(){
    console.log("drawing a shape");
    }
    calculateArea(){
        console.log("don;t know area of unknown Shape");
        return 0;
    }
}
module.exports = shape;