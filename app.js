// Global variables
const canvasWidth = 700;
const canvasHeight = 700;
const bigPoint = true;
const smallPoint = false;
var containerPoints = 3;
const randomPointColor = "red";
const containterPointColor = "green";
const pointColor = "lightblue";
const simulationSteps = 100000;
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

