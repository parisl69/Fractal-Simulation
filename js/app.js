import * as Func from "./functions.js";

var simulation = {
    canvas: document.getElementById("myCanvas"),
    zoom: 1,
    offset: [0,0],
    container: [],
    startPoint: false,
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
    $("#zoom-level").html(simulation.zoom*100+"%");

    simulation.randomize = true;
    simulation = Func.drawSimulation(simulation);

    $("#randomize").click(function(){
        simulation.zoom=1;
        displayZoom();
        simulation.offset = [0,0];
        simulation.randomize = true;
        simulation = Func.drawSimulation(simulation);
    });

    // Zoom Buttons
    $(".zoom-button").on("click", function(e) {
        if ($(e.target).hasClass('zoom-in')) {
            // Zoom in
            simulation.zoom += Func.zoomStep;
        } else if ($(e.target).hasClass('zoom-out')) {
            // Zoom out
            simulation.zoom -= Func.zoomStep;
        } else {
            // Zoom reset & offset too
            simulation.zoom=1;
            simulation.offset = [0,0];
        }
        displayZoom();
        simulation.randomize = false;
        simulation = Func.drawSimulation(simulation);
    });
 
    // Pan Buttons
    $(".pan-button").on("click", function(e) {
        if ($(e.target).hasClass('pan-up')) {
            simulation.offset[1] += 10;
        } else if ($(e.target).hasClass('pan-down')) {
            simulation.offset[1] -= 10;
        } else if ($(e.target).hasClass('pan-left')) {
            console.log("Left");
            simulation.offset[0] += 10;
        } else {
            simulation.offset[0] -= 10;
        }
        displayZoom();
        simulation.randomize = false;
        simulation = Func.drawSimulation(simulation);
    });


    $("#numberOfContainerPoints").change(function(){
        var n = parseInt( $(this).val() );
        simulation.containerPoints = n>10 ? 10 : (n<3 ? 3 : n);
        $("#numberOfContainerPoints").val(simulation.containerPoints);
        simulation.randomize = true;
        simulation = Func.drawSimulation(simulation);
    });

    $("#nextPointFraction").change(function(){
        var n = parseInt( $(this).val() );
        simulation.nextPointFraction = n>5 ? 5 : (n<2 ? 2 : n);
        $("#nextPointFraction").val(simulation.nextPointFraction);
        simulation.randomize = false;
        simulation = Func.drawSimulation(simulation);
    });
    
});

function displayZoom() {
    var value = (simulation.zoom*100).toLocaleString( undefined, { fractionDigits: 2 } );
    $("#zoom-level").html(value+"%");
};
