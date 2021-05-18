let classifier;

let img;

function preload() {
  classifier = ml5.imageClassifier('MobileNet');
  img = loadImage(
    'https://cdn.glitch.com/b14c018f-089f-4bfa-a325-8d194d3b9a15%2Fthumbnails%2Fportrait-if-a-spitz-pomeranian_t20_v3o29E-5ae9bbdca18d9e0037d95983.jpg?1590242480807'
  );
}

function setup() {
  createCanvas(500, 600);
  classifier.classify(img, gotResult);
  img.resize(500, 600);
  image(img, 0, 0);
}
function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  createDiv('I think the image you uploaded is a :' + results[0].label);
  createDiv(
    'I say that with ' + nf(results[0].confidence, 0, 2) * 100 + '% confidence'
  );
}
