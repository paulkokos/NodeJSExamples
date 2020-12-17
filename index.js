var rect = require('./Rectangle.js');

var rect = {
	perimeter: (x,y) => (2*(x+y)),
	area:(x,y) => (x*y)
};

function solveRectangle(l,b) {
	console.log("Soving for rectangle with l= "+ l + "and b="+b);


	if ( l<=0 || b <=0 ) {
		console.log("Rectangle dimentions should be greater that zero: l="+l + "and b= " +b);
	}else {
		console.log("The area of the rectangle is " + rect.area(l,b));
		console.log("The perimeter of the rectangle is "+ rect.perimeter(l,b));
	}

}
solveRectangle(2,4);
solveRectangle(3,5);
solveRectangle(0,5);
solveRectangle(-3,5);
