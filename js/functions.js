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
};

/**
 * point: array [0]: x, [1]: y
 * big: true: diameter 5 pixels, false: diameter 1pixel
 * label: "": nothing, "text": label
 * color: fillcolor for point and label
 */
function drawPoint( point, offset, zoom=1, big=false, label="", color="black") {
    var x = (offset[0]+point[0])*zoom;
    var y = (offset[1]+point[1])*zoom;
    var ctx = document.getElementById("myCanvas").getContext("2d");
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
};


/**
 * Clears the canvas and draws the simulation
 */
 export function drawSimulation(simulation)  {
 
    let context = simulation.canvas.getContext('2d');
    context.clearRect(0, 0, Consts.canvasWidth, Consts.canvasHeight);

    // if randomization is required
    if (simulation.randomize) {
        // reset start point
        simulation.startPoint = [
            randomInt(0, Consts.canvasWidth),
            randomInt(0, Consts.canvasHeight)
        ];
        //  Define a random container
        simulation.container = [];
        for (var i=0; i<simulation.containerPoints; i++) {
            simulation.container.push(
                [ randomInt(0,Consts.canvasWidth), randomInt(0,Consts.canvasHeight) ]
            );
        }
    }

    // Run the simulation for a predefined number of steps
    var currentPoint = simulation.startPoint;

    for (var j=0; j<Consts.simulationSteps; j++) {
        let dice = randomInt(1,simulation.containerPoints);
        // select random container point 
        let refPoint = simulation.container[ Object.keys(simulation.container)[dice-1] ];
        // Declare new current point coordinates
        let newX = ((currentPoint[0] + refPoint[0]))/simulation.nextPointFraction;
        let newY = ((currentPoint[1] + refPoint[1]))/simulation.nextPointFraction; 
        currentPoint = [ newX, newY ];
        drawPoint(currentPoint, simulation.offset, simulation.zoom, Consts.smallPoint, "", Consts.pointColor);
    }

    // Draw the container points 1,2,3,...
    var counter=1;
    simulation.container.forEach(element => {
        drawPoint(element, simulation.offset, simulation.zoom, Consts.bigPoint, counter++, Consts.containterPointColor);
    });

    // Draw the first point "Start"
    let tempPoint = simulation.startPoint;
    drawPoint(simulation.startPoint, simulation.offset, simulation.zoom, Consts.bigPoint, "Start", Consts.randomPointColor);

    return simulation;
};

