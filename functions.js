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

/** Deprecated */


/* A utility function to calculate area of triangle formed by (x1, y1),
(x2, y2) and (x3, y3) */
/*
function area(x1, y1, x2, y2, x3, y3) {
    return Math.abs((x1*(y2-y3) + x2*(y3-y1)+ x3*(y1-y2))/2.0);
}
*/
 
/* A function to check whether point P(x, y) lies inside the triangle formed
by A(x1, y1), B(x2, y2) and C(x3, y3) */
/*
function isInside(point1, point2, point3, testpoint) {
    let x1 = point1[0];    let y1 = point1[1];
    let x2 = point2[0];    let y2 = point2[1];
    let x3 = point3[0];    let y3 = point3[1];
    let x  = testpoint[0]; let y  = testpoint[1];

    let A = area (x1, y1, x2, y2, x3, y3);
    let A1 = area (x, y, x2, y2, x3, y3);
    let A2 = area (x1, y1, x, y, x3, y3);
    let A3 = area (x1, y1, x2, y2, x, y);
    return (A == A1 + A2 + A3);
}
*/
