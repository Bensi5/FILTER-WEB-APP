NoseX = 0;
Nosey = 0;
function preload() {
lipstick=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}
function draw() {
    image(video,0,0,300,300);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',getPoeses);
    image(lipstick,NoseX,Nosey,50,25);
}
function take_snapsot() {
    save("Filtered Image.png");
}

function modelLoaded(){
    console.log("Model is loaded");
}
function getPoeses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x ="+results[0].pose.nose.x);
        console.log("nose  y ="+results[0].pose.nose.y);

        NoseX = results[0].pose.nose.x-28;
        Nosey = results[0].pose.nose.y+15
    }
}