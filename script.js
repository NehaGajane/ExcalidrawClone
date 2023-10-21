var menu = document.getElementById('menuItems');
var display = 0;

function hideShow() {
    if(display == 0){
        menuItems.style.display = 'block';
        display = 1;
    }
    else if(display == 1){
        menuItems.style.display = 'none';
       display = 0;
    }
}

document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('menuItems');
    var conatinerMenuBtn = document.getElementById('menu-btn')
    if (!container.contains(e.target) && !conatinerMenuBtn.contains(e.target)) {
        container.style.display = 'none';
        display = 0;
    }
});

document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('logo-img');
    if (!container.contains(e.target)) {
        container.style.display = 'none';
    }
});

document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('logo-text');
    if(!container.contains(e.target)) {
        container.style.display = 'none';
    }
});

document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('center-menu');
    if(!container.contains(e.target)) {
        container.style.display = 'none';
    }
});


//toolbar buttons

//lock layers button active and npn active state
let locklayer = document.getElementById('lock-layer');
let locked = false;

function lock() {
    if(locked == false) {
        locklayer.style.background = 'rgb(224,223,255)';
        locked = true;
    } 

    else {
        locklayer.style.background = 'white';
        locked = false;
    }
}

// change cursre pointer when pencil is selected
let pencilPoint = document.getElementById('pencil');

let pointer = false;

function pencil() {
    
    if(pointer == false){
        canvas.style.cursor = 'crosshair';
        pencilPoint.style.background = 'rgb(224,223,255)'
        pointer = true;
    }
    else{
        canvas.style.cursor = 'auto';
        pencilPoint.style.background = 'white';
        pointer = false;
    }
}

//make pencil active
let click = document.getElementById("pencil");
let isactive = false;
function clicked() {
 click = document.addEventListener('click', draws());
}



function draws() {

    if (isactive) {
        isactive = false;
        // Remove event listeners
        window.removeEventListener('mousedown', startDrawing);
        window.removeEventListener('mouseup', stopDrawing);
        window.removeEventListener('mousemove', sketch);
        window.removeEventListener('resize', resize);
        // console.log('bye');
      } else {
        isactive = true;
        // Add event listeners
        window.addEventListener('mousedown', startDrawing);
        window.addEventListener('mouseup', stopDrawing);
        window.addEventListener('mousemove', sketch);
        window.addEventListener('resize', resize);
        // console.log('hi');
      }
    };

    const canvas = document.querySelector('canvas');

    const ctx = canvas.getContext('2d');

    ////////

    ctx.setTransform(1, 0.2, 0.8, 1, 0, 0);

    function resize(){
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
    }

    resize();

    let coord = {x:0, y:0};

    let paint = false;

    function getPosition(event) {
        coord.x = event.clientX - canvas.offsetLeft;
        coord.y = event.clientY - canvas.offsetTop;
    }

    function startDrawing(event) {
        paint = true;
        getPosition(event);
    }

    function stopDrawing() {
        paint = false;
    }

    function sketch(event) {
        if(!paint) return;
        ctx.beginPath();

        ctx.lineWidth = 5;

        ctx.lineCap = 'round';

        ctx.strokeStyle = 'green';

        ctx.moveTo(coord.x, coord.y);

        getPosition(event);

        ctx.lineTo(coord.x, coord.y);

        ctx.stroke();
    }