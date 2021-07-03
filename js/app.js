import * as Func from "./functions.js";

var simulation = {
    canvas: document.getElementById("myCanvas"),
    container: [],
    containerPoints: 3,
    nextPointFraction: 2,
    randomize: true
};

//var canvas = document.getElementById("myCanvas");
simulation.canvas.setAttribute("width", Func.canvasWidth);
simulation.canvas.setAttribute("height", Func.canvasHeight);

$( document ).ready(function() {
  
    $("#numberOfContainerPoints").val(simulation.containerPoints);
    $("#nextPointFraction").val(simulation.nextPointFraction);
    simulation.randomize = true;
    simulation.container = Func.drawSimulation(simulation);

    $("#randomize").click(function(){
        simulation.randomize = true;
        simulation.container = Func.drawSimulation(simulation);
    });

    $("#numberOfContainerPoints").change(function(){
        var n = parseInt( $(this).val() );
        simulation.containerPoints = n>10 ? 10 : (n<3 ? 3 : n);
        $("#numberOfContainerPoints").val(simulation.containerPoints);
        simulation.randomize = true;
        simulation.container = Func.drawSimulation(simulation);
    });

    $("#nextPointFraction").change(function(){
        var n = parseInt( $(this).val() );
        simulation.nextPointFraction = n>5 ? 5 : (n<2 ? 2 : n);
        $("#nextPointFraction").val(simulation.nextPointFraction);
        simulation.randomize = false;
        simulation.container = Func.drawSimulation(simulation);
    });
    
});
