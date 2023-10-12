x = 0;
y = 0;
screen_width = 0
screen_height = 0
draw_apple = "";
apple = ""
speak_data = ""
to_number = 0
var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
  document.getElementById("status").innerHTML = "System is listening please speak";
  recognition.start();
}

recognition.onresult = function (event) {

  console.log(event);

  content = event.results[0][0].transcript;
  console.log(content);
  document.getElementById("status").innerHTML = "The speech has been recognized: " + content;
  to_number = Number(content);
  console.log(to_number);
  if (Number.isInteger(to_number)) {
    document.getElementById("status").innerHTML = "started drawing apple";
    draw_apple = "set"

  }
  else {
    document.getElementById("status").innerHTML = "The speech has not recognised the number ";
  }
}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
  canvas = createCanvas(screen_width,screen_height)
}

function draw() {
  if (draw_apple == "set") {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    for (i = 0; i < to_number; i++) {

      x = Math.floor(Math.random() * 900)
      y = Math.floor(Math.random() * 600)

      image(apple, x, y, 50, 50)
      draw_apple = "";
    }
  }
}

function speak() {
  var synth = window.speechSynthesis;

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);

  speak_data = "";
}

function preload() {
  apple = loadImage("apple.png")

}
