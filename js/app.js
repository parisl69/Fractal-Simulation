const bigPoint = true;
const smallPoint = false;
const canvasWidth = 700;
const canvasHeight = 700;
const randomPointColor = "red"; // The first point created in a random position
const containterPointColor = "green"; // Container Shape points
const pointColor = "lightblue"; // Color for the point as it moves through the iterations
const simulationSteps = 100000; // Number of iteration steps

var container = [];
var currentPoint;
var firstRandomPoint;
var containerPoints = 3; // Initial number of container points
var nextPointFraction = 2; // Next point fraction

var canvas = document.getElementById("myCanvas");

canvas.setAttribute("width", canvasWidth);
canvas.setAttribute("height", canvasHeight);

$( document ).ready(function() {
    
    $("#numberOfContainerPoints").val(containerPoints);
    $("#nextPointFraction").val(nextPointFraction);
    drawSimulation(true);

    $("#randomize").click(function(e){
        drawSimulation(true);
    });

    $("#numberOfContainerPoints").change(function(){
        n = parseInt( $(this).val() );
        containerPoints = n>10 ? 10 : (n<3 ? 3 : n);
        $("#numberOfContainerPoints").val(containerPoints);
        drawSimulation(true);
    });

    $("#nextPointFraction").change(function(){
        n = parseInt( $(this).val() );
        nextPointFraction = n>5 ? 5 : (n<2 ? 2 : n);
        $("#nextPointFraction").val(nextPointFraction);
        drawSimulation(false);
    });

});

