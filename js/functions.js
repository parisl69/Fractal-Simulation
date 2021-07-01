import * as Consts from "./consts.js";
export * from "./consts.js";

/**
 * 
 * @param min 
 * @param max 
 * @returns a random integer between min and max 
 */
function randomInt(min, max) {
    return Math.floor(Math.random() * max) + min;
}

/**
 * point: array [0]: x, [1]: y
 * big: true: diameter 5 pixels, false: diameter 1pixel
 * label: "": nothing, "text": label
 * color: fillcolor for point and label
 */
function drawPoint( point, big=false, label="", color="black") {
    var x = point[0];
    var y = point[1];
    var ctx = document.getElementById("myCanvas").getContext("2d");
    //ctx.scale(1,1);
    ctx.beginPath();
    ctx.fillStyle = color;
    if (!big) {
        ctx.arc(x, y, .5, 0, 2 * Math.PI);
        ctx.fill();
    } else {
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();
    }
    if (label!="") {
        ctx.font = "14px Arial";
        ctx.textAlign = "center"
        ctx.fillText(label, x, y-10);
    }
}


/**
 * Clears the canvas and draws the simulation
 */
 export function drawSimulation( randomize, simulation)  {
 
    let container=simulation.container;
    let containerPoints=simulation.containerPoints;
    let nextPointFraction=simulation.nextPointFraction;

    let context = document.getElementById("myCanvas").getContext('2d');
    context.clearRect(0, 0, Consts.canvasWidth, Consts.canvasHeight);

    // if randomization is required
    if (randomize) {
        //  Define a random container
        container = [];
        for (var i=0; i<containerPoints; i++) {
            container.push(
                [ randomInt(0,Consts.canvasWidth), randomInt(0,Consts.canvasHeight) ]
            );
        }
    }

    // Calculate the first random point for our simulation
    var currentPoint = [
        randomInt(0, Consts.canvasWidth),
        randomInt(0, Consts.canvasHeight)
    ];

    // Save this for later
    var firstRandomPoint = currentPoint;

    // Run the simulation for a predefined number of steps
    for (var j=0; j<Consts.simulationSteps; j++) {
        let dice = randomInt(1,containerPoints);
        // select random container point 
        let refPoint = container[ Object.keys(container)[dice-1] ];
        // Declare new current point coordinates
        let newX= (currentPoint[0] + refPoint[0])/nextPointFraction;
        let newY= (currentPoint[1] + refPoint[1])/nextPointFraction; 
        currentPoint = [ parseInt(newX), parseInt(newY) ];
        drawPoint(currentPoint, Consts.smallPoint, "", Consts.pointColor);
    }

    // Draw the container points 1,2,3,...
    var counter=1;
    container.forEach(element => {
        drawPoint(element, Consts.bigPoint, counter++, Consts.containterPointColor);
    });

    // Draw the first point "Start"
    drawPoint(firstRandomPoint, Consts.bigPoint, "Start", Consts.randomPointColor);

    return container;
}
