var canvas = document.getElementById("myCanvas");

const canvasWidth = 700;
const canvasHeight = 700;
const bigPoint = true;
const containerPoints = 3;
var pointNames = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

canvas.setAttribute("width", canvasWidth);
canvas.setAttribute("height", canvasHeight);


//  Define the container
var container = [];
for (i=0; i<containerPoints; i++) {
    var p = [randomInt(0,canvasWidth), randomInt(0,canvasHeight)];
    container.push(p);
}

// Calculate the first random point inside the triangle points ABC
var currentPoint = [
    randomInt(0, canvasWidth),
    randomInt(0, canvasHeight)
];
// var insideTriangle = true;
// while (!insideTriangle) {
    // var testPoint = [ 
    //         randomInt(triangle["B"][0], triangle["C"][0]),
    //         randomInt(triangle["A"][1], triangle["C"][1])
    //     ];
    // if (isInside (triangle["A"], triangle["B"], triangle["C"], testPoint)) {
        // currentPoint = [testPoint[0], testPoint[1]]
        // insideTriangle=true;
    // }
// }

// Draw the container points
container.forEach(element => {
    console.log(element);
    drawPoint(element, bigPoint);
});
// drawPoint( triangle["A"], bigPoint, "A");
// drawPoint( triangle["B"], bigPoint, "B");
// drawPoint( triangle["C"], bigPoint, "C");

// Draw thw first random point
drawPoint( currentPoint, bigPoint, "Random");

// Run the simulation for 10000 steps
for (j=0; j<50000; j++) {
    const dice = randomInt(1,3);
    // random triangle selected
    const refPoint = triangle[Object.keys(triangle)[dice-1]];
    // Declare new current point coordinates
    let newX= (currentPoint[0] + refPoint[0])/2;
    let newY= (currentPoint[1] + refPoint[1])/2; 
    currentPoint = [ parseInt(newX), parseInt(newY) ];
    // console.log("selected point:"+dice);
    // console.log(newX, newY);
    drawPoint(currentPoint);
}
