import * as Func from "./functions.js";

var container = [];
var currentPoint;
var firstRandomPoint;
var containerPoints = 3;    // Initial number of container points
var nextPointFraction = 2;  // Next point fraction

var canvas = document.getElementById("myCanvas");
canvas.setAttribute("width", Func.canvasWidth);
canvas.setAttribute("height", Func.canvasHeight);

$( document ).ready(function() {
  
    $("#numberOfContainerPoints").val(containerPoints);
    $("#nextPointFraction").val(nextPointFraction);
    container = Func.drawSimulation(true, container, currentPoint, firstRandomPoint, containerPoints, nextPointFraction);

    $("#randomize").click(function(){
        console.log(currentPoint);
        container = Func.drawSimulation(true, container, currentPoint, firstRandomPoint, containerPoints, nextPointFraction);
    });

    $("#numberOfContainerPoints").change(function(){
        console.log(currentPoint);
        var n = parseInt( $(this).val() );
        containerPoints = n>10 ? 10 : (n<3 ? 3 : n);
        $("#numberOfContainerPoints").val(containerPoints);
        container = Func.drawSimulation(true, container, currentPoint, firstRandomPoint, containerPoints, nextPointFraction);
    });

    $("#nextPointFraction").change(function(){
        console.log(currentPoint);
        var n = parseInt( $(this).val() );
        nextPointFraction = n>5 ? 5 : (n<2 ? 2 : n);
        $("#nextPointFraction").val(nextPointFraction);
        container = Func.drawSimulation(false, container, currentPoint, firstRandomPoint, containerPoints, nextPointFraction);
    });
    
});
