// Global variables
const canvasWidth = 700;
const canvasHeight = 700;
const bigPoint = true;
const smallPoint = false;
const containerPoints = 4;
const randomPointColor = "red";
const containterPointColor = "green";
const pointColor = "lightblue";
const simulationSteps = 100000;

var canvas = document.getElementById("myCanvas");
canvas.setAttribute("width", canvasWidth);
canvas.setAttribute("height", canvasHeight);


/**
 * Clears the canvas and draws a fresh new simulation
 */
function drawSimulation() {

    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvasWidth, canvasHeight);

    //  Define a random container
    var container = [];
    for (i=0; i<containerPoints; i++) {
        container.push(
            [ randomInt(0,canvasWidth), randomInt(0,canvasHeight) ]
        );
    }

    // Calculate the first random point for our simulation
    var currentPoint = [
        randomInt(0, canvasWidth),
        randomInt(0, canvasHeight)
    ];    
    // Save this for later
    var firstRandomPoint = currentPoint;
    // Run the simulation for 10000 steps
    for (j=0; j<simulationSteps; j++) {
        const dice = randomInt(1,containerPoints);
        // random triangle selected
        const refPoint = container[Object.keys(container)[dice-1]];
        // Declare new current point coordinates
        let newX= (currentPoint[0] + refPoint[0])/2;
        let newY= (currentPoint[1] + refPoint[1])/2; 
        currentPoint = [ parseInt(newX), parseInt(newY) ];
        drawPoint(currentPoint, smallPoint, "", pointColor);
    }
    // Draw the container points
    var counter=1;
    container.forEach(element => {
        drawPoint(element, bigPoint, counter++, containterPointColor);
    });

    // Draw thw first point in random position
    drawPoint(firstRandomPoint, bigPoint, "Random", randomPointColor);

}


// Run app on document load
$( document ).ready(function() {
    
    drawSimulation();
    $("#recalculate").click(function(e){
        drawSimulation();
    });


});

