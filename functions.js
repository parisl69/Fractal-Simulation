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
 * Clears the canvas and draws a fresh new simulation
 */
 function drawSimulation(randomize=false) {

    let context = canvas.getContext('2d');
    context.clearRect(0, 0, canvasWidth, canvasHeight);

    // if randomization is required
    if (randomize) {
    //  Define a random container
        container = [];
        for (i=0; i<containerPoints; i++) {
            container.push(
                [ randomInt(0,canvasWidth), randomInt(0,canvasHeight) ]
            );
        }

        // Calculate the first random point for our simulation
        currentPoint = [
            randomInt(0, canvasWidth),
            randomInt(0, canvasHeight)
        ];
        // Save this for later
        firstRandomPoint = currentPoint;
    }


    // Run the simulation for 10000 steps
    for (j=0; j<simulationSteps; j++) {
        const dice = randomInt(1,containerPoints);
        // random triangle selected
        const refPoint = container[Object.keys(container)[dice-1]];
        // Declare new current point coordinates
        let newX= (currentPoint[0] + refPoint[0])/nextPointFraction;
        let newY= (currentPoint[1] + refPoint[1])/nextPointFraction; 
        currentPoint = [ parseInt(newX), parseInt(newY) ];
        drawPoint(currentPoint, smallPoint, "", pointColor);
    }
    // Draw the container points
    var counter=1;
    container.forEach(element => {
        drawPoint(element, bigPoint, counter++, containterPointColor);
    });

    // Draw thw first point in random position
    drawPoint(firstRandomPoint, bigPoint, "Start", randomPointColor);

}
