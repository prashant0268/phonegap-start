// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

window.screen.orientation.lock('landscape')

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var pixelRatio = 1; //window.devicePixelRatio || 1; /// get pixel ratio of device

var areaWidth = 560;
var areaHeight = 300;
var areaRatio = 1.87;

var firstTimeLoading = true;

var factor = 10;
var buffX = 200;
var buffY = 150;

//var xFact = Math.floor(windowWidth / areaWidth);
//var yFact = Math.floor(windowHeight / areaHeight);
var xFact = windowWidth / areaWidth * 0.9;
var yFact = windowHeight / areaHeight * 0.9;
var fact = xFact < yFact ? xFact : yFact;

var options = {};
var inputStr = "";
var inputArray = [];

factor = factor * fact * pixelRatio;

if (windowWidth >= areaWidth && windowHeight >= areaHeight) {
    buffX = (windowWidth - areaWidth * factor / 10) / 2;
    buffY = (windowHeight - areaHeight * factor / 10) / 2;
}

canvas.width = buffX * 2 + 14 * 4 * factor;
canvas.height = buffY * 2 + 6 * 5 * factor;

function drawRoulette() {
    context.globalAlpha = 1;
    context.rect(0, 0, canvas.width, canvas.height);
    // add linear gradient
    var grd = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    // light blue
    grd.addColorStop(0, 'green');
    // dark blue
    grd.addColorStop(1, 'green');
    context.fillStyle = grd;
    context.fill();

    var lines = [[], [], [], [], [], []];

    for (var i = 0; i < 6; i++) {
        if (i >= 4)
            drawLine(context, 1 * 4 * factor + buffX, buffY + (5 * factor * i), 13 * 4 * factor + buffX, buffY + (5 * factor * i));
        else
            drawLine(context, 1 * 4 * factor + buffX, buffY + (5 * factor * i), 14 * 4 * factor + buffX, buffY + (5 * factor * i));
    }

    drawLine(context, buffX, buffY, buffX, 3 * 5 * factor + buffY);
    drawLine(context, buffX, buffY, 4 * factor + buffX, buffY);
    drawLine(context, buffX, 1.5 * 5 * factor + buffY, 4 * factor + buffX, 1.5 * 5 * factor + buffY);
    drawLine(context, buffX, 3 * 5 * factor + buffY, 4 * factor + buffX, 3 * 5 * factor + buffY);

    drawLine(context, 14 * 4 * factor + buffX, buffY, 14 * 4 * factor + buffX, 3 * 5 * factor + buffY);

    drawLine(context, 1 * 4 * factor + buffX, buffY, 1 * 4 * factor + buffX, 5 * 5 * factor + buffY);
    drawLine(context, 2 * 4 * factor + buffX, buffY, 2 * 4 * factor + buffX, 3 * 5 * factor + buffY);
    drawLine(context, 3 * 4 * factor + buffX, buffY, 3 * 4 * factor + buffX, 3 * 5 * factor + buffY);
    drawLine(context, 4 * 4 * factor + buffX, buffY, 4 * 4 * factor + buffX, 3 * 5 * factor + buffY);

    drawLine(context, 5 * 4 * factor + buffX, buffY, 5 * 4 * factor + buffX, 4 * 5 * factor + buffY);
    drawLine(context, 6 * 4 * factor + buffX, buffY, 6 * 4 * factor + buffX, 3 * 5 * factor + buffY);
    drawLine(context, 7 * 4 * factor + buffX, buffY, 7 * 4 * factor + buffX, 3 * 5 * factor + buffY);
    drawLine(context, 8 * 4 * factor + buffX, buffY, 8 * 4 * factor + buffX, 3 * 5 * factor + buffY);

    drawLine(context, 9 * 4 * factor + buffX, buffY, 9 * 4 * factor + buffX, 4 * 5 * factor + buffY);
    drawLine(context, 10 * 4 * factor + buffX, buffY, 10 * 4 * factor + buffX, 3 * 5 * factor + buffY);
    drawLine(context, 11 * 4 * factor + buffX, buffY, 11 * 4 * factor + buffX, 3 * 5 * factor + buffY);
    drawLine(context, 12 * 4 * factor + buffX, buffY, 12 * 4 * factor + buffX, 3 * 5 * factor + buffY);

    drawLine(context, 13 * 4 * factor + buffX, buffY, 13 * 4 * factor + buffX, 5 * 5 * factor + buffY);

    drawLine(context, 3 * 4 * factor + buffX, 4 * 5 * factor + buffY, 3 * 4 * factor + buffX, 5 * 5 * factor + buffY);
    drawLine(context, 5 * 4 * factor + buffX, 4 * 5 * factor + buffY, 5 * 4 * factor + buffX, 5 * 5 * factor + buffY);
    drawLine(context, 7 * 4 * factor + buffX, 4 * 5 * factor + buffY, 7 * 4 * factor + buffX, 5 * 5 * factor + buffY);
    drawLine(context, 9 * 4 * factor + buffX, 4 * 5 * factor + buffY, 9 * 4 * factor + buffX, 5 * 5 * factor + buffY);
    drawLine(context, 11 * 4 * factor + buffX, 4 * 5 * factor + buffY, 11 * 4 * factor + buffX, 5 * 5 * factor + buffY);

    //drawLine(context, 10 * 4 * factor + buffX, buffY, 10 * 4 * factor + buffX, 155);
    //drawLine(context, 11 * 4 * factor + buffX, buffY, 11 * 4 * factor + buffX, 155);
    //drawLine(context, 12 * 4 * factor + buffX, buffY, 12 * 4 * factor + buffX, 155);

    drawCircle(context, 1.5 * 4 * factor + buffX, 0.5 * 5 * factor + buffY, 1.5 * factor, 'red', 3);

    drawCircle(context, 1.5 * 4 * factor + buffX, 1.5 * 5 * factor + buffY, 1.5 * factor, 'black', 2);
    drawCircle(context, 1.5 * 4 * factor + buffX, 2.5 * 5 * factor + buffY, 1.5 * factor, 'red', 1);

    drawCircle(context, 2.5 * 4 * factor + buffX, 0.5 * 5 * factor + buffY, 1.5 * factor, 'black', 6);

    drawCircle(context, 2.5 * 4 * factor + buffX, 1.5 * 5 * factor + buffY, 1.5 * factor, 'red', 5);
    drawCircle(context, 2.5 * 4 * factor + buffX, 2.5 * 5 * factor + buffY, 1.5 * factor, 'black', 4);

    drawCircle(context, 3.5 * 4 * factor + buffX, 0.5 * 5 * factor + buffY, 1.5 * factor, 'red', 9);
    drawCircle(context, 3.5 * 4 * factor + buffX, 1.5 * 5 * factor + buffY, 1.5 * factor, 'black', 8);
    drawCircle(context, 3.5 * 4 * factor + buffX, 2.5 * 5 * factor + buffY, 1.5 * factor, 'red', 7);

    drawCircle(context, 4.5 * 4 * factor + buffX, 0.5 * 5 * factor + buffY, 1.5 * factor, 'red', 12);
    drawCircle(context, 4.5 * 4 * factor + buffX, 1.5 * 5 * factor + buffY, 1.5 * factor, 'black', 11);
    drawCircle(context, 4.5 * 4 * factor + buffX, 2.5 * 5 * factor + buffY, 1.5 * factor, 'black', 10);

    drawCircle(context, 5.5 * 4 * factor + buffX, 0.5 * 5 * factor + buffY, 1.5 * factor, 'black', 15);
    drawCircle(context, 5.5 * 4 * factor + buffX, 1.5 * 5 * factor + buffY, 1.5 * factor, 'red', 14);
    drawCircle(context, 5.5 * 4 * factor + buffX, 2.5 * 5 * factor + buffY, 1.5 * factor, 'black', 13);

    drawCircle(context, 6.5 * 4 * factor + buffX, 0.5 * 5 * factor + buffY, 1.5 * factor, 'red', 18);
    drawCircle(context, 6.5 * 4 * factor + buffX, 1.5 * 5 * factor + buffY, 1.5 * factor, 'black', 17);
    drawCircle(context, 6.5 * 4 * factor + buffX, 2.5 * 5 * factor + buffY, 1.5 * factor, 'red', 16);

    drawCircle(context, 7.5 * 4 * factor + buffX, 0.5 * 5 * factor + buffY, 1.5 * factor, 'red', 21);
    drawCircle(context, 7.5 * 4 * factor + buffX, 1.5 * 5 * factor + buffY, 1.5 * factor, 'black', 20);
    drawCircle(context, 7.5 * 4 * factor + buffX, 2.5 * 5 * factor + buffY, 1.5 * factor, 'red', 19);

    drawCircle(context, 8.5 * 4 * factor + buffX, 0.5 * 5 * factor + buffY, 1.5 * factor, 'black', 24);
    drawCircle(context, 8.5 * 4 * factor + buffX, 1.5 * 5 * factor + buffY, 1.5 * factor, 'red', 23);
    drawCircle(context, 8.5 * 4 * factor + buffX, 2.5 * 5 * factor + buffY, 1.5 * factor, 'black', 22);

    drawCircle(context, 9.5 * 4 * factor + buffX, 0.5 * 5 * factor + buffY, 1.5 * factor, 'red', 27);
    drawCircle(context, 9.5 * 4 * factor + buffX, 1.5 * 5 * factor + buffY, 1.5 * factor, 'black', 26);
    drawCircle(context, 9.5 * 4 * factor + buffX, 2.5 * 5 * factor + buffY, 1.5 * factor, 'red', 25);

    drawCircle(context, 10.5 * 4 * factor + buffX, 0.5 * 5 * factor + buffY, 1.5 * factor, 'red', 30);
    drawCircle(context, 10.5 * 4 * factor + buffX, 1.5 * 5 * factor + buffY, 1.5 * factor, 'black', 29);
    drawCircle(context, 10.5 * 4 * factor + buffX, 2.5 * 5 * factor + buffY, 1.5 * factor, 'black', 28);

    drawCircle(context, 11.5 * 4 * factor + buffX, 0.5 * 5 * factor + buffY, 1.5 * factor, 'black', 33);
    drawCircle(context, 11.5 * 4 * factor + buffX, 1.5 * 5 * factor + buffY, 1.5 * factor, 'red', 32);
    drawCircle(context, 11.5 * 4 * factor + buffX, 2.5 * 5 * factor + buffY, 1.5 * factor, 'black', 31);

    drawCircle(context, 12.5 * 4 * factor + buffX, 0.5 * 5 * factor + buffY, 1.5 * factor, 'red', 36);
    drawCircle(context, 12.5 * 4 * factor + buffX, 1.5 * 5 * factor + buffY, 1.5 * factor, 'black', 35);
    drawCircle(context, 12.5 * 4 * factor + buffX, 2.5 * 5 * factor + buffY, 1.5 * factor, 'red', 34);

    firstTimeLoading = false;

    drawText(context, '1st 12', 'white', 1.2 * factor + 'pt Calibri', 3 * 4 * factor + buffX, 3.5 * 5 * factor + buffY + (0.5 * factor));
    drawText(context, '2nd 12', 'white', 1.2 * factor + 'pt Calibri', 7 * 4 * factor + buffX, 3.5 * 5 * factor + buffY + (0.5 * factor));
    drawText(context, '3rd 12', 'white', 1.2 * factor + 'pt Calibri', 11 * 4 * factor + buffX, 3.5 * 5 * factor + buffY + (0.5 * factor));

    drawText(context, '1 to 18', 'white', 1.2 * factor + 'pt Calibri', 2 * 4 * factor + buffX, 4.5 * 5 * factor + buffY + (1.5 * factor));
    drawText(context, 'Even', 'white', 1.2 * factor + 'pt Calibri', 4 * 4 * factor + buffX, 4.5 * 5 * factor + buffY + (1.5 * factor));
    drawText(context, 'Odd', 'white', 1.2 * factor + 'pt Calibri', 10 * 4 * factor + buffX, 4.5 * 5 * factor + buffY + (1.5 * factor));
    drawText(context, '19 to 36', 'white', 1.2 * factor + 'pt Calibri', 12 * 4 * factor + buffX, 4.5 * 5 * factor + buffY + (1.5 * factor));

    context.rect(1 * 4 * factor + buffX, buffY, 12 * 4 * factor, 3 * 5 * factor);
    // add linear gradient
    var grd = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    // light blue

    grd.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
    // dark blue
    grd.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
    context.fillStyle = grd;
    context.fill();

    drawRectangle(context, 5 * 4 * factor + buffX + (0.5 * factor), 4.5 * 5 * factor + buffY, 'red');
    drawRectangle(context, 7 * 4 * factor + buffX + (0.5 * factor), 4.5 * 5 * factor + buffY, 'black');

    drawInputButtons();
}

function redrawRoulette() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawRoulette();
    drawInputArray();
    drawInputStr(inputStr);
}

function calculateResults() {


    //var line = ",1,4,5,8,3,0,1,2,4,5,6,7,8,0,1,4,0,1,2,6,";

    var seed;

    if (inputArray.length == 3) {
        redrawRoulette();
        seed = "," + inputArray.join(",") + ",";
    } else {
        return;
        //seed = ",15,23,25,";
    }
    //seed = ",15,23,25,";
    //seed = ",0,1,2,";

    var res = {};
    res.numbers = [];

    var startIndex = 0;
    var index=0, count=0;
    var before, after;
    var c00=0, c0=0, c1=0, c2=0, c3=0, c4=0, c5=0, c6=0, c7=0, c8=0, c9=0, c10=0, c11=0, c12=0, c13=0, c14=0, c15=0, c16=0, c17=0, c18=0, c19=0, c20=0, c21=0, c22=0, c23=0, c24=0, c25=0, c26=0, c27=0, c28=0, c29=0, c30=0, c31=0, c32=0, c33=0, c34=0, c35=0, c36=0;
    var cOdd = 0, cEven = 0, cRed = 0, cBlack = 0, c1to18 = 0, c19to36 = 0, c1to12 = 0, c13to24 = 0, c25to36 = 0;

    var beforeafter = [];

    var found = true;
    while (found == true) {
        index = line.indexOf(seed, startIndex);
        if (index > 0) {
            before = line.substring(0, index);
            before = before.substring(before.lastIndexOf(',') + 1, before.lastIndexOf(',') + before.length - before.lastIndexOf(','));
            beforeafter.push(before);
            //console.log("before  is : " + before);
            after = line.substring(index + seed.length, line.indexOf(",", index + seed.length));
            beforeafter.push(after);
            //console.log("after  is : " + after);
            count++;
            startIndex = index + 1;
            //Console.WriteLine("Index is : " + index);
        }
        else {
            found = false;
        }
    }

    for(var iCntr = 0; iCntr < beforeafter.length; iCntr++) {
        var nmbr = beforeafter[iCntr];
        if (nmbr != "00" && nmbr != "0")
        {
            var val = parseInt(nmbr);
            if (val % 2 == 0)
            {
                cEven++;
            }
            else {
                cOdd++;
            }
            if (val <= 18)
            {
                c1to18++;
                if (val % 2 == 0)
                {
                    cRed++;
                }
                else
                {
                    cBlack++;
                }
            }
            else {
                c19to36++;
                if (val % 2 == 0)
                {
                    cBlack++;
                }
                else
                {
                    cRed++;
                }
            }
            if (val >= 1 && val <= 12) {
                c1to12++;
            }
            if (val >= 13 && val <= 24)
            {
                c13to24++;
            }
            if (val >= 25 && val <= 36)
            {
                c25to36++;
            }

        }
        switch (nmbr)
        {
            case "00":
                c00++;
                break;
            case "0":
                c0++;
                break;
            case "1":
                c1++;
                break;
            case "2":
                c2++;
                break;
            case "3":
                c3++;
                break;
            case "4":
                c4++;
                break;
            case "5":
                c5++;
                break;
            case "6":
                c6++;
                break;
            case "7":
                c7++;
                break;
            case "8":
                c8++;
                break;
            case "9":
                c9++;
                break;
            case "10":
                c10++;
                break;
            case "11":
                c11++;
                break;
            case "12":
                c12++;
                break;
            case "13":
                c13++;
                break;
            case "14":
                c14++;
                break;
            case "15":
                c15++;
                break;
            case "16":
                c16++;
                break;
            case "17":
                c17++;
                break;
            case "18":
                c18++;
                break;
            case "19":
                c19++;
                break;
            case "20":
                c20++;
                break;
            case "21":
                c21++;
                break;
            case "22":
                c22++;
                break;
            case "23":
                c23++;
                break;
            case "24":
                c24++;
                break;
            case "25":
                c25++;
                break;
            case "26":
                c26++;
                break;
            case "27":
                c27++;
                break;
            case "28":
                c28++;
                break;
            case "29":
                c29++;
                break;
            case "30":
                c30++;
                break;
            case "31":
                c31++;
                break;
            case "32":
                c32++;
                break;
            case "33":
                c33++;
                break;
            case "34":
                c34++;
                break;
            case "35":
                c35++;
                break;
            case "36":
                c36++;
                break;
        }
    }

    if (c1 > 0)
        res.numbers.push("1," + c1);
    if (c2 > 0)
        res.numbers.push("2," + c2);
    if (c3 > 0)
        res.numbers.push("3," + c3);
    if (c4 > 0)
        res.numbers.push("4," + c4);
    if (c5 > 0)
        res.numbers.push("5," + c5);
    if (c6 > 0)
        res.numbers.push("6," + c6);
    if (c7 > 0)
        res.numbers.push("7," + c7);
    if (c8 > 0)
        res.numbers.push("8," + c8);
    if (c9 > 0)
        res.numbers.push("9," + c9);
    if (c10 > 0)
        res.numbers.push("10," + c10);
    if (c11 > 0)
        res.numbers.push("11," + c11);
    if (c12 > 0)
        res.numbers.push("12," + c12);
    if (c13 > 0)
        res.numbers.push("13," + c13);
    if (c14 > 0)
        res.numbers.push("14," + c14);
    if (c15 > 0)
        res.numbers.push("15," + c15);
    if (c16 > 0)
        res.numbers.push("16," + c16);
    if (c17 > 0)
        res.numbers.push("17," + c17);
    if (c18 > 0)
        res.numbers.push("18," + c18);
    if (c19 > 0)
        res.numbers.push("19," + c19);
    if (c20 > 0)
        res.numbers.push("20," + c20);
    if (c21 > 0)
        res.numbers.push("21," + c21);
    if (c22 > 0)
        res.numbers.push("22," + c22);
    if (c23 > 0)
        res.numbers.push("23," + c23);
    if (c24 > 0)
        res.numbers.push("24," + c24);
    if (c25 > 0)
        res.numbers.push("25," + c25);
    if (c26 > 0)
        res.numbers.push("26," + c26);
    if (c27 > 0)
        res.numbers.push("27," + c27);
    if (c28 > 0)
        res.numbers.push("28," + c28);
    if (c29 > 0)
        res.numbers.push("29," + c29);
    if (c30 > 0)
        res.numbers.push("30," + c30);
    if (c31 > 0)
        res.numbers.push("31," + c31);
    if (c32 > 0)
        res.numbers.push("32," + c32);
    if (c33 > 0)
        res.numbers.push("33," + c33);
    if (c34 > 0)
        res.numbers.push("34," + c34);
    if (c35 > 0)
        res.numbers.push("35," + c35);
    if (c36 > 0)
        res.numbers.push("36," + c36);

    res.black = cBlack;
    res.even = cEven;
    res.n19to36 = c19to36;
    res.n1st12 = c1to12;
    res.n1to18 = c1to18;
    res.n2nd12 = c19to36;
    res.n3rd12 = c25to36;
    res.odd = cOdd;
    res.red = cRed;

    options = res;

    drawResults();
}

function drawResults() {

    for (var i = 0; i < options.numbers.length; i++) {
        var arrPoints = options.numbers[i].split(',');
        drawArea(context, arrPoints[0], arrPoints[1]);
    }
    setTimeout(drawProbability(context, 5 * 4 * factor + buffX, 3 * 5 * factor + buffY, options.n1st12 * 100 / (options.n1st12 + options.n2nd12 + options.n3rd12)), 2000);
    setTimeout(drawProbability(context, 5 * 4 * factor + buffX, 3 * 5 * factor + buffY, options.n1st12 * 100 / (options.n1st12 + options.n2nd12 + options.n3rd12)), 2000);
    setTimeout(drawProbability(context, 9 * 4 * factor + buffX, 3 * 5 * factor + buffY, options.n2nd12 * 100 / (options.n1st12 + options.n2nd12 + options.n3rd12)), 4000);
    setTimeout(drawProbability(context, 13 * 4 * factor + buffX, 3 * 5 * factor + buffY, options.n3rd12 * 100 / (options.n1st12 + options.n2nd12 + options.n3rd12)), 6000);
    setTimeout(drawProbability(context, 3 * 4 * factor + buffX, 4 * 5 * factor + buffY, options.n1to18 * 100 / (options.n1to18 + options.n19to36)), 8000);
    setTimeout(drawProbability(context, 5 * 4 * factor + buffX, 4 * 5 * factor + buffY, options.even * 100 / (options.even + options.odd)), 10000);
    setTimeout(drawProbability(context, 7 * 4 * factor + buffX, 4 * 5 * factor + buffY, options.red * 100 / (options.red + options.black)), 12000);
    setTimeout(drawProbability(context, 9 * 4 * factor + buffX, 4 * 5 * factor + buffY, options.black * 100 / (options.red + options.black)), 14000);
    setTimeout(drawProbability(context, 11 * 4 * factor + buffX, 4 * 5 * factor + buffY, options.odd * 100 / (options.even + options.odd)), 16000);
    setTimeout(drawProbability(context, 13 * 4 * factor + buffX, 4 * 5 * factor + buffY, options.n19to36 * 100 / (options.n1to18 + options.n19to36)), 18000);
}

function drawCircle(context, x1, y1, radius, color, nmbr) {
    nmbr = parseInt(nmbr);
    context.beginPath();
    context.arc(x1, y1, radius, 0, 2 * Math.PI, false);
    context.fillStyle = color;
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = '#003300';
    context.stroke();

    context.fillStyle = 'white';
    context.font = 1.2 * factor + 'pt Calibri';

    if(firstTimeLoading){
        if (nmbr < 10) {
            context.fillText(nmbr, x1 - (.45 * factor), y1 + (.45 * factor));
        }
        else {
            context.fillText(nmbr, x1 - (.8 * factor), y1 + (.45 * factor));
        }
    }else{
        if (nmbr < 10) {
            context.fillText(nmbr, x1, y1 + (.45 * factor));
        }
        else {
            context.fillText(nmbr, x1, y1 + (.45 * factor));
        }

    }
}

function drawText(context, text, color, font, x1, y1) {
    context.textAlign = 'center';
    context.fillStyle = color;
    context.font = font;
    context.fillText(text, x1, y1);
}

function drawLine(context, x1, y1, x2, y2) {
    context.strokeStyle = 'white';
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

function drawRectangle(context, x1, y1, color) {
    context.beginPath();
    context.rect(x1, y1,  2 * 4 * factor - factor, 5 * factor * 0.4);
    context.fillStyle = color;
    context.fill();
    //context.lineWidth = 1;
    //context.strokeStyle = 'white';
    //context.stroke();
}

function drawButtonRectangle(context, x1, y1, color, nmbr) {
    context.beginPath();
    context.rect(x1, y1, (4 * factor) - (0.2 * factor), (3 * factor));
    context.fillStyle = color;
    context.fill();
    context.fillStyle = 'white';
    context.font = 1.2 * factor + 'pt Calibri';
    context.fillText(nmbr, x1 + (2 * factor), y1 + (2.0 * factor));
}

function drawButtonTextRectangle(context, x1, y1, color, text) {
    context.beginPath();
    context.rect(x1, y1, (8 * factor) - (0.2 * factor), (3 * factor));
    context.fillStyle = color;
    context.fill();
    context.fillStyle = 'black';
    context.font = 1.2 * factor + 'pt Calibri';
    context.fillText(text, x1 + (4 * factor), y1 + (2.0 * factor));
}

function drawProbability(context, x1, y1, percent) {
    percent = Math.round(percent);
    context.globalAlpha = percent / 100;
    context.beginPath();
    context.rect(x1 - (4 * factor), y1, (4 * factor), (2 * factor));
    context.fillStyle = 'white';
    context.fill();
    context.fillStyle = 'blue';
    context.font = 1.2 * factor + 'pt calibri';
    context.fillText(percent, x1 - (2 * factor), y1 + (1.5 * factor));
}

function drawArea(context, nmbr, count) {
    context.globalAlpha = 1;
    var x1, y1;
    var rad = nmbr % 3;
    switch (rad) {
        case 0:
            y1 = 0 * 5 * factor + buffY;
            break;
        case 2:
            y1 = 1 * 5 * factor + buffY;
            break;
        case 1:
            y1 = 2 * 5 * factor + buffY;
            break;
    }

    var div = Math.floor((nmbr - 1) / 3);
    x1 = 1 * 4 * factor + buffX + (1 * 4 * factor * div);

    context.beginPath();
    context.rect(x1 + 2, y1 + (0.5 * 5 * factor), (4 * factor) - 4, (0.5 * 5 * factor) - 2);
    context.fillStyle = 'red';
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = 'yellow';
    context.stroke();

    context.beginPath();
    context.rect(x1 + (2 * factor), y1, (2 * factor), (1.5 * factor));
    context.fillStyle = 'yellow';
    context.fill();
    context.fillStyle = 'white';
    context.font = 1.2 * factor + 'pt calibri';
    context.fillText(count, x1 + (2 * factor), y1 + (4 * factor));
    context.fillStyle = 'red';
    context.fillText(nmbr, x1 + (3 * factor), y1 + (1.2 * factor));

}

function drawInputButtons() {
    for (var i = 0; i < 10; i++) {
        drawButtonRectangle(context, i * 4 * factor + buffX, 5.5 * 5 * factor + buffY, 'gray', i);
    }
    drawButtonTextRectangle(context, 10 * 4 * factor + buffX, 5.5 * 5 * factor + buffY, 'lightyellow', 'Cancel');
    drawButtonTextRectangle(context, 12 * 4 * factor + buffX, 5.5 * 5 * factor + buffY, 'lightyellow', 'Enter');
    //alert();
}

function drawInputStr(inputStr) {
    if (inputStr.length < 3) {
        context.clearRect(buffX, 4.6 * 5 * factor + buffY, 4 * factor - (0.3 * factor), 2 * factor);

        context.globalAlpha = 0.5;
        context.beginPath();
        context.rect(buffX, 4.6 * 5 * factor + buffY, 4 * factor - (0.3 * factor), 2 * factor);
        context.fillStyle = 'green';
        context.fill();

        context.fillStyle = 'white';
        context.font = 1.2 * factor + 'pt Calibri';
        context.fillText(inputStr, 2 * factor + buffX, 4.9 * 5 * factor + buffY);
    }
}

function drawInputArray() {
    context.clearRect(buffX, 3.1 * 5 * factor + buffY, 4 * factor - (0.3 * factor), 7 * factor);

    context.globalAlpha = 0.5;
    context.beginPath();
    context.rect(buffX, 3.1 * 5 * factor + buffY, 4 * factor - (0.3 * factor), 7 * factor);
    context.fillStyle = 'green';
    context.fill();

    context.fillStyle = 'white';
    context.font = 1.2 * factor + 'pt Calibri';

    for (var i = 0; i < inputArray.length; i++) {
        context.fillText(inputArray[i], 2 * factor + buffX, 3.1 * 5 * factor + buffY + ((2 * i + 2) * factor));
    }
    if (inputArray.length == 3) {
        var str = "," + inputArray.join(",") + ",";
    }
}

canvas.addEventListener('click', function (event) {
    //alert(event.pageX + "  " + event.pageY);
    for (var i = 0; i < 10; i++) {
        if (event.pageX > i * 4 * factor + buffX & event.pageX < (i * 4 * factor + buffX) + (4 * factor) - (0.2 * factor) &&
            event.pageY > 5.5 * 5 * factor + buffY && event.pageY < (5.5 * 5 * factor + buffY) + (3 * factor)) {
            var tempStr = inputStr + i.toString();
            if (tempStr != "00") {
                var nmbr = parseInt(tempStr);
                if (nmbr > 36) {
                    alert("Number cannot be greater than 36.");
                    return;
                }
            }
            inputStr += i.toString();
            drawInputStr(inputStr);
        }
    }
    if (event.pageX > 10 * 4 * factor + buffX & event.pageX < (10 * 4 * factor + buffX) + (8 * factor) - (0.2 * factor) &&
        event.pageY > 5.5 * 5 * factor + buffY && event.pageY < (5.5 * 5 * factor + buffY) + (3 * factor)) {
        inputStr = "";
        drawInputStr(inputStr)
    }
    if (event.pageX > 12 * 4 * factor + buffX & event.pageX < (12 * 4 * factor + buffX) + (8 * factor) - (0.2 * factor) &&
        event.pageY > 5.5 * 5 * factor + buffY && event.pageY < (5.5 * 5 * factor + buffY) + (3 * factor)) {
        if (inputArray.length >= 3) {
            inputArray.shift();
        }
        if (inputStr != "00") {
            inputStr = parseInt(inputStr).toString();
        }
        inputArray.push(inputStr);
        drawInputArray();
        inputStr = "";
        drawInputStr(inputStr);
        calculateResults();
    }

}, false);


// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    drawRoulette();
});


