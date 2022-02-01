difference=0;
rightWristx=0;
leftWristx=0;

function preload(){

}
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(100, 100);


    canvas = createCanvas(550, 550);
    canvas.position(560, 150);


    posenet=ml5.poseNet(video, modalLoaded);
    posenet.on('pose', gotResult);
}
function draw(){
    background("#2ff172")
    fill("#hy56hj");
    text("christian", 30, 40);
    textSize(difference);

    document.getElementById("font-size").innerHTML = "font size of the text is " + difference +" px";
}

function modalLoaded(){
    console.log("Modal has been loaded");
}
function gotResult(results){
    if(results.length > 0){
        console.log(results);
        rightWristx=results[0].pose.rightWrist.x;
        leftWristx=results[0].pose.leftWrist.x;
        difference=floor(leftWristx-rightWristx);

        console.log("The position of the left wrist is "+leftWristx+" and the right is "+rightWristx);
    }
}