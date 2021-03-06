const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerWidth/1.5;

const c = canvas.getContext('2d');

function Circle (x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        c.strokeStyle = this.color;
        c.stroke();
    }

    this.update = function() {
        if(this.x + this.radius> innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if(this.y + this.radius> innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}


let x, y, dx, dy, radius;
const circleArr = [];

for (let i = 0; i < 50; i++) {
    x = Math.random() * (innerWidth - radius * 2) + radius;
    y = Math.random() * (innerHeight - radius *2) + radius;
    dx = (Math.random() -0.5) * 2;
    dy = (Math.random() -0.5) * 2;
    radius = Math.random() * 10+6;
    let randomColor = "#" + Math.floor(Math.random() * 20000000+5542195).toString(16);
    circleArr.push(new Circle(x, y, dx, dy, radius, randomColor));
}


const circle = new Circle(1, 1, 1, 1, 1);

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth+1, innerHeight+2);
    
    for( let i = 0; i < circleArr.length; i++) {
        circleArr[i].update();
    }
}

animate();
























