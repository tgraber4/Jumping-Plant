var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var cRect = canvas.getBoundingClientRect();
var canvasx = Math.round(cRect.left)
var canvasy = Math.round(cRect.top)

var x = 0;
var y = 0;
var changer = 1;
var page = 1;
var arrownum = 1;
var lastarrow = 0;
var timechanger = 0;
var itemclick = 0;
var itemsel = 0;
var switcher = 1;
var arrowact = "no"
var end = "";
var windows = ["none", "none", "none"];
var startbox = [155, 197, 155, 50];
var game = "menu";
var windowslist = [[80, 40], [279, 143], [85, 257]]
var image1 = document.querySelector("#image1"); // width = 960 | height = 720
var image2 = document.querySelector("#image2"); // width = 934 | height = 700 -> width / 2 = 467 | height / 2 = 350
var image3 = document.querySelector("#image3");
var image4 = document.querySelector("#image4");
var image5 = document.querySelector("#image5"); // same as image1
var image6 = document.querySelector("#image6");
var image7 = document.querySelector("#image7");
var image8 = document.querySelector("#image8");
var image9 = document.querySelector("#image9");
var image10 = document.querySelector("#image10");
var image11 = document.querySelector("#image11");
var image12 = document.querySelector("#image12");
var image13 = document.querySelector("#image13");

var windowclick = function (num) {
    if (itemsel === 1) {
    windows[num] = "slip"  
    } else if (itemsel === 2) {
    windows[num] = "glue"  
    } else if (itemsel === 3) {
    windows[num] = "tack"   
    }
}
var startmenu = function () {

    ctx.fillStyle = "lightgrey";
    ctx.fillRect(0, 0, width, height); // clear
    ctx.drawImage(image1, 0, 0, image1.width, image1.height, 0 , 0, image1.width / 2, image1.height / 2)
    console.log("image5 width: " +image5.width)
    console.log("image5 height: " +image5.height)
    ctx.fillStyle = "black";
    ctx.font = "50px Arial";
    ctx.fillText("Jumping Plant", 90 , 60);
    ctx.fillText("Puzzle", 160 , 120);
    ctx.fillStyle = "darkgreen";
    ctx.fillRect(startbox[0] - 2, startbox[1] - 2, startbox[2]+ 4, startbox[3] + 4);
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(startbox[0], startbox[1], startbox[2], startbox[3]);
    ctx.fillStyle = "black"
    ctx.font = "25px Arial";
    ctx.fillText("Start Game", 170 , 230);
}
var startgame = function () {
    game = "playing";
    changer = 3
    x = 0
    imagechanger = 1
    window.requestAnimationFrame(loop1);
    arrows();
}
startmenu();
var clicking = function (event) {
    clickx = event.pageX - canvasx;
    clicky = event.pageY - canvasy;
    ctx.fillStyle = "black";
    ctx.font = "15px Arial";
    // ctx.fillText("x: " + clickx, 10, 70);
    // ctx.fillText("y: " + clicky, 10, 90);
    if (clickx > startbox[0] - 3 && clickx < (startbox[0] + startbox[2] + 2) && clicky > startbox[1] && clicky < (startbox[1] + startbox[3] + 2) && game == "menu") {
        startgame();
    }
    if (clickx > 219 && clickx < 269 && clicky > 300 && clicky < 359 && page === 1 && game == "playing") {
    page = 2
    arrownum = 1
    window.requestAnimationFrame(loop1);
    } else if (clickx > 218 && clickx < 268 && clicky > 15 && clicky < 242 && page === 2 && game == "playing") {
    page = 1
    arrownum = 1
    switcher = 0.4
    window.requestAnimationFrame(loop1); 
    } else if (clickx > 29 && clickx < 159 && clicky > 224 && clicky < 350 && page === 2 && game == "playing") {
    // image1.src = "";
    // image3.src = "";
    page = 3
    // image3.onload = function () {
    window.requestAnimationFrame(loop1);
    // }
    } else if (clickx > 7 && clickx < 45 && clicky > 5 && clicky < 50 && page === 3) {
    // image1.src = 'https://i.imgur.com/VRLuiZX.png';
    // image3.src = "";
    page = 2
    window.requestAnimationFrame(loop1);
    arrows();
    } else if (clickx > 201 && clickx < 271 && clicky > 373 && clicky < 440 && page === 1) {
    if (itemclick === 0) {   
    itemclick = 1;
    } else {
    itemclick = 0;
    }   
    } else if (clickx > 282 && clickx < 342 && clicky > 245 && clicky < 302 && page === 3) {
    itemsel = 1;
    window.requestAnimationFrame(loop1);  
    } else if (clickx > 120 && clickx < 162 && clicky > 234 && clicky < 307 && page === 3) {
    itemsel = 2;
    window.requestAnimationFrame(loop1);
    } else if (clickx > 280 && clickx < 349 && clicky > 162 && clicky < 212 && page === 3) {
    itemsel = 3;
    window.requestAnimationFrame(loop1);
    } else if (clickx > 72 && clickx < 172 && clicky > 72 && clicky < 116 && page === 1) {
    windowclick(0);
    } else if (clickx > 265 && clickx < 375 && clicky > 170 && clicky < 217 && page === 1) {
    windowclick(1);
    } else if (clickx > 69 && clickx < 175 && clicky > 275 && clicky < 332 && page === 1) {
    windowclick(2);
    } else if (((clickx > 369 && clickx < 427 && clicky > 266 && clicky < 291) || (clickx > 415 && clickx < 431 && clicky > 274 && clicky < 311) || (clickx > 383 && clickx < 428 && clicky > 294 && clicky < 325)) && page === 4) {
    page = 1
    changer = 3
    x = 0
    imagechanger = 1
    window.requestAnimationFrame(loop1);
    arrows(); 
    }
}
$("body").click(clicking);
var Ball = function () {
};
Ball.prototype.moving = function (guess) {
    if (guess === "left") {
    } else if (guess === "right") {
    }
}
var arrowswitch = function () {
    if (page === 1) {
    if (arrowact === "yes") {
    arrowact = "no" 
    ctx.fillStyle = "lightgrey";
    ctx.fillRect(0, 0, width, height); // clear
    ctx.drawImage(image1, 0, 0, image1.width, image1.height, 0 , 0, image1.width / 2, image1.height / 2)
    if (itemclick === 0) {
    ctx.drawImage(image6, 0, 0, image1.width, 180, 0 , 360, image1.width / 2, 90)
    } else {
    ctx.drawImage(image7, 0, 0, image1.width, 180, 0 , 360, image1.width / 2, 90) 
    }
    if (itemsel === 1) {
    ctx.drawImage(image8, 257, 178, 200, 200, 205 , 387, 50, 50)
    } else if (itemsel === 2) {
    ctx.drawImage(image8, 0, 0, 145, 145, 201 , 375, 60, 60)   
    } else if (itemsel === 3) {
    ctx.drawImage(image8, 0, 178, 220, 200, 200 , 375, 60, 60)   
    }
    if (windows[0] === "tack" || windows[1] === "tack" || windows[2] === "tack") {
    ctx.drawImage(image8, 178, 0, 170, 160, windowslist[windows.indexOf("tack")][0] , windowslist[windows.indexOf("tack")][1], 90, 90)   
    } else if (windows[0] === "slip" || windows[1] === "slip" || windows[2] === "slip") {
    ctx.drawImage(image13, 0, 0, 330, 200, windowslist[windows.indexOf("slip")][0] + 12, windowslist[windows.indexOf("slip")][1] + 45, 50, 50)   
    } else if (windows[0] === "glue" || windows[1] === "glue" || windows[2] === "glue") {
    ctx.drawImage(image13, 450, 0, 300, 200, windowslist[windows.indexOf("glue")][0] + 12, windowslist[windows.indexOf("glue")][1] + 45, 50, 50)   
    }
    if (changer === 1) {
    ctx.drawImage(image3, 0, 0, image3.width, image3.height,100 + x , -1 * ((-105/11252) * (x + 132) * (x + 132) + (13661/2813) * (x +132) -730), image3.width / 2, image3.height / 2)
    } else if (changer === 2) {
    ctx.drawImage(image3, 0, 0, image3.width, image3.height,290 - x , -1 * ((-105/11252) * (320 - x) * (320 - x) + (13661/2813) * (320 - x) -720), image3.width / 2, image3.height / 2)
    } else if (changer === 3) {
    ctx.drawImage(image3, 0, 0, image3.width, image3.height,100 + x , -1 * ((-2396/301125) *(x + 132) * (x + 132) + (309289/100375) * (x + 132) - 300), image3.width / 2, image3.height / 2)
    } else if (changer === 4) {
    ctx.drawImage(image3, 0, 0, image3.width, image3.height,290 - x , -1 * ((-2396/301125) *(320 - x) * (320 - x) + (309289/100375) * (320 - x) - 300), image3.width / 2, image3.height / 2)
    }
    }
    if (arrownum === 1) {
    ctx.drawImage(image4, 0, 0, 120, 120, 220 , 302, 60, 60)
    } else if (arrownum === 2) {
    ctx.drawImage(image4, 150, 0, 120, 120, 220 - 2 , 302, 60, 60)
    } else if (arrownum === 3) {
    ctx.drawImage(image4, 300, 0, 120, 120, 220 - 5 , 302, 60, 60)   
    } else if (arrownum === 4) {
    ctx.drawImage(image4, 450, 0, 120, 120, 220 - 7 , 302, 60, 60)
    }
    } else if (page === 2) {
    if (arrownum === 1) {
    ctx.drawImage(image4, 0, 190, 120, 120, 220 , 12, 60, 60)
    } else if (arrownum === 2) {
    ctx.drawImage(image4, 150, 190, 120, 120, 220 - 2 , 12, 60, 60)
    } else if (arrownum === 3) {
    ctx.drawImage(image4, 300, 190, 120, 120, 220 - 5 , 12, 60, 60)   
    } else if (arrownum === 4) {
    ctx.drawImage(image4, 450, 190, 120, 120, 220 - 7 , 12, 60, 60)
    }   
    }
}
var arrows = function () {
    if (page === 1) {
    arrowact = "yes"
    }
    if (page === 1 || page === 2) {
    window.requestAnimationFrame(arrowswitch);
    setTimeout(() => {
    arrows();}, 200);
    if (arrownum === 4) {
    lastarrow = 4
    arrownum = 3
    } else if (arrownum === 1) {
    lastarrow = 1
    arrownum += 1
    } else if (arrownum > 0 && arrownum > lastarrow) {
    lastarrow = arrownum
    arrownum += 1
    } else {
    lastarrow = arrownum
    arrownum -= 1
    }
    }
    }
    var windowtest = function (windnum) {
    if (windows[windnum] === "tack") {
    page = 4
    windows = ["none", "none", "none"]
    itemclick = 0;
    itemsel = 0;
    end = "tack"
    window.requestAnimationFrame(loop1);
    } else if (windows[windnum] === "slip") {
    page = 4
    windows = ["none", "none", "none"]
    itemclick = 0;
    itemsel = 0;
    end = "water"
    window.requestAnimationFrame(loop1);
    } else if (windows[windnum] === "glue") {
    // game over   
    }  
}
var loop1 = function () {
    ctx.fillStyle = "lightgrey";
    ctx.fillRect(0, 0, width, height); // clear
    if (page === 1) {
    x += 5
    ctx.drawImage(image1, 0, 0, image1.width, image1.height, 0 , 0, image1.width / 2, image1.height / 2)
    if (itemclick === 0) {
    ctx.drawImage(image6, 0, 0, image6.width, 180, 0 , 360, image6.width / 2, 90)
    } else {
    ctx.drawImage(image7, 0, 0, image7.width, 180, 0 , 360, image7.width / 2, 90) 
    }
    if (itemsel === 1) {
    ctx.drawImage(image8, 257, 178, 200, 200, 205 , 387, 50, 50)
    } else if (itemsel === 2) {
    ctx.drawImage(image8, 0, 0, 145, 145, 201 , 375, 60, 60)   
    } else if (itemsel === 3) {
    ctx.drawImage(image8, 0, 178, 220, 200, 200 , 375, 60, 60)   
    }
    if (windows[0] === "tack" || windows[1] === "tack" || windows[2] === "tack") {
    ctx.drawImage(image8, 178, 0, 170, 160, windowslist[windows.indexOf("tack")][0] , windowslist[windows.indexOf("tack")][1], 90, 90)   
    } else if (windows[0] === "slip" || windows[1] === "slip" || windows[2] === "slip") {
    ctx.drawImage(image13, 0, 0, 330, 200, windowslist[windows.indexOf("slip")][0] + 12, windowslist[windows.indexOf("slip")][1] + 45, 50, 50)   
    } else if (windows[0] === "glue" || windows[1] === "glue" || windows[2] === "glue") {
    ctx.drawImage(image13, 450, 0, 300, 200, windowslist[windows.indexOf("glue")][0] + 12, windowslist[windows.indexOf("glue")][1] + 45, 50, 50)   
    }
    arrowswitch();
    if (changer === 1) {
    y = -1 * ((-105/11252) * (x + 132) * (x + 132) + (13661/2813) * (x +132) -730)
    ctx.drawImage(image3, 0, 0, image3.width, image3.height,100 + x , y, image3.width / 2, image3.height / 2)
    } else if (changer === 2) {
    y = -1 * ((-105/11252) * (320 - x) * (320 - x) + (13661/2813) * (320 - x) -720)
    ctx.drawImage(image3, 0, 0, image3.width, image3.height,290 - x , y, image3.width / 2, image3.height / 2)
    } else if (changer === 3) {
    y = -1 * ((-2396/301125) *(x + 132) * (x + 132) + (309289/100375) * (x + 132) - 300)
    ctx.drawImage(image3, 0, 0, image3.width, image3.height,100 + x , y, image3.width / 2, image3.height / 2)
    } else if (changer === 4) {
    y = -1 * ((-2396/301125) *(320 - x) * (320 - x) + (309289/100375) * (320 - x) - 300)
    ctx.drawImage(image3, 0, 0, image3.width, image3.height,290 - x , y, image3.width / 2, image3.height / 2)
    }
    if (x < 190) {
    window.requestAnimationFrame(loop1);
    } else {
    if (changer === 3) {
    windowtest(1);
    setTimeout(() => { if (page === 1) { changer = 2
    x = 0; switcher = 1;
    window.requestAnimationFrame(loop1);}}, 1000 * switcher);
    } else if (changer === 2) {
    windowtest(2);
    setTimeout(() => { if (page === 1) { changer = 1
    x = 0; switcher = 1;
    window.requestAnimationFrame(loop1);}}, 1000 * switcher); 
    } else if (changer === 1) {
    windowtest(1);   
    setTimeout(() => { if (page === 1) { changer = 4
    x = 0; switcher = 1;
    window.requestAnimationFrame(loop1);}}, 1000 * switcher); 
    } else {
    windowtest(0);
    setTimeout(() => { if (page === 1) { changer = 3
    x = 0; switcher = 1;
    window.requestAnimationFrame(loop1);}}, 2000 * switcher);
    }
    }
    } else if (page === 2) {
    ctx.drawImage(image2, 0, 0, image2.width, image2.height, 0 , 0, (image2.width / 2) * 1.028, (image2.height / 2) * 1.028)
    arrowswitch();
    } else if (page === 3) {
    ctx.drawImage(image5, 0, 0, image5.width, image5.height, 0 , 0, image5.width / 2, image5.height / 2) 
    ctx.drawImage(image4, 0, 190, 120, 120, 2 , 2, 60, 60)
    ctx.drawImage(image6, 0, 0, image1.width, 180, 0 , 360, image1.width / 2, 90)
    ctx.drawImage(image8, 0, 0, 145, 145, 100 , 235, 72, 72)
    ctx.drawImage(image8, 257, 178, 200, 200, 270 , 245, 72, 72)
    ctx.drawImage(image8, 0, 178, 220, 200, 260 , 145, 90, 90)
    if (itemsel === 1) {
    ctx.drawImage(image8, 257, 178, 200, 200, 205 , 387, 50, 50)
    } else if (itemsel === 2) {
    ctx.drawImage(image8, 0, 0, 145, 145, 201 , 375, 60, 60)   
    } else if (itemsel === 3) {
    ctx.drawImage(image8, 0, 178, 220, 200, 200 , 375, 60, 60)   
    }
    } else if (page === 4) {
    if (end === "water") {
    ctx.drawImage(image11, 0, 0, image11.width, image11.height, 0 , 0, image11.width / 2, image11.height / 2)   
    } else if (end === "tack") {
    ctx.drawImage(image9, 0, 0, image9.width, image9.height, 0 , 0, image9.width / 2, image9.height / 2) 
    }   
    }
}
var keyNames = {
    37: "left",
    38: "up",
    39: "right",
    40: "down",
};
    var ball = new Ball();
    $("body").keydown(function (event) {
    var whatletteris = keyNames[event.keyCode];
    console.log(whatletteris);
    ball.moving(whatletteris);
    });
    