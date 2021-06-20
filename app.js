
const bigPoint = true;
const smallPoint = false;

// Global Parameters - change to your liking
const canvasWidth = 700;
const canvasHeight = 700;
const randomPointColor = "red"; // The first point created in a random position
const containterPointColor = "green"; // Container Shape points
const pointColor = "lightblue"; // Color for the point as it moves through the iterations
const simulationSteps = 100000; // Number of iteration steps

var containerPoints = 3;
var canvas = document.getElementById("myCanvas");
canvas.setAttribute("width", canvasWidth);
canvas.setAttribute("height", canvasHeight);

$( document ).ready(function() {
    
    $("#numberOfContainerPoints").val(containerPoints);
    drawSimulation();

    $("#randomize").click(function(e){
        drawSimulation();
    });

    $("#numberOfContainerPoints").change(function(e){
        containerPoints = parseInt( $(this).val() );
        drawSimulation();
    });

});

