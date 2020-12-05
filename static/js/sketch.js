// let shapeClassifier;
// let canvas;
// let resultDiv;
// let video;

// function setup(){
//     canvas = createCanvas(400, 400);
//     video = createCapture(VIDEO);
//     video.size(64,64);
//     background(255);

//     let options = {
//         inputs: [64, 64, 4],
//         task: "imageClassification",
//     };
//     shapeClassifier = ml5.neuralNetwork(options);

//     const modelData = {
//         model: "{{ url_for('model', filename='model.json",
//         metadata: "{{ url_for('model', filename='model_meta.json')}}",
//         weights: "{{ url_for('model', filename='model.weights.bin')}}"
//     }

//     shapeClassifier.load(modelData, modelLoaded);
//     resultDiv = createDiv('loading Model');
// }

// function classifyImage(){
//     shapeClassifier.classify({ image: video}, gotResults);
// }

// function modelLoaded(){
//     console.log("Model Ready!!");
//     classifyImage();
// }

// function gotResults(err, results){
//     if(err){
//         console.error(err);
//         return;
//     }
//     let label = results[0].label;
//     let confidence = nf(100*results[0].confidence, 2, 0);
//     resultDiv.html(`${label} ${confidence}%`);
//     classifyImage();
// }

// function draw(){
//     image(video, 0, 0, width, height);
// }