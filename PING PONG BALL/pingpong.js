let x, y, xSpeed = 5, ySpeed = 5;
let ismoving = true;
let score = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth / 2;
  y = windowHeight / 2;
}

function draw() {
  background(0, 0, 255);
  stroke(255);
  strokeWeight(1);
  fill(200);

  // Draw paddles
  rect(30, mouseY, 10, 100); // Left paddle
  rect(width - 40, mouseY, 10, 100); // Right paddle

  // Draw ball
  ellipse(x, y, 20, 20);

  if (ismoving) {
    x += xSpeed;
    y += ySpeed;
  }

  // Bounce off top and bottom walls
  if (y <= 10 || y >= height - 30) {
    ySpeed *= -1;
  }

  // Check collision with the **front edge** of the left paddle
  if (x - 10 <= 40 && x - 10 > 30 && y > mouseY && y < mouseY + 100) {
    xSpeed *= -1;
    x = 40 + 10; // Push ball to avoid overlap
    score++;
  }

  // Check collision with the **front edge** of the right paddle
  if (x + 10 >= width - 40 && x + 10 < width - 30 && y > mouseY && y < mouseY + 100) {
    xSpeed *= -1;
    x = width - 40 - 10; // Push ball to avoid overlap
    score++;
  }

  // Check if the ball misses the paddles
  if (x < 0 || x > width) {
    ismoving = false;
    textSize(32);
    fill(255, 0, 0);
    textAlign(CENTER);
    text(`Game Over! Final Score: ${score}`, width / 2, height / 2);
    noLoop(); // Stop the game
  }

  // Display score
  textSize(20);
  fill(255);
  text(`Score: ${score}`, width / 2, 30);
}

function mousePressed() {
  if (x > 0 && x < width) {
    ismoving = !ismoving;
  }
}
