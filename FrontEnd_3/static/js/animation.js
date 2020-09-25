const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

let c = canvas.getContext("2d");

let mouse = {
  x: 0,
  y: 0,
}

window.addEventListener("mousemove", function(e) {
  mouse.x = e.x;
  mouse.y = e.y;
});

//lines
let lines = [];
let circles = 300;

for (let i = 0; i < circles; i++) {
  lines.push({
    x: Math.random() * innerWidth,
    y: Math.random() * innerHeight,
    radius: Math.floor(Math.random() * 5),
    dx: (Math.random() - 0.5) * 2,
    dy: (Math.random() - 0.5) * 2,
  });
}

//draw
function draw() {
  //Circles
  for (let i = 0; i < lines.length; i++) {
    let circle = lines[i];
    c.beginPath();
    c.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
    c.stroke();
    c.fillStyle = "black";
    c.fill();
  }
  //lines
  for (let i = 0; i < lines.length; i++) {
    let p1 = lines[i];
    c.moveTo(p1.x, p1.y);
    if (distance(mouse, p1) < 70) {
      c.lineTo(mouse.x, mouse.y);
    }
    for (let j = 0; j < lines.length; j++) {
      let p2 = lines[j];
      if (distance(p1, p2) < 70) {
        c.lineTo(p2.x, p2.y);
      }
    }
  }
  c.lineWidth = "0.05";
  c.strokeStyle = "black";
  c.stroke();
}

function update() {
  for (let i = 0; i < lines.length; i++) {
    let s = lines[i];
    if (s.x < 0 || s.x > canvas.width) {
      s.dx = -s.dx;
    }
    if (s.y < 0 || s.y > canvas.height) {
      s.dy = -s.dy;
    }
    s.x += s.dx;
    s.y += s.dy;
  }
  draw();
}

function distance(point1, point2) {
  let dx = 0;
  let dy = 0;

  dx = point2.x - point1.x;
  dx = dx * dx;
  dy = point2.y - point1.y;
  dy = dy * dy;

  return Math.sqrt(dx + dy);
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  update();
}

animate();
