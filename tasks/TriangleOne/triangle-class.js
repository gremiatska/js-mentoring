var Point = require( "./point-class.js" );
class Triangle {
    /**
     *
     * @param a <Point>
     * @param b
     * @param c
     */
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
    /*
        Triangle area formula:
        https://www.mathopenref.com/coordtrianglearea.html
     */

    area(){
        let result = Math.abs((this.a.x * (this.b.y - this.c.y)
            + this.b.x * (this.c.y - this.a.y)
            + this.c.x * (this.a.y - this.b.y)) / 2);
        if(isNaN(result) || result === 0){
            throw "Area cannot be calculated"
        }
        else {
            return result
        }
    }
}
const pointA = new Point(1,1);
const pointB = new Point(1,2);
const pointC = new Point(4,-5);
const testTriangle = new Triangle(pointA, pointB, pointC)

try {
    console.log(testTriangle.area());
} catch (e) {
    console.error(e);
}