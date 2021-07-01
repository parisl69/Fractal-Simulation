import * as Func from "./functions.js";

var simulation = {
    container: [],
    containerPoints: 3,
    nextPointFraction: 2 
};

console.log(simulation);

var canvas = document.getElementById("myCanvas");
canvas.setAttribute("width", Func.canvasWidth);
canvas.setAttribute("height", Func.canvasHeight);

$( document ).ready(function() {
  
    $("#numberOfContainerPoints").val(simulation.containerPoints);
    $("#nextPointFraction").val(simulation.nextPointFraction);
    simulation.container = Func.drawSimulation(Func.RANDOMIZE_SIMULATION, simulation);

    $("#randomize").click(function(){
        simulation.container = Func.drawSimulation(Func.RANDOMIZE_SIMULATION, simulation);
    });

    $("#numberOfContainerPoints").change(function(){
        var n = parseInt( $(this).val() );
        simulation.containerPoints = n>10 ? 10 : (n<3 ? 3 : n);
        $("#numberOfContainerPoints").val(simulation.containerPoints);
        simulation.container = Func.drawSimulation(Func.RANDOMIZE_SIMULATION, simulation);
    });

    $("#nextPointFraction").change(function(){
        var n = parseInt( $(this).val() );
        simulation.nextPointFraction = n>5 ? 5 : (n<2 ? 2 : n);
        $("#nextPointFraction").val(simulation.nextPointFraction);
        simulation.container = Func.drawSimulation(Func.DO_NOT_RANDOMIZE_SIMULATION, simulation);
    });
    
});
